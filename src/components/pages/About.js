import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
    <br/>
    <div className="container">
      <h1><u>About This App</u></h1>
      <p>This is a React App to Search Github users.</p>
      <p>his app uses the Context API along with the useContext and useReducer hooks for state management</p>
      <p>In this app you can search for any user and see his/her github repositories, number of followers and following. </p>
      <p>Or you can directly go to the Github Profile itself.</p>
      <p>Version: <strong>1.0.0</strong></p>
      <br/>
      <strong>Github link for this project is given below:   </strong>
      <a href="https://github.com/roronoa2112zoro/Github_compare">GithubCompare Project</a>
    </div>
    </Fragment>
  );
};

export default About;
