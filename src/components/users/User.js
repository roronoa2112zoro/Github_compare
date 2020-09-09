import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
import { Card } from 'antd';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
        
      <Row gutter={150}>
        <Col flex="100px">
        <Card size= "default"
          hoverable
          style={{ width: '190%' }}
          cover={<img alt="Avatar" className="round-img"  src={avatar_url} />}
          >
          <div className='all-center'>
            <h1><strong>{name}</strong></h1>
            <p>Location: {location}</p>
          </div>
        </Card>
        </Col>
        <Col flex="auto">
        <Card hoverable>
        <div>
          {bio && (
            <Fragment>
              <h3><strong>Github Bio</strong></h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <a href = {blog}><strong>Website: </strong></a> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
        </Card>
        </Col>
        </Row>
       
       <div className= "card text-center">
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
      
      <Card >
      <Repos repos= {repos} />
      
      </Card>
      </Fragment>
        






      /* <Card className="card text-center"
      hoverable
      style={{ width: '20%', alignContent: "center" }}
      cover={<img alt="Avatar" src={avatar_url} />}>
      
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        </Card>
        <Card>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <a href = {blog}><strong>Website: </strong></a> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
        </Card>
      
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} /> */
    
    
  );
};

export default User;
