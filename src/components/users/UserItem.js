import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Space } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  return (
    <Space direction= "vertical">
    <Card className='card text-center'
      hoverable
      style={{ width: '100%' }}
      cover={<img alt="Avatar" src={avatar_url} />}>
      
     <Meta title={login} description={html_url}/>
     <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </Card>
    </Space>
    
  )
  // return (
  //   <div className='card text-center'>
  //     <img
  //       src={avatar_url}
  //       alt=''
  //       className='round-img'
  //       style={{ width: '60px' }}
  //     />
  //     <h3>{login}</h3>

  //     <div>
  //       <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
  //         More
  //       </Link>
  //     </div>
  //   </div>
  // );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
