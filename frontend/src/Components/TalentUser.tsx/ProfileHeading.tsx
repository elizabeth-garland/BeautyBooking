// make component called ProfileHeading where name, location and bio are displayed

import React from "react";
import { TalentUser } from '../../Pages/TalentUserPage';

interface UserProfileProps {
    user: TalentUser;
}

const ProfileHeading = (props: UserProfileProps) => {
  return (
    <>
        <h1>{props.user.name}</h1>
        {props ? (
          <div>
            <p>Name: {props.user.name}</p>
            <p>Bio: {props.user.bio}</p>
            <p>Location: {props.user.location}</p>
          </div>
        ) : (
          <div>No user data found</div>
        )}
    </>
  );
};

export default ProfileHeading;