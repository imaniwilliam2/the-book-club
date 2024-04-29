import { Link } from 'react-router-dom';


function Profile() {
    return (
      <>
        <h1>Profile Page</h1>
        <Link className="inline-blo ck py-4 px-4 hover:text-orange-800 duration-200"  to="/read">Books Read</Link>
        <Link className="inline-blo ck py-4 px-4 hover:text-orange-800 duration-200"  to="/tbread">Books To Be Read</Link>
        
      </>
    )
}
  
export default Profile;