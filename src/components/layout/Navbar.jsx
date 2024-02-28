import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import { cn } from "../../utils/cn";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../../redux/features/auth/authSlice";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ToggleMode from "../ToggleMode";
import { publicRoutes } from "../../constants";

const Navbar = () => {
    const userEmail = useSelector(state => state?.auth?.user?.email);
    const dispatch = useDispatch();

    return (
        <header className="h-16 py-6 fixed w-full bg-white dark:bg-gray-800 z-[999]">
            <nav className="w-full h-full max-w-[90rem] mx-auto flex justify-between items-center px-4 lg:px-20">
                <NavLink to="/" className='h-10'>
                    <img className="h-full rounded-md" src={logo} alt="" />
                </NavLink>
                <ul className="space-x-4 lg:space-x-8 hidden sm:flex items-center">
                    <ToggleMode />
                    {
                        publicRoutes.map(route => (
                            <NavLink key={route.path} to={route.path} className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5 dark:text-gray-300", { "text-teal-500 dark:text-white": isActive })}>{route.name}</NavLink>
                        ))
                    }
                    {userEmail && (
                        <NavLink to="/dashboard" className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5 dark:text-gray-300", { "text-teal-500 dark:text-white": isActive })}>Dashboard</NavLink>
                    )}
                    {userEmail ? (
                        <button onClick={() => dispatch(logout())} className="bg-rose-300 py-1 px-2 rounded-md text-xs lg:text-base font-bold leading-5">Logout</button>
                    ) : (
                        <NavLink to="/login" className="text-xs lg:text-base font-bold leading-5">
                            <button className="bg-teal-300  py-1 px-2 rounded-md text-xs lg:text-base font-bold leading-5">Login / Register</button>
                        </NavLink>
                    )}
                </ul>
                <div className="flex items-center gap-4 sm:hidden drawer drawer-end w-max">
                    <ToggleMode />
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="drawer-button">
                            <HiOutlineMenuAlt3 size={24} className="dark:text-white" />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-[50%] min-h-full flex flex-col gap-2 bg-slate-100 dark:bg-gray-700 bg-opacity-90 text-base-content space-y-2">
                            {
                                publicRoutes.map(route => (
                                    <div key={route.path}>
                                        <NavLink to={route.path} className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5 dark:text-gray-300", { "text-teal-500 dark:text-white": isActive })}>{route.name}</NavLink>
                                        <div className="w-full bg-gray-700 dark:bg-gray-100 h-[1px]"></div>
                                    </div>
                                ))
                            }
                            {userEmail && (
                                <div>
                                    <NavLink to="/dashboard" className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5 dark:text-gray-300", { "text-teal-500 dark:text-white": isActive })}>Dashboard</NavLink>
                                    <div className="w-full bg-gray-700 dark:bg-gray-100 h-[1px]"></div>
                                </div>
                            )}
                            {userEmail ? (
                                <button onClick={() => dispatch(logout())} className="bg-rose-300 py-1 px-2 rounded-md text-xs lg:text-base font-bold leading-5">Logout</button>
                            ) : (
                                <NavLink to="/login" className="text-xs lg:text-base font-bold leading-5">
                                    <button className="bg-teal-300  py-1 px-2 rounded-md text-xs lg:text-base font-bold leading-5">Login / Register</button>
                                </NavLink>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar