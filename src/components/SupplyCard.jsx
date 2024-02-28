import { bgColors } from "../constants/index"
import { NavLink, useLocation } from "react-router-dom";

const SupplyCard = ({ index, supply }) => {
    const { pathname } = useLocation();
    const detailsRoute = pathname === "/supplies" ? `${supply._id}` : `supplies/${supply._id}`;

    return (
        <div key={supply.id} className="bg-white dark:bg-gray-700 px-8 py-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
                <img
                    className="w-full h-64 rounded-xl mx-auto"
                    src={supply.image}
                    alt={supply.title}
                />
            </div>
            <h1 className="mt-2 text-gray-800 dark:text-gray-100 text-3xl font-bold cursor-pointer">
                {supply.title}
            </h1>
            <div className='mt-2 flex items-end gap-4'>
                <p className={`text-gray-800 text-base font-bold cursor-pointer ${bgColors[index % bgColors.length]} w-max px-2 rounded-xl`}>
                    {supply.category}
                </p>
                <p className={`text-gray-800 text-base font-bold cursor-pointer ${bgColors[(index + 4) % bgColors.length]} w-max py- px-2 rounded-xl`}>
                    {supply.quantity}
                </p>
            </div>
            <div className="my-4">
                <div className="flex space-x-1 items-center">
                    <p>{supply.details}</p>
                </div>
                <div className="">
                    <p>
                        <i className="fas fa-dollar-sign text-xl text-yellow-500"></i>{" "}
                        <span className="text-2xl font-medium">
                            {" "}
                            {supply.price}
                        </span>
                    </p>
                </div>
                <NavLink to={detailsRoute} state={{ supply }} className="flex justify-center">
                    <button className={`mt-2 text-center text-lg w-4/6 font-bold bg-teal-300 py-1.5 rounded-xl shadow-lg`}>
                        View Details
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default SupplyCard