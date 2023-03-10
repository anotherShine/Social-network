import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.content}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="man-with-camera" />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        ava + description
      </div>

    </div>
  )
}

export default ProfileInfo;