import { renderEntireTree } from "../render";


let state = {
  profilePage: {
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
    dialogData: [
      { id: 1, name: "Mark", photo: <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="man" />},
      { id: 2, name: "Elon", photo:  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFCPvs_TKkJJVCNiyB4mlnD9CkHIrUPfGm5W6QrAs3DBycz9xE7Y_HE9Who0pP2eTcCs&usqp=CAU" alt="man" />},
      { id: 3, name: "Tim", photo:  <img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" alt="man" /> },
      { id: 4, name: "Steve", photo:  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="man" /> },
      { id: 5, name: "Meri", photo:  <img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-ali-pazani-2584269.jpg&fm=jpg" alt="girl" /> },
      { id: 6, name: "Katy", photo:  <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" alt="girl" /> },
      { id: 7, name: "Lui", photo:  <img src="https://lh4.googleusercontent.com/cRKexF-pl7ZNuV8_YVxd99jTiEV7PJNF0ti2MDPR3bxOngDWSoYppE-uXt95FDnQcNjmXFzbICFfzsDnitZ4AeaZmwkpyTksWT0Sazd3aUBiZjTZqqw6oGTUYYo7NOXxpyAL9Yin" alt="man" /> },
    ],
  },
  sidebarPage: {
    sidebarFriends: [
      {id: 4, name: "Steve", photo:  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="man" /> },
      { id: 6, name: "Katy", photo:  <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" alt="girl" /> },
      { id: 7, name: "Lui", photo:  <img src="https://lh4.googleusercontent.com/cRKexF-pl7ZNuV8_YVxd99jTiEV7PJNF0ti2MDPR3bxOngDWSoYppE-uXt95FDnQcNjmXFzbICFfzsDnitZ4AeaZmwkpyTksWT0Sazd3aUBiZjTZqqw6oGTUYYo7NOXxpyAL9Yin" alt="man" /> },
    ],
  }
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.postsData.push(newPost);
  renderEntireTree(state);
}


export default state;
