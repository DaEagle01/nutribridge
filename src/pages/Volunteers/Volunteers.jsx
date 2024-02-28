import { useState } from "react";
import { useCreateVolunteerMutation } from "../../redux/features/volunteers/volunteerApi";

const Volunteers = () => {
    const [postVolunteer, { isLoading }] = useCreateVolunteerMutation();
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        location: "",
        phone: "",
        email: "",
        image: ""
    })

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const handlePostMessage = async (e) => {
        e.preventDefault()
        const res = await postVolunteer(info).unwrap();
        if (res?.acknowledged) {
            setInfo({ firstName: "", lastName: "", location: "", phone: "", email: "", image: "" })
        }
    }

    return (
        <div className="w-full py-12 mx-auto">
            <div className="grid gap-10 px-4 md:grid-cols-2 lg:px-6">
                <div className="flex justify-center items-center px-8 aspect-w-10 aspect-h-6">
                    <img
                        src="https://img.freepik.com/free-photo/sustainable-travel-concept_23-2151049524.jpg?t=st=1709130998~exp=1709134598~hmac=6c472ea8f281749ded077c121e97f5deea7741f67898e913474a31b840b508c4&w=740"
                        alt="Image"
                        className="rounded-lg object-cover object-fill"
                    />
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-gray-700 dark:text-gray-100 text-3xl font-bold">Find Virtual Volunteer Opportunities</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Enter your information below to find volunteer opportunities near you.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <form onSubmit={handlePostMessage} className="grid grid-cols-2 gap-2 sm:gap-4">
                            <div className="col-span-12 sm:col-span-6">
                                <label className="label-text font-bold dark:text-gray-300">First name?</label>
                                <input onChange={handleChange} value={info.firstName} name="firstName" type="text" placeholder="Enter your first name" className="input input-bordered w-full dark:bg-gray-300" />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <label className="label-text font-bold dark:text-gray-300">Last name?</label>
                                <input onChange={handleChange} value={info.lastName} name="lastName" type="text" placeholder="Enter your last name" className="input input-bordered w-full dark:bg-gray-300" />
                            </div>
                            <div className="col-span-12">
                                <label className="label-text font-bold dark:text-gray-300">Email</label>
                                <input onChange={handleChange} value={info.email} name="email" type="text" placeholder="Enter your email" className="input input-bordered w-full dark:bg-gray-300" />
                            </div>
                            <div className="col-span-12">
                                <label className="label-text font-bold dark:text-gray-300">Phone</label>
                                <input onChange={handleChange} value={info.phone} name="phone" type="text" placeholder="Enter your phone number" className="input input-bordered w-full dark:bg-gray-300" />
                            </div>
                            <div className="col-span-12">
                                <label className="label-text font-bold dark:text-gray-300">Location</label>
                                <input onChange={handleChange} value={info.location} name="location" type="text" placeholder="Enter your location" className="input input-bordered w-full dark:bg-gray-300" />
                            </div>
                            <div className="col-span-12">
                                <label className="label-text font-bold dark:text-gray-300">Image</label>
                                <input onChange={handleChange} value={info.image} name="image" type="text" placeholder="Enter your image link" className="input input-bordered w-full dark:bg-gray-300" />
                            </div>
                            <button type="submit" disabled={isLoading} className="col-span-12 mt-4 sm:mt-0 px-8 py-2 rounded-md bg-teal-500 dark:bg-teal-600 text-white dark:text-gray-200 font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                                Find Opportunity
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteers