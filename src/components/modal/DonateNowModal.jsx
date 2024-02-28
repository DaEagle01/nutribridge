import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonateNowModal = ({ item }) => {
    const navigate = useNavigate();
    const [supplierData, setSupplierData] = useState({
        name: "",
        email: "",
    })
    const handleServicesInput = (e) => {
        setSupplierData({ ...supplierData, [e.target.name]: e.target.value })
    };
    const handleSubmit = () => {
        navigate("/dashboard")
        document.getElementById('donate-now').close();
    };

    return (
        <dialog id="donate-now" className="modal">
            <div className="modal-box dark:bg-gray-700 dark:text-gray-100">
                <button onClick={() => document.getElementById('donate-now').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5">✕</button>
                <h3 className="font-bold text-lg">
                    Donate Now
                </h3>
                <p className="">
                    Join us helping those who needs
                </p>
                <div className="modal-action">
                    <form method="dialog" onSubmit={handleSubmit} className="space-y-2 w-full">
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text  dark:text-gray-100">What is your name?</span>
                            </div>
                            <input
                                name="name"
                                value={supplierData.name}
                                onChange={handleServicesInput}
                                required
                                type="text"
                                placeholder="Type your name"
                                className="input input-bordered w-full px-2 h-10 dark:bg-gray-300"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text  dark:text-gray-100">What is your email?</span>
                            </div>
                            <input
                                name="email"
                                value={supplierData.email}
                                onChange={handleServicesInput}
                                required
                                type="email"
                                placeholder="Type your email"
                                className="input input-bordered w-full px-2 h-10 dark:bg-gray-300"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text  dark:text-gray-100">Supply item name</span>
                            </div>
                            <input
                                disabled
                                value={item.title}
                                className="input input-bordered w-full px-2 h-10 dark:bg-gray-300"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text  dark:text-gray-100">Item category</span>
                            </div>
                            <input
                                disabled
                                value={item.category}
                                className="input input-bordered w-full px-2 h-10 dark:bg-gray-300"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label py-1">
                                <span className="label-text  dark:text-gray-100">Item quantity</span>
                            </div>
                            <input
                                disabled
                                value={item.quantity}
                                className="input input-bordered w-full px-2 h-10 dark:bg-gray-300"
                            />
                        </label>
                        <button type="submit" className="btn w-full text-white bg-teal-500 dark:bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 dark:hover:bg-teal-700 rounded" style={{ marginTop: "2rem" }}>
                            Donate
                        </button>
                    </form>
                </div>
            </div>
        </dialog >
    )
}

export default DonateNowModal