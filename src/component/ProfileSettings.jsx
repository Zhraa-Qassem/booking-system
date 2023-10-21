import React, { useState } from 'react';
import { useAuth } from '../config/AuthContext';
import { signOut } from 'firebase/auth'; // Add import from Firebase

const ProfileSettings = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(user ? user.displayName : '');
  const [newPhotoURL, setNewPhotoURL] = useState(user ? user.photoURL : '');

  const handleSignOut = async () => {
    try {
      await signOut(user.auth);
      window.location.href = "/signin";
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleEditProfile = async () => {
    try {
      setIsEditing(false); // Disable editing mode
      setNewDisplayName(newDisplayName);
      setNewPhotoURL(newPhotoURL);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className='profile'>
      {user ? (
        <div className='profile-pic'>
          <img src={newPhotoURL} alt="User" width="100" height="100" />
          <br />
          {isEditing ? (
            <div className='profile-input'>
              <input
                type="text"
                value={newDisplayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
              />


              <button className='btn' onClick={handleEditProfile}>Save</button>
            </div>
          ) : (
            <div className='btn-cont'>
              <p>Hello, {newDisplayName}</p>
              <br />
              <button className='btn' onClick={() => setIsEditing(true)}>Edit Profile</button>
              <br />
            </div>
          )}

          <button className='btn' onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
};

export default ProfileSettings;
