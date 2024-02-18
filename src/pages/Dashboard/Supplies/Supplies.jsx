import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import UpdateSupplyModal from "./UpdateSupplyModal";
import DeleteSupplyModal from "./DeleteSupply";
import { useGetSupplyItemsQuery } from "../../../redux/features/supplies/supplyApi";
import { useState } from "react";

const SuppliesTable = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const { data: supplyItems, error } = useGetSupplyItemsQuery();

    if (error) return null;

    const handleUpdateModal = (item) => {
        setSelectedItem(item)
        document.getElementById('update-supply').showModal()
    }

    const handleDeleteModal = (item) => {
        setSelectedItem(item)
        document.getElementById('delete-supply').showModal()
    }
    return (
        <div className="rounded-sm border border-stroke bg-white px-2 md:px-5 md:pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
            <div className="flex justify-between items-center pt-2 mt:pt-4 md:pb-8 md:px-7">
                <h1 className="text-xl md:text-3xl font-bold text-gray-700">
                    All supply items data
                </h1>
                <NavLink to="/dashboard/create-supply" className="bg-teal-300  py-2 px-3 rounded-md text-xs lg:text-base font-bold leading-5">
                    Add supply
                </NavLink>
            </div>
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-xs md:table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left ">
                            <th className="md:min-w-[220px] py-2 md:py-4 px-2 md:px-4 font-medium text-black  xl:pl-11">
                                Title
                            </th>
                            <th className="md:min-w-[150px] py-2 md:py-4 px-2 md:px-4 font-medium text-black ">
                                Category
                            </th>
                            <th className="md:min-w-[120px] py-2 md:py-4 px-2 md:px-4 font-medium text-black ">
                                Quantity
                            </th>
                            <th className="py-4 px-4 font-medium text-black ">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplyItems?.map((item) => (
                            <tr key={item.id}>
                                <td className="border-b border-[#eee] py-2 md:py-5 px-2 md:px-4 md:pl-9  xl:pl-11">
                                    <h5 className="font-medium text-black ">
                                        {item.title}
                                    </h5>
                                </td>
                                <td className="border-b border-[#eee] py-2 md:py-5 px-2 md:px-4 ">
                                    <p className="text-black">
                                        {item.category}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-2 md:py-5 px-2 md:px-4 ">
                                    <p className="text-black">
                                        {item.quantity}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-2 md:py-5 px-2 md:px-4 ">
                                    <div className="flex items-center space-x-3.5">
                                        <button
                                            onClick={() => handleUpdateModal(item)}
                                            data-tip="Update"
                                            className="tooltip hover:text-teal-500"
                                        >
                                            <BiEdit size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteModal(item)} data-tip="Delete"
                                            className="tooltip hover:text-rose-500"
                                        >
                                            <MdDeleteOutline size={20} />
                                        </button>
                                        <DeleteSupplyModal item={selectedItem} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <UpdateSupplyModal item={selectedItem} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SuppliesTable;
