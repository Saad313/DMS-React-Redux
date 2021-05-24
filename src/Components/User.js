import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    return (
      <div className='post'>
        <h2 className='post_title'>{this.props.post.name}</h2>
        <p className='post_message'>{this.props.post.email}</p>
        <p className='post_message'>{this.props.post.contactNo}</p>
        <p className='post_message'>{this.props.post.address}</p>
        <div className='control-buttons'>
          <button
            className='edit'
            onClick={() =>
              this.props.dispatch({ type: 'Edit_User', id: this.props.post.id })
            }
          >
            Edit
          </button>
          <button
            className='delete'
            onClick={() =>
              this.props.dispatch({
                type: 'Delete_User',
                id: this.props.post.id,
              })
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(User);
