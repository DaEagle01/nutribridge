import DashboardSidebar from "./DashboardSidebar"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import PrivateRoute from "../PrivateRoute"

const DashboardLayout = () => {
    return (
        <PrivateRoute>
            <Navbar />
            <div className='grid grid-cols-12 pt-4 md:pt-16'>
                <div className='col-span-1 md:col-span-2'>
                    <DashboardSidebar />
                </div>
                <div className='col-span-11 md:col-span-10 bg-[#f0f1f3] min-h-[100vh] rounded-l-lg rounded-r-lg ml-2 md:ml-0'>
                    <div className='py-12 md:py-4 px-0 md:px-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </PrivateRoute>
    )
}

export default DashboardLayout