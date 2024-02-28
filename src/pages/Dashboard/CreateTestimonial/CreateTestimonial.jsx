import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useCreateTestimonialMutation } from '../../../redux/features/testimonials/testimonialApi';

const CreateTestimonial = () => {
    const navigate = useNavigate();
    const [testimonial, setTestimonial] = useState({
        name: "",
        location: "",
        message: "",
    })
    const [postTestimonial, { isLoading }] = useCreateTestimonialMutation();

    const handleChange = (e) => {
        setTestimonial({ ...testimonial, [e.target.name]: e.target.value })
    };

    const handleSubmit = async () => {
        await postTestimonial(testimonial).unwrap();
        navigate("/")
    };

    return (
        <div className="bg-white h-[100vh] w-full md:p-4 rounded-lg flex justify-between">
            <section className="relative flex flex-wrap lg:h-screen w-full">
                <div className="hidden md:block relative h-[calc(100vh-10rem)] w-full lg:w-1/2">
                    <img
                        alt="dummy image"
                        src="https://img.freepik.com/free-vector/follow-social-media-icon-isolated_24640-134160.jpg?w=740&t=st=1709123550~exp=1709124150~hmac=0bfe3ad9bb32f7a75cd086eb72a9e64dc87155b9c597fe1f95467bb9cf1f58eb"
                        className="absolute inset-0 h-full w-full object-cover object-fill rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-4 pt-0 pb-12">
                    <div className='px-4 md:px-8 pt-4 pb-12 shadow w-full h-max'>
                        <h1 className='text-xl md:text-3xl font-bold text-gray-800 text-center mb-4 md:mb-8'>
                            Create Testimonial
                        </h1>
                        <form method="dialog" onSubmit={handleSubmit} className="space-y-2">
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text font-bold">Your name</span>
                                </div>
                                <input
                                    name="name"
                                    value={testimonial.name}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full px-2 h-10"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text font-bold">Your location</span>
                                </div>
                                <input
                                    name="location"
                                    value={testimonial.location}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    placeholder="Enter your location"
                                    className="input input-bordered w-full px-2 h-10"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label py-1">
                                    <span className="label-text font-bold">Your message</span>
                                </div>
                                <textarea
                                    name="message"
                                    value={testimonial.message}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    placeholder="Enter your message"
                                    className="textarea textarea-bordered textarea-lg w-full px-2 pt-0"
                                />
                            </label>
                            <button type="submit" disabled={isLoading} className="btn w-full text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded" style={{ marginTop: "2rem" }}>
                                Post Testimonial
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreateTestimonial