import { IoMdClose } from "react-icons/io";
import { useDeleteSupplyItemMutation } from "../../../redux/features/supplies/supplyApi";

const DeleteSupplyModal = ({ item }) => {
    const [deleteItem, { isLoading, error }] = useDeleteSupplyItemMutation();

    const handleDelete = async () => {
        await deleteItem(item._id).unwrap();
        document.getElementById('delete-supply').close();
    }
    if (error) return null;
    return (
        <dialog id="delete-supply" className="modal">
            <div className="modal-box text-gray-700 dark:bg-gray-700 dark:text-gray-100">
                <div className="modal-action flex flex-col justify-center mt-0">
                    <div className="relative p-4 text-center bg-white dark:bg-gray-700 rounded-l sm:p-5">
                        <button
                            onClick={() => document.getElementById('delete-supply').close()}
                            type="button"
                            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="deleteModal"
                        >
                            <IoMdClose size={24} />
                        </button>
                        <svg className="text-gray-400 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                        <p className="mb-4 text-gray-500 dark:text-gray-100">Are you sure you want to delete this item?</p>
                        <div className="flex justify-center items-center space-x-4">
                            <button
                                onClick={() => document.getElementById('delete-supply').close()}
                                data-modal-toggle="deleteModal"
                                type="button"
                                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white dark:bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
                            >
                                No, cancel
                            </button>
                            <button
                                disabled={isLoading}
                                onClick={handleDelete}
                                type="submit"
                                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 dark:bg-red-700 rounded-lg hover:bg-red-700 dark:hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                            >
                                Yes, {"I'm"} sure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog >
    )
}

export default DeleteSupplyModal