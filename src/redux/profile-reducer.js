const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

// let initialState делаем переменную по умолчанию для profileReducer, 
// на случай когда state е будет передан
let initialState = {
  newPostText: "input your text here",
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: "likes 15" },
    { id: 2, message: "It's my first post", likesCount: "likes 23" },
  ],
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      }
    }
      case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: "ADD_POST",
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newText: text,
  };
};

export default profileReducer;
