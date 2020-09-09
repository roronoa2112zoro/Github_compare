import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu} from 'antd';
import { GithubFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import MenuItem from 'antd/lib/menu/MenuItem';

const Navbar = ({ title }) => {
  return (
    <Layout className="layout">
      <div className="logo" />
        <Menu theme="dark" mode="horizontal" >
        <MenuItem ><a href="/"><GithubFilled /></a>{title}</MenuItem>
        <Menu.Item ><a href="/">Home</a></Menu.Item>
        <Menu.Item ><a href="/about">About</a></Menu.Item>
        </Menu>
    </Layout>
  );
};

Navbar.defaultProps = {
  title: 'GithubCompare',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
