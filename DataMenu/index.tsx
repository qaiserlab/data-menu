import React from 'react';
import { Menu } from 'antd';
import { PropsInterface } from './schema'

const { SubMenu } = Menu;

export default class DataMenu extends React.Component<PropsInterface, {}> {
  public static defaultProps: Partial<PropsInterface> = {
    dataSource: [],
    // horizontal, vertical, inline
    mode: 'horizontal',
    // light, dark
    theme: 'light',
  };

  constructor(props: PropsInterface) {
    super(props);

    // this.state = {test: true};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect({ item, key, keyPath, selectedKeys, domEvent }) {
    if (this.props.onSelect) {
      this.props.onSelect({ item, key, keyPath, selectedKeys, domEvent });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Menu 
          mode={this.props.mode} 
          theme={this.props.theme} 
          onSelect={this.handleSelect}
        >
          { this.props.dataSource.map((item, itemIndex) => {
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
}
