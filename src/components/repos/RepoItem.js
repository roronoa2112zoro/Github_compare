import React from 'react';
import PropTypes from 'prop-types';
import { Card, Space } from 'antd';

const RepoItem = ({ repo }) => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}><br/>
    <Card hoverable>
    
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    
    </Card>
    </Space>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
