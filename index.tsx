import React from 'react';
import { render } from 'react-dom';

import "antd/dist/antd.css";
import { DashboardOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

import DataMenu from './DataMenu';

function App() {
  const menus = [
    { 
      key: '/',
      title: 'Dashboard',
      icon: <DashboardOutlined />,
    },
    { 
      title: 'User',
      icon: <TeamOutlined />,
      children: [
        { title: 'User Management', key: '/user', disabled: true },
        { title: 'User Privileges', key: '/user/privileges', hidden: true },
      ]
    },
    { 
      title: 'Account', 
      icon: <UserOutlined />,
      children: [
        { title: 'Profile', key: '/account' },
        { title: 'Logout', key: '/account/logout' },
      ]
    },
  ];

  const handleSelect = ({ key }) => {
    alert('key: ' + key);
  };

  return (
    <React.Fragment>
      <DataMenu 
        dataSource={menus} 
        mode={'inline'} 
        onSelect={handleSelect} 
      />
    </React.Fragment>
  );
}

render(<App />, document.getElementById('root'));
