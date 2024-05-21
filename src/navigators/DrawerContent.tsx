import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* {props?.state.routes.map(item => {
        return (
          <DrawerItem
            label={item?.name}
            onPress={() => props.navigation.navigate(item?.name)}
          />
        );
      })} */}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
