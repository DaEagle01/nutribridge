import { useState } from 'react'
import { useCreateSupplyItemMutation } from '../../../redux/features/supplies/supplyApi';
import { useNavigate } from "react-router-dom";

const CreateSupply = () => {
    const navigate = useNavigate();
    const [supplierData, setSupplierData] = useState({
        image: "",
        title: "",
        category: "",
        quantity: "",
        description: "",
    })
    const [create] = useCreateSupplyItemMutation();

    const handleServicesInput = (e) => {
        setSupplierData({ ...supplierData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async () => {
        const randomValue = Math.floor(Math.random() * (1000 - 99 + 1)) + 99;
        await create({ ...supplierData, value: randomValue }).unwrap();
        navigate("/dashboard/supplies")
    };

    return (
        <div className="bg-white h-[100vh] w-full md:p-4 rounded-lg flex justify-between">
            <section className="relative flex flex-wrap lg:h-screen w-full">
                <div className="hidden md:block relative h-[calc(100vh-10rem)] w-full lg:w-1/2">
                    <img
                        alt="dummy image"
                        src="https://img.freepik.com/free-vector/guy-watering-planet-ecological-sustainability_24640-134047.jpg?w=740&t=st=1708154175~exp=1708154775~hmac=db5d59030e411092a64c51e4fa47703778b9ac497f8727efbf6e47255b6ba7bb"
                        className="absolute inset-0 h-full w-full object-cover object-fill rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-4 pt-0 pb-12">
                    <div className='px-4 md:px-8 pt-4 pb-12 shadow w-full h-max'>
                        <h1 className='text-xl md:text-3xl font-bold text-gray-700 text-center mb-4 md:mb-0'>
                            Create supply
                        </h1>
                        <form method="dialog" onSubmit={handleSubmit} className="space-y-2">
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text">Item name</span>
                                </div>
                                <input
                                    name="title"
                                    value={supplierData.title}
                                    onChange={handleServicesInput}
                                    required
                                    type="text"
                                    placeholder="Item name"
                                    className="input input-bordered w-full px-2 h-10"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text">Image</span>
                                </div>
                                <input
                                    name="image"
                                    value={supplierData.image}
                                    onChange={handleServicesInput}
                                    required
                                    type="text"
                                    placeholder="Paste image link"
                                    className="input input-bordered w-full px-2 h-10"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text">Item category name</span>
                                </div>
                                <input
                                    name="category"
                                    value={supplierData.category}
                                    onChange={handleServicesInput}
                                    required
                                    type="text"
                                    placeholder="Item category name"
                                    className="input input-bordered w-full px-2 h-10"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text">Item quantity</span>
                                </div>
                                <input
                                    name="quantity"
                                    value={supplierData.quantity}
                                    onChange={handleServicesInput}
                                    required
                                    type="text"
                                    placeholder="Item quantity"
                                    className="input input-bordered w-full px-2 h-10"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text">Item description</span>
                                </div>
                                <textarea
                                    name="description"
                                    value={supplierData.description}
                                    onChange={handleServicesInput}
                                    required
                                    type="text"
                                    placeholder="Item description"
                                    className="textarea textarea-bordered textarea-lg w-full px-2 pt-0"
                                />
                            </label>
                            <button type="submit" className="btn w-full text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded" style={{ marginTop: "2rem" }}>
                                Create Item
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreateSupply