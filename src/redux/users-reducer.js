const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";


let initialState = {
  postsData: [
    { id: 1, followed: false, fullName: "Gregor", status: "student", location: {city: "Poznan", country: "Poland"} },
    { id: 2, followed: true, fullName: "Vlodi", status: "junior frontend dev", location: {city: "Kyiv", country: "Ukraine"} },
    { id: 3, followed: false, fullName: "Tom", status: "senior frontend dev", location: {city: "Liverpool", country: "Great Britain"} },
  ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
    return {
      ...state,
      
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: "FOLLOW", userId});
export const unFollowAC = (userId) => ({type: "UNFOLLOW", userId});


export default usersReducer;
