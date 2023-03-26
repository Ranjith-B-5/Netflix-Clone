import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <div className="flex flex-row justify-between absolute z-[100] w-full">
        <Link to = '/'>
        <h1 className="text-red-700  font-medium text-3xl py-3 px-3">NETFLIX</h1>
        </Link>
        <div className="flex flex-row justify-end">
        <Link to = '/login'>
        <h3 className="text-white  pt-5  cursor-pointer">Sign In</h3>
        </Link>
        <Link to = '/signup'>
        <button className="bg-red-700  text-white  px-3 rounded-md ml-5 mt-4 mb-3 cursor-pointer mr-2">Sign Up</button>
        </Link>
        </div>
        </div>
    )
}

export default Navbar;