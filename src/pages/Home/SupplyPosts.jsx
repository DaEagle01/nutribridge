import { NavLink } from 'react-router-dom';
import SupplyCard from '../../components/SupplyCard';
import { useGetSupplyItemsQuery } from '../../redux/features/supplies/supplyApi';

const SupplyPosts = () => {
    const { data: supplyItems, isLoading, isSuccess, error } = useGetSupplyItemsQuery();

    if (error) return null;

    return (
        <div className="container mx-auto mt-8 sm:mt-16 py-12">
            <div className='dark:text-gray-100 sm:mb-12 px-2 sm:px-0'>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-4">
                    Supply Items
                </h1>
                <h2 className="dark:text-gray-100 text-lg sm:text-xl font-semibold text-center mb-4">
                    Discover the latest supplies available for your community
                </h2>
            </div>
            <div className="md:px-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 space-y-4 md:space-y-0 container">
                {isLoading ? (
                    [0, 1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex flex-col gap-4 w-full px-8 py-6 pb-2 items-center">
                            <div className="skeleton h-48 w-full"></div>
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-10 w-40"></div>
                        </div>
                    ))
                ) : (
                    isSuccess && supplyItems?.slice(0, 6).map((supply, index) => (
                        <SupplyCard key={supply._id} supply={supply} index={index} />
                    ))
                )}
            </div>
            <NavLink to="/supplies" className="flex justify-center w-max mx-auto mt-7 sm:mt-12">
                <button className="px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-teal-500 font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-all hover:bg-teal-600 duration-700">
                    View All
                </button>
            </NavLink>
        </div>
    );
};

export default SupplyPosts;
