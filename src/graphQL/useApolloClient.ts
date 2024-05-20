import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NextLink,
  NormalizedCacheObject,
  Operation,
  createHttpLink,
  from,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {ErrorResponse, onError} from '@apollo/client/link/error';
import {statusCode} from '@root/apiManager/apiConsts';
import {keys} from '@root/res/global';
import {ToastType} from '@root/types/types';
import {Utils} from '@root/utils';
import {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {ENV_GRAPHQL_URL} from '../../env';

interface Client {
  client?: ApolloClient<NormalizedCacheObject>;
  clearCache: () => void;
}

export const authLink = setContext(async (_, {token, headers}) => {
  if (!token) {
    const user = await Utils.Utility.getLocalDataByKey(keys.KEY_USER_DATA);
    token = user?.data?.api_token;
  }

  return {
    token,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const useApolloClient = (): Client => {
  const {t} = useTranslation();
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const dispatch = useDispatch();

  const requestResponseLink = new ApolloLink(
    (operation: Operation, forward: NextLink) => {
      return forward(operation).map(response => {
        // console.log('------------------------------');
        // console.log(
        //   'OP NAME:',
        //   JSON.stringify(operation?.operationName, null, 2),
        // );
        // console.log('OP REQ:', JSON.stringify(operation?.variables, null, 2));
        // console.log('OP RES:', JSON.stringify(response?.data, null, 2));
        // console.log('OP ERR:', JSON.stringify(response?.errors, null, 2));
        // console.log('------------------------------');
        return response;
      });
    },
  );

  const clearCache = useCallback(async () => {
    client?.cache.gc();
    await client?.clearStore();
  }, [client]);

  const errorLink = onError(
    ({graphQLErrors, networkError, operation}: ErrorResponse) => {
      if (
        graphQLErrors &&
        graphQLErrors?.length > 0 &&
        graphQLErrors[0]?.message
      ) {
        if (
          graphQLErrors[0]?.extensions?.category === 'graphql-authorization'
        ) {
          // dispatch(signOut());
          Utils.Utility.clearUserData();
        }
      } else if (networkError) {
        if (networkError?.statusCode == statusCode.UNAUTHORIZED) {
          Utils.Utility.showMessage(
            ToastType.error,
            t('text.yourLoginSessionExpired'),
          );
        }
      }
    },
  );

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const user = await Utils.Utility.getLocalDataByKey(keys.KEY_USER_DATA);

    const httpLink = createHttpLink({
      uri: ENV_GRAPHQL_URL,
      headers: {
        Authorization: `Bearer ${user?.token}` || '',
      },
    });
    const newClient = new ApolloClient({
      link: from([
        errorLink,
        requestResponseLink.concat(authLink).concat(httpLink),
      ]),

      cache: new InMemoryCache(),
      defaultOptions: {
        mutate: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        query: {
          errorPolicy: 'all',
          fetchPolicy: 'network-only',
        },
        watchQuery: {
          errorPolicy: 'all',
          fetchPolicy: 'network-only',
        },
      },
    });

    setClient(newClient);
  };

  return {
    client,
    clearCache,
  };
};
