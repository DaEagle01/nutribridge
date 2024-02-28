import { useEffect, useState } from "react";
import { useUpdateSupplyItemMutation } from "../../../redux/features/supplies/supplyApi";

const UpdateSupplyModal = ({ item }) => {
    const [supplierData, setSupplierData] = useState({
        image: "",
        title: "",
        category: "",
        quantity: "",
        description: "",
    })
    const [update] = useUpdateSupplyItemMutation();

    useEffect(() => {
        setSupplierData({
            image: item.image,
            title: item.title,
            category: item.category,
            quantity: item.quantity,
            description: item.description,
        })
    }, [item])

    const handleServicesInput = (e) => {
        setSupplierData({ ...supplierData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async () => {
        const randomValue = Math.floor(Math.random() * (1000 - 99 + 1)) + 99;
        await update({ ...supplierData, _id: item._id, value: randomValue }).unwrap();
        document.getElementById('update-supply').close();
    };

    return (
        <dialog id="update-supply" className="modal">
            <div className="modal-box text-gray-700 dark:bg-gray-700 dark:text-gray-100">
                <button onClick={() => document.getElementById('update-supply').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5">✕</button>
                <h3 className="font-bold text-lg text-left">
                    Update Supply Item
                </h3>
                <p className=" text-left">
                    Join us helping those who needs
                </p>
                <div className="modal-action">
                    <form method="dialog" onSubmit={handleSubmit} className="space-y-2 w-full">
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text dark:text-gray-100">Item name</span>
                            </div>
                            <input
                                name="title"
                                value={supplierData.title}
                                onChange={handleServicesInput}
                                required
                                type="text"
                                placeholder="Item name"
                                className="input input-bordered w-full px-2 h-10 dark:text-gray-200 dark:bg-gray-500"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text dark:text-gray-100">Image</span>
                            </div>
                            <input
                                name="image"
                                value={supplierData.image}
                                onChange={handleServicesInput}
                                required
                                type="text"
                                placeholder="Paste image link"
                                className="input input-bordered w-full px-2 h-10 dark:text-gray-200 dark:bg-gray-500"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text dark:text-gray-100">Item category name</span>
                            </div>
                            <input
                                name="category"
                                value={supplierData.category}
                                onChange={handleServicesInput}
                                required
                                type="text"
                                placeholder="Item category name"
                                className="input input-bordered w-full px-2 h-10 dark:text-gray-200 dark:bg-gray-500"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text dark:text-gray-100">Item quantity</span>
                            </div>
                            <input
                                name="quantity"
                                value={supplierData.quantity}
                                onChange={handleServicesInput}
                                required
                                type="text"
                                placeholder="Item quantity"
                                className="input input-bordered w-full px-2 h-10 dark:text-gray-200 dark:bg-gray-500"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text dark:text-gray-100">Item description</span>
                            </div>
                            <input
                                name="description"
                                value={supplierData.description}
                                onChange={handleServicesInput}
                                required
                                type="text"
                                placeholder="Item description"
                                className="input input-bordered w-full px-2 h-10 dark:text-gray-200 dark:bg-gray-500"
                            />
                        </label>
                        <button type="submit" className="btn w-full text-white bg-teal-500 dark:bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 dark:hover:bg-teal-700 rounded" style={{ marginTop: "2rem" }}>
                            Update Item
                        </button>
                    </form>
                </div>
            </div>
        </dialog >
    )
}

export default UpdateSupplyModal