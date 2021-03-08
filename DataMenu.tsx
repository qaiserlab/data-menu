import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

interface ItemInterace {
  key?: string;
  title: string;
  icon?: Object;
  disabled?: boolean;
  hidden?: boolean;
  childern?: Array<ItemInterace>;
};

interface PropsInterface {
  dataSource: Array<ItemInterace>;
  mode?: string;
  theme?: string;
  onSelect?: (event: any) => void;
};

export default function DataMenu(props: PropsInterface) {
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
          if (!item.hidden) {
            return (
              <SubMenu 
                key={(item.key)?item.key:itemIndex} 
                title={item.title}
                icon={item.icon}
                disabled={item.disabled}
              >
                { item.childern?.map((subItem, subItemIndex) => {
                  if (!subItem.hidden) {
                    return (
                      <React.Fragment>
                        <Menu.Item 
                          key={
                            (subItem.key)?subItem.key:(itemIndex + '.' + subItemIndex)
                          }
                          icon={subItem.icon}
                          disabled={subItem.disabled}
                        >
                          {subItem.title}
                        </Menu.Item>
                      </React.Fragment>
                    );
                  }
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>
    </React.Fragment>
  );
}
