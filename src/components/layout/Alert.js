/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Alert } from 'antd';
import 'antd/dist/antd.css';

const onClose = e => {
  console.log(e, 'Warning message was closed.');
};


const alertNavbar = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
  alert !== null && (<Alert
    message= {alert.msg}
    type="warning"
    closable
    onClose={onClose}
  />)

  );
};

export default alertNavbar;
