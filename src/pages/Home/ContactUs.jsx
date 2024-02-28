
const ContactUs = () => {
    return (
        <div>
            <div className='mb-4 dark:text-gray-100'>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-center sm:mb-4">
                    Contact Us
                </h1>
                <h2 className="text-lg sm:text-xl font-semibold text-center">
                    We would love to hear what <br className="sm:hidden" /> you have to say
                </h2>
            </div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 pt-6 sm:pt-12 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147.59796588331398!2d-1.6380321178713484!3d53.70815286702998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879601760b4a8e3%3A0x5b0dbaeab322f940!2sOne%20Nation!5e0!3m2!1sen!2sbd!4v1708029669611!5m2!1sen!2sbd" width="100%" height="100%" className="absolute inset-0" style={{}} frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="bg-white dark:bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6 dark:text-gray-100">
                                <h2 className="title-font font-semibold text-gray-900  dark:text-gray-100 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">2A Oxford St, Batley WF17 7PZ, United Kingdom</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 dark:text-gray-100">
                                <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed" href="mailto:info@onenationuk.org">info@onenationuk.org</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 dark:text-gray-100">PHONE</h2>
                                <p className="leading-relaxed">+443005001000</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 dark:text-gray-100 text-lg mb-1 font-medium title-font">Let’s Talk</h2>
                        <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-200">Ask us everything and we would love to hear from you</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white dark:bg-gray-300 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your name" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white dark:bg-gray-300 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your email" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white dark:bg-gray-300 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Enter your message"></textarea>
                        </div>
                        <button className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Send</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs