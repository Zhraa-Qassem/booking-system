import {
    updateProfile as firebaseUpdateProfile,
    signOut as firebaseSignOut
}
    from 'firebase/auth';

// Update the user's profile
export const updateProfile = async (user, profileData) => {
    try {
        await firebaseUpdateProfile(user, profileData);
        return 'Profile updated successfully';
    } catch (error) {
        throw error;
    }
};

// Sign out the user
export const signOut = async () => {
    try {
        await firebaseSignOut();
    } catch (error) {
        throw error;
    }
};

export default { updateProfile, signOut };
