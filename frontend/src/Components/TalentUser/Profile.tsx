import React from "react";
import { TalentUser } from '../../Pages/TalentUserPage';
import ProfileHeading from './ProfileHeading.tsx';

interface UserProfileProps {
    user: TalentUser;
}

const Profile = (props: UserProfileProps) => {
  return (
    <>
      <div>
        {props ? (
          <div>
            <ProfileHeading user={props.user}></ProfileHeading>
          </div>
        ) : (
          <div>No user data found</div>
        )}
      </div>
    </>
  );
};
export default Profile;
