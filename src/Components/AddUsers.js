import React from 'react';
import { connect } from 'react-redux';

class AddUsers extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const email = this.getEmail.value;
    const contactNo = this.getContactNo.value;
    const address = this.getAddress.value;
    const data = {
      id: new Date(),
      name,
      email,
      contactNo,
      address,
      editing: false,
    };
    this.props.dispatch({
      type: 'Add_User',
      data,
    });
    this.getName.value = '';
    this.getEmail.value = '';
    this.getAddress.value = '';
    this.getContactNo.value = '';
  };

  render() {
    return (
      <div className='post-container'>
        <h1 className='post_heading'>Add User</h1>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            required
            type='text'
            ref={(input) => (this.getName = input)}
            placeholder='Name'
          />
          <br />
          <br />
          <input
            required
            type='text'
            ref={(input) => (this.getEmail = input)}
            placeholder='Email'
          />
          <br />
          <br />
          <input
            required
            type='text'
            ref={(input) => (this.getContactNo = input)}
            placeholder='Contact Number'
          />
          <br />
          <br />
          <textarea
            required
            rows='2'
            ref={(input) => (this.getAddress = input)}
            cols='28'
            placeholder='Address'
          />
          <br />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     posts: state,
//   };
// };

export default connect()(AddUsers);
