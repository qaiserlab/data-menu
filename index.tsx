import React from 'react';
import { render } from 'react-dom';

import "antd/dist/antd.css";
import { DashboardOutlined, PoweroffOutlined } from "@ant-design/icons";

import MenuWrapper from './MenuWrapper';

function App() {
  const menus = [
    { 
      title: 'Dashboard',
      icon: <DashboardOutlined />,
      childern: [
        { title: 'Save' },
        { title: 'Save As', key: '/save-as' },
        { title: 'Exit', icon: <PoweroffOutlined /> },
      ]
    },
    { title: 'Settings' },
    { 
      title: 'Account', 
      childern: [
        { title: 'Profile', key: '/profile' },
        { title: 'Logout' },
      ]
    },
  ];

  const handleSelect = ({ key }) => {
    alert('KEY: ' + key);
  };

  return (
    <React.Fragment>
      <MenuWrapper 
        dataSource={menus} 
        mode={'inline'} 
        onSelect={handleSelect} 
      />
    </React.Fragment>
  );
}

render(<App />, document.getElementById('root'));
