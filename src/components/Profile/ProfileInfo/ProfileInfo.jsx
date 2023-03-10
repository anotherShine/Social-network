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
        <div>{props.lookingForAJob? `lookingForAJob: ${props.lookingForAJob}`: null}</div>
        <div>{props.lookingForAJobDescription? `lookingForAJobDescription: ${props.lookingForAJobDescription}`: null}</div>
        <div>{props.fullName? `fullName: ${props.fullName}`: null}</div>
        <div>{props.contacts? `contacts: ${props.contacts}`: null}</div>
        <div>{props.github? `github: ${props.github}`: null}</div>
        <div>{props.vk? `vk: ${props.vk}`: null}</div>
        <div>{props.facebook? `facebook: ${props.facebook}`: null}</div>
        <div>{props.instagram? `instagram: ${props.instagram}`: null}</div>
        <div>{props.twitter? `twitter: ${props.twitter}`: null}</div>
        <div>{props.website? `website: ${props.website}`: null}</div>
        <div>{props.youtube? `youtube: ${props.youtube}`: null}</div>
        <div>{props.mainLink? `mainLink: ${props.mainLink}`: null}</div>
      </div>

    </div>
  )
}

export default ProfileInfo;