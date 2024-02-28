import { useGetTestimonialsQuery } from "../../../redux/features/testimonials/testimonialApi";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const Testimonial = () => {
    const { data, isLoading, error } = useGetTestimonialsQuery();

    if (error) return null;

    return (
        <div className={`mt-12 ${isLoading ? "h-[20rem]" : "h-[35rem]"} rounded-md flex flex-col antialiased bg-white  items-center relative overflow-hidden`}>
            <div className='sm:mb-4 px-2 sm:px-0'>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-4">
                    Testimonials
                </h1>
                <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                    What our noble donors has to say about us
                </h2>
            </div>
            {isLoading ? (
                <div className="flex gap-4 w-full">
                    {
                        [0, 1, 2].map(i => (
                            <div key={i} className="flex flex-col gap-4 w-full h-full bg-teal-50 dark:bg-gray-700 p-6 rounded-xl">
                                <div className="skeleton h-2 w-full"></div>
                                <div className="skeleton h-2 w-full"></div>
                                <div className="skeleton h-2 w-full"></div>
                                <div className="skeleton h-2 w-full"></div>
                                <div className="skeleton h-2 w-full"></div>
                                <div className="skeleton h-2 w-full"></div>
                                <div className="skeleton h-3 w-28"></div>
                                <div className="skeleton h-3 w-20"></div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <InfiniteMovingCards
                    items={data}
                    direction="right"
                    speed="slow"
                />
            )}
        </div>
    );
}

export default Testimonial;