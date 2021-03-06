import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: '',
        user_password: '',
      },
    };
  }
  handleFormChange = (event) => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew,
    });
  };

  login = (event) => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === 'admin' && user_password === '123') {
      this.setState({
        islogged: true,
      });
    }
    event.preventDefault();
  };
  render() {
    if (this.state.islogged) {
      return <Redirect to='/ManageUser' />;
    }
    return (
      <div className='container'>
        <form onSubmit={this.login} className='form'>
          <h1 className='post_heading'>Please sign in</h1>
          <div className='row'>
            <div className='col'>
              <input
                type='text'
                name='user_id'
                onChange={this.handleFormChange}
                placeholder='Enter Username'
              />
              <input
                type='password'
                name='user_password'
                onChange={this.handleFormChange}
                placeholder='Enter Password'
              />
              <div>
                <input type='submit' value='Login' />
              </div>
            </div>
          </div>

          <p>user_id === "admin" && user_password === "123"</p>
        </form>
      </div>
    );
  }
}
export default Login;
