import { useState } from "react"
import { CommunityGratitudes } from "../../components/CommunityGratitudes"
import { useCreateGratitudeMutation } from "../../redux/features/gratitudes/gratitudeApi"

const Community = () => {
    const [postGratitude, { isLoading }] = useCreateGratitudeMutation();
    const [message, setMessage] = useState({
        name: "",
        location: "",
        message: "",
    })

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    const handlePostMessage = async (e) => {
        e.preventDefault()
        const res = await postGratitude(message).unwrap();
        if (res?.acknowledged) {
            setMessage({ name: "", location: "", message: "" })
        }
    }

    return (
        <div className="container mx-auto py-12">
            <div className='sm:mb-12 px-2 sm:px-0'>
                <h1 className="text-gray-700 dark:text-gray-100 text-3xl sm:text-5xl font-extrabold text-center mb-4">
                    Gratitude Wall
                </h1>
                <h2 className="dark:text-gray-100 text-lg sm:text-xl font-semibold text-center mb-4">
                    Share your appreciation for the support you{"'"}ve received during difficult times. Let{"'"}s spread some positivity!
                </h2>
            </div>

            <div className="max-w-5xl mx-auto px-8">
                <CommunityGratitudes />
            </div>
            <div className="space-y-4 hidden">
                <div className="border-t border-gray-200 dark:border-gray-800"></div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Share Your Gratitude</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Spread some positivity! Post your message of gratitude.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="space-y-2"></div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-500 mb-10" />
            <div className="max-w-2xl space-y-8 mx-auto">
                <div className="space-y-2 text-center">
                    <h2 className="text-gray-700 dark:text-gray-100 text-2xl font-bold">Share Your Gratitude</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Spread some positivity! Post your message of gratitude.
                    </p>
                </div>
                <div className="space-y-4">
                    <form onSubmit={handlePostMessage} className="grid grid-cols-2 gap-2 sm:gap-4">
                        <div className="col-span-12 sm:col-span-6">
                            <label className="label-text font-bold dark:text-gray-300">What is your name?</label>
                            <input onChange={handleChange} value={message.name} name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full dark:bg-gray-300" />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <label className="label-text font-bold dark:text-gray-300">Where are you from?</label>
                            <input onChange={handleChange} value={message.location} name="location" type="text" placeholder="Enter your location" className="input input-bordered w-full dark:bg-gray-300" />
                        </div>
                        <div className="col-span-12">
                            <label className="label-text font-bold dark:text-gray-300">Your message</label>
                            <textarea onChange={handleChange} value={message.message} name="message" placeholder="Tell us how our work affected your life" className="w-full textarea textarea-bordered h-24 dark:bg-gray-300" />
                        </div>
                        <button type="submit" disabled={isLoading} className="col-span-12 mt-2 sm:mt-0 px-8 py-2 rounded-md bg-teal-500 dark:bg-teal-600 text-white dark:text-gray-200 font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                            Post Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Community