import React from "react";
import { TalentUser } from '../../Pages/TalentUserPage';

interface UserProfileProps {
    user: TalentUser;
}

const Profile = (props: UserProfileProps) => {
  return (
    <>
      <div>
        <h1>User Profile for {props.user.userId}</h1>
        {props ? (
          <div>
            <p>Name: {props.user.name}</p>
            <p>Bio: {props.user.bio}</p>
            <p>Location: {props.user.location}</p>
            <p>Contact Number: {props.user.contactNumber}</p>
            <p>Email: {props.user.email}</p>
          </div>
        ) : (
          <div>No user data found</div>
        )}
      </div>
    </>
  );
};
export default Profile;
