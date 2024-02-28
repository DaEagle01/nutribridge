
const AboutUs = () => {
    return (
        <div>
            <section className="w-full py-6 md:py-12 lg:py-16">
                <div className="px-4 md:px-6">
                    <div className="flex flex-col justify-center items-center space-y-12 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-400 px-3 py-1 text-sm">Our Mission</div>
                            <h2 className="dark:text-gray-100 text-2xl text-center font-bold tracking-tighter sm:text-5xl">Providing for those in need.</h2>
                            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                                We are dedicated to ensuring that everyone has access to nutritious food and essential supplies. Our
                                mission is to alleviate hunger and hardship in communities across the country.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
                            <div className='w-full sm:w-1/2 mx-auto'>
                                <img
                                    alt="Image"
                                    className="aspect-[16/9] w-full sm:w-[90%] h-full overflow-hidden rounded-xl object-cover object-center"
                                    src="https://images.unsplash.com/photo-1533222535026-754c501569dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </div>
                            <div className="space-y-2 flex flex-col items-center sm:justify-start sm:items-start">
                                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-400 px-3 py-1 text-sm w-max">
                                    Our Approach
                                </div>
                                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center sm:text-left">
                                    We take a community-centered approach to distribution, partnering with local organizations and
                                    volunteers to identify needs and deliver resources where they are needed most. Our goal is to make the
                                    process of accessing food and supplies seamless and dignified for those we serve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs