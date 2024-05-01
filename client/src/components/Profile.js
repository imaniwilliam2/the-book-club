import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className="flex justify-center items-center h-full">
            <Link className="text-lg py-2 px-4 bg-orange-800 text-white rounded-full mr-4 hover:bg-orange-700 transition duration-200 ease-in-out" to="/read">Books Read</Link>
            <Link className="text-lg py-2 px-4 bg-orange-800 text-white rounded-full hover:bg-orange-700 transition duration-200 ease-in-out" to="/tbread">Books To Be Read</Link>
        </div>
    );
}
  
export default Profile;

