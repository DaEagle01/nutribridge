import { useGetVolunteersQuery } from "../../redux/features/volunteers/volunteerApi";

const AboutUs = () => {
    const { data: volunteers, isLoading, error } = useGetVolunteersQuery();

    return (
        <div>
            <section className="w-full py-12">
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 space-y-5">
                    <div className="text-center space-y-2">
                        <h2 className="dark:text-gray-100 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Volunteers</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Meet the dedicated volunteers who make it possible to deliver meals and essential supplies to those in
                            need. Their hard work and commitment help build stronger and more resilient communities.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            isLoading ? (
                                [0, 1, 2].map(i => (
                                    <div key={i} className="flex flex-col gap-8 w-full">
                                        <div className="flex justify-center">
                                            <div className="skeleton h-36 w-36 rounded-full shrink-0"></div>
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-20"></div>
                                        </div>
                                    </div>
                                ))
                            ) :
                                volunteers?.map(person => (
                                    <div key={person._id} className="w-full bg-white dark:bg-gray-800 rounded-lg px-4 py-4 flex flex-col justify-center items-center">
                                        <div className="mb-8">
                                            <img className="object-center object-cover rounded-full h-36 w-36" src={person.image} alt="photo" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl text-gray-700 dark:text-gray-200 font-bold mb-2">{person.firstName} {person.lastName}</p>
                                            <p className="text-base text-gray-400 dark:text-gray-200 font-normal">{person.location}</p>
                                        </div>
                                    </div>
                                ))}
                        {error && <p className="col-span-12 text-center text-base text-red-600 font-normal">
                            Sorry, something went wrong. Please try again some time later.
                        </p>}
                    </div>
                </section>
            </section>
        </div>
    )
}

export default AboutUs