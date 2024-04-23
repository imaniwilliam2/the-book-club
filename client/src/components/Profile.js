import { Link } from 'react-router-dom';


function Profile() {
    return (
      <>
        <h1>Profile Page</h1>
        <Link to="/read">Books Read</Link>
        <Link to="/tbread">Books To Be Read</Link>
        
      </>
    )
}
  
export default Profile;