const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS"

let initialState = {
  postsData: [
    // {
    //   id: 1,
    //   followed: false,
    //   fullName: "Gregor S.",
    //   status: "student",
    //   location: { city: "Poznan", country: "Poland" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   fullName: "Vlodi K.",
    //   status: "junior frontend dev",
    //   location: { city: "Kyiv", country: "Ukraine" },
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   fullName: "Tom K.",
    //   status: "senior frontend dev",
    //   location: { city: "Liverpool", country: "Great Britain" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        postsData: state.postsData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        postsData: state.postsData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
      case SETUSERS:
        return { ...state, postsData: [ ...state.postsData, ...action.users]}
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unFollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsersAC = (users) => ({ type: "SET_USERS", users });

export default usersReducer;
