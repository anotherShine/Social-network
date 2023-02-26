const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS"

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: "https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=812",
      followed: false,
      fullName: "Gregor S.",
      status: "student",
      location: { city: "Poznan", country: "Poland" },
    },
    {
      id: 2,
      photoUrl: "https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=812",
      followed: true,
      fullName: "Vlodi K.",
      status: "junior frontend dev",
      location: { city: "Kyiv", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl: "https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=812",
      followed: false,
      fullName: "Tom K.",
      status: "senior frontend dev",
      location: { city: "Liverpool", country: "Great Britain" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
      case SETUSERS:
        return { ...state, users: [ ...state.users, ...action.users]}
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unFollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsersAC = (users) => ({ type: "SET_USERS", users });

export default usersReducer;
