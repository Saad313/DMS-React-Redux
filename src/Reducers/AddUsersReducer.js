const AddUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'Add_User':
      return state.concat([action.data]);
    case 'Delete_User':
      return state.filter((post) => post.id !== action.id);
    case 'Edit_User':
      return state.map((post) =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case 'UPDATE_User':
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            name: action.data.newName,
            email: action.data.newEmail,
            contactNo: action.data.newContactNo,
            address: action.data.newAddress,
            editing: !post.editing,
          };
        } else return post;
      });
    default:
      return state;
  }
};

export default AddUsersReducer;
