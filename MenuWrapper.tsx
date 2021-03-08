import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

interface ItemInterace {
  key?: string;
  title: string;
  icon?: Object;
  childern?: Array<ItemInterace>;
};

interface PropsInterface {
  dataSource: Array<ItemInterace>;
  mode?: string;
  theme?: string;
  onSelect?: (event: any) => void;
};

export default function MenuWrapper(props: PropsInterface) {
  const dataSource = Array.isArray(props.dataSource)?props.dataSource:[];
  // horizontal, vertical, inline
  const mode = (props.mode)?props.mode:'horizontal';
  // light, dark
  const theme = (props.theme)?props.theme:'light';

  const handleSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    if (props.onSelect) {
      props.onSelect({ item, key, keyPath, selectedKeys, domEvent });
    }
  };

  return (
    <React.Fragment>
      <Menu 
        mode={mode} 
        theme={theme} 
        onSelect={handleSelect}
      >
        { dataSource.map((item, itemIndex) => {
          return (
            <SubMenu 
              key={(item.key)?item.key:itemIndex} 
              title={item.title}
              icon={item.icon}
            >
              { item.childern?.map((subItem, subItemIndex) => {
                return (
                  <React.Fragment>
                    <Menu.Item 
                      key={
                        (subItem.key)?subItem.key:(itemIndex + '.' + subItemIndex)
                      }
                      icon={subItem.icon}
                    >
                      {subItem.title}
                    </Menu.Item>
                  </React.Fragment>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </React.Fragment>
  );
}
