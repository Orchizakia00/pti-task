import { FaAngleDown, FaSearch } from "react-icons/fa";
import user from '../../assets/user.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Menu</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div> */}
                <a className="btn btn-ghost text-3xl font-bold">pti.</a>
            </div>
            <div className="navbar-center flex gap-2">
                {/* <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className="mr-3">Menu</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul> */}
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <FaSearch className="text-orange-400" />
                    </span>
                    <input type="text" placeholder="     Search Audiobook" className="input w-96" />
                </div>
                <div className="dropdown max-w-lg">
                    <div tabIndex={0} role="button" className="btn bg-white w-32 border-none shadow-none m-1">MENU <span className="ml-6 text-orange-400"><FaAngleDown size={20} /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="hover:text-orange-500"><a>Home</a></li>
                        <li className="hover:text-orange-500"><a>Details</a></li>
                        <li className="hover:text-orange-500"><a>Category</a></li>
                        <li className="hover:text-orange-500"><a>My Favorites</a></li>
                        <li className="hover:text-orange-500"><a>Profile</a></li>
                        <li className="hover:text-orange-500"><a>Log In/Sign Up</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <div className="avatar flex items-center justify-center">
                    <div className="w-12 rounded-full">
                        <img src={user} className="w-[30px] h-[30px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;