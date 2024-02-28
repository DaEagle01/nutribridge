import { MdSpaceDashboard } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import { useLocation, NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';

const DashboardSidebar = () => {
    const options = [
        { name: "Dashboard", path: "", icon: MdSpaceDashboard },
        { name: "Supplies", path: "/supplies", icon: FaHandsHelping },
        { name: "Create Supply", path: "/create-supply", icon: TbShoppingBagPlus },
        { name: "Create Testimonial", path: "/create-testimonial", icon: GiSelfLove },
    ]
    const { pathname: url } = useLocation()

    const isRouteActive = (path) => {
        return (url === "/dashboard" && url === `/dashboard${path}`) || (url !== "/dashboard" && url === `/dashboard${path}`)
    }

    return (
        <div>
            <div className="">
                <aside id="logo-sidebar" className="fixed left-0 top-0 w-max md:w-[16.7%] h-max px-1 md:px-6 transition-transform bg-white border-gray-200 pt-20" aria-label="Sidebar">
                    <div className="h-full pb-4 overflow-y-auto">
                        <div className="space-y-3 font-medium">
                            {
                                options.map(option => (
                                    <NavLink
                                        key={option.path}
                                        to={`/dashboard${option.path}`}
                                        className={cn("flex items-center gap-4 px-1 py-1 md:px-2 md:py-4 text-gray-500 hover:text-teal-500 rounded-lg hover:bg-gray-100",
                                            {
                                                "bg-gray-100 text-teal-500": isRouteActive(option.path)
                                            })}
                                    >
                                        <option.icon className="w-4 h-4 shrink-0" />
                                        <span className="hidden md:block">{option.name}</span>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default DashboardSidebar