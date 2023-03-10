import React from "react";
import userPhoto from "../../assets-img/images/User-Avatar-Profile-Transparent-Isolated-PNG.png";
import styles from "./users.module.css";
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 1 ){
            pages.push(props.currentPage - 1);
            pages.push(props.currentPage);
            pages.push(props.currentPage + 1);  
        }
    }
  return (
    <div className={styles.usersPage}>
      <div className={styles.allUsersPage}>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? styles.selectedPageNumber : ""
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile' + u.id}>
              <img
                src={u.photos.small? u.photos.small : userPhoto}
                alt="man"
                className={styles.userPhoto}
              />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;