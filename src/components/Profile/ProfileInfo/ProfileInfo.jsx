import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.content}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="man-with-camera" />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.small} />
      </div>
      <div>
        <div>{props.name}</div>
        <div>{props.uniqueUrlName}</div>
        <div>{props.status}</div>
      </div>

    </div>
  )
}

export default ProfileInfo;