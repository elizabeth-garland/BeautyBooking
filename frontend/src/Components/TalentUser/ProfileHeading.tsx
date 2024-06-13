// make component called ProfileHeading where name, location and bio are displayed

import React from "react";
import { TalentUser } from "../../Pages/TalentUserPage";
import "./ProfileHeading.css";

interface UserProfileProps {
  user: TalentUser;
}

const ProfileHeading = (props: UserProfileProps) => {
  return (
    <>
      <h1>{props.user.name}</h1>
      <div className="content-container">
        {props ? (
          <div>
            <p>Location: {props.user.location}</p>
            <p>Bio: {props.user.bio}</p>
          </div>
        ) : (
          <div>No user data found</div>
        )}
      </div>
    </>
  );
};

export default ProfileHeading;
