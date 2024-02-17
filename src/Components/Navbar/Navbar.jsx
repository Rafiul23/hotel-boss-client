import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlinks = <>

        <li className="mr-2"><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#5E503F] text-[#ffffff] font-bold p-3 rounded-lg " : " p-3 rounded-lg text-white"
        }>Home</NavLink></li>

        <li className="mr-2"><NavLink to='/rooms'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#5E503F] text-[#ffffff] font-bold p-3 rounded-lg " : " p-3 rounded-lg text-white"
            }>Available Rooms</NavLink></li>

        <li className="mr-2"><NavLink to='/register' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#5E503F] text-[#ffffff] font-bold p-3 rounded-lg " : " p-3 rounded-lg text-white"
        }>Register</NavLink></li>

        <li className="mr-2"><NavLink to='/login' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#5E503F] text-[#ffffff] font-bold p-3 rounded-lg " : " p-3 rounded-lg text-white"
        }>Login</NavLink></li>

        <li className="mr-2"><NavLink to='/about' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#5E503F] text-[#ffffff] font-bold p-3 rounded-lg " : " p-3 rounded-lg text-white"
        }>About Us</NavLink></li>

        <li className="mr-2"><NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#5E503F] text-[#ffffff] font-bold p-3 rounded-lg " : " p-3 rounded-lg text-white"
        }>Contact Us</NavLink></li>
        
        <li className="mr-2"><NavLink to='/dashboard' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#5E503F] text-[#ffffff] font-bold p-3 rounded-lg " : " p-3 rounded-lg text-white"
        }>Dashboard</NavLink></li>
    </>

    return (
        <div className="navbar bg-[#A9927D]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    {navlinks}

                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;