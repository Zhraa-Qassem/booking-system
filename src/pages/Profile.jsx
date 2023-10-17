import Navbar from '../component/NavBar';
import Footer from '../component/Footer';
import '../App.css';
import '../responsive.css';
import ProfileSettings from '../component/ProfileSettings';
import { useAuth } from '../config/AuthContext'; // Update the import statement

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className='sign-in'>
      <Navbar />
      <ProfileSettings user={user} />
      <Footer />
    </div>
  );
};

export default Profile;
