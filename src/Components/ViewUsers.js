import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import EditUser from './EditUser';

class ViewUsers extends Component {
  render() {
    return (
      <div>
        <h1 className='post_heading'>All Users</h1>

        {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? (
              <EditUser post={post} key={post.id} />
            ) : (
              <User key={post.id} post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps)(ViewUsers);
