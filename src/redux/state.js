// import { profileReducer } from './profile-reducer'

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      newPostText: "input your text here",
      postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: "likes 15" },
        { id: 2, message: "It's my first post", likesCount: "likes 23" },
      ],
      
    },
    messagesPage: {
      dialogMessage: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Where are you from?" },
      ],
      newMessageBody: "",
      dialogData: [
        {
          id: 1,
          name: "Mark",
          photo: (
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="man"
            />
          ),
        },
        {
          id: 2,
          name: "Elon",
          photo: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFCPvs_TKkJJVCNiyB4mlnD9CkHIrUPfGm5W6QrAs3DBycz9xE7Y_HE9Who0pP2eTcCs&usqp=CAU"
              alt="man"
            />
          ),
        },
        {
          id: 3,
          name: "Tim",
          photo: (
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
              alt="man"
            />
          ),
        },
        {
          id: 4,
          name: "Steve",
          photo: (
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="man"
            />
          ),
        },
        {
          id: 5,
          name: "Meri",
          photo: (
            <img
              src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-ali-pazani-2584269.jpg&fm=jpg"
              alt="girl"
            />
          ),
        },
        {
          id: 6,
          name: "Katy",
          photo: (
            <img
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
              alt="girl"
            />
          ),
        },
        {
          id: 7,
          name: "Lui",
          photo: (
            <img
              src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
              alt="man"
            />
          ),
        },
      ],
    },
    sidebarPage: {
      sidebarFriends: [
        {
          id: 4,
          name: "Steve",
          photo: (
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="man"
            />
          ),
        },
        {
          id: 6,
          name: "Katy",
          photo: (
            <img
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
              alt="girl"
            />
          ),
        },
        {
          id: 7,
          name: "Lui",
          photo: (
            <img
              src="https://lh4.googleusercontent.com/cRKexF-pl7ZNuV8_YVxd99jTiEV7PJNF0ti2MDPR3bxOngDWSoYppE-uXt95FDnQcNjmXFzbICFfzsDnitZ4AeaZmwkpyTksWT0Sazd3aUBiZjTZqqw6oGTUYYo7NOXxpyAL9Yin"
              alt="man"
            />
          ),
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    // profileReducer(this._state.profilePage, action);

    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (addPostActionCreator.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (addPostActionCreator.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = "";
      this._state.messagesPage.dialogMessage.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};
export const updateNewPostTextActionCreator = (body) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    body: body,
  };
};
export const sendMessageCreator = () => {
  return {
    type: "SEND_MESSAGE",
  };
};
export const updateNewMessageBodyCreator = (text) => {
  return {
    type: "UPDATE_NEW_MESSAGE_BODY",
    newText: text,
  };
};
window.store = store;
export default store;
