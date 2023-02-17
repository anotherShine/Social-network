let initialState =  {
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
  };

const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;