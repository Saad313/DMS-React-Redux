import React from 'react';
import { connect } from 'react-redux';

class EditUser extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const newName = this.getName.value;
    const newEmail = this.getEmail.value;
    const newContactNo = this.getContactNo.value;
    const newAddress = this.getAddress.value;
    const data = {
      newName,
      newEmail,
      newContactNo,
      newAddress,
    };
    this.props.dispatch({
      type: 'UPDATE_User',
      id: this.props.post.id,
      data: data,
    });
    // this.getName.value = '';
    // this.getEmail.value = '';
    // this.getAddress.value = '';
    // this.getContactNo.value = '';
  };

  render() {
    return (
      <div key={this.props.post.id} className='post'>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            required
            type='text'
            ref={(input) => (this.getName = input)}
            defaultValue={this.props.post.name}
            placeholder='Name'
          />
          <br />
          <br />
          <input
            required
            type='text'
            ref={(input) => (this.getEmail = input)}
            defaultValue={this.props.post.email}
            placeholder='Email'
          />
          <br />
          <br />
          <input
            required
            type='text'
            ref={(input) => (this.getContactNo = input)}
            defaultValue={this.props.post.contactNo}
            placeholder='Contact Number'
          />
          <br />
          <br />
          <textarea
            required
            rows='2'
            ref={(input) => (this.getAddress = input)}
            defaultValue={this.props.post.address}
            cols='28'
            placeholder='Address'
          />
          <br />
          <br />
          <button>Update</button>
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

export default connect()(EditUser);
