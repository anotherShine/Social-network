import React from "react";
import styles from "./users.module.css"

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
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
            }]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="man" className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;