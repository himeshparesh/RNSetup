import {store} from '@root/store/configureStore';

export type RootState = ReturnType<typeof store.getState>;
