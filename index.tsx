import React from 'react';
import { render } from 'react-dom';

import "antd/dist/antd.css";
import { DashboardOutlined, PoweroffOutlined } from "@ant-design/icons";

import DataMenu from './DataMenu';

function App() {
  const menus = [
    { 
      title: 'Dashboard',
      icon: <DashboardOutlined />,
      childern: [
        { title: 'Save', hidden: true },
        { title: 'Save As', key: '/save-as', disabled: true },
        { title: 'Exit', icon: <PoweroffOutlined /> },
      ]
    },
    { title: 'Settings', hidden: true },
    { 
      title: 'Account', 
      childern: [
        { title: 'Profile', key: '/profile' },
        { title: 'Logout' },
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
