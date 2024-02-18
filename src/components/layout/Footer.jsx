import { NavLink } from "react-router-dom"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImOffice } from "react-icons/im";

const Footer = () => {
    return (
        <>
            <footer className="max-w-[90rem] mx-auto py-6 bg-slate-100">
                <div className="grid gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="flex items-center justify-center">
                        <NavLink className="text-2xl text-accent font-bold" href="#">
                            nutribridge
                        </NavLink>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
                            <NavLink className="hover:underline" href="#">
                                Home
                            </NavLink>
                            <NavLink className="hover:underline" href="#">
                                About
                            </NavLink>
                            <NavLink className="hover:underline" href="#">
                                Contact
                            </NavLink>
                            <NavLink className="hover:underline" href="#">
                                Terms of Service
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="text-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                            <div className="flex items-center gap-1">
                                <FaPhoneAlt size={16} />
                                <span>+443005001000</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MdEmail size={16} />
                                <span>info@onenationuk.org</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ImOffice size={16} />
                                <span>2A Oxford St, Batley WF17 7PZ, United Kingdom</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid min-[300px] gap-2 mx-auto text-xs justify-center">
                        <p className="text-gray-500 dark:text-gray-400">© 2024 nutribridge. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;