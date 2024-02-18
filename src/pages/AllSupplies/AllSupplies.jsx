import SupplyCard from "../../components/SupplyCard";
import { useGetSupplyItemsQuery } from "../../redux/features/supplies/supplyApi";

const AllSupplies = () => {
    const { data: supplyItems, isLoading, isSuccess, error } = useGetSupplyItemsQuery();

    if (error) return null;

    return (
        <div className="container mx-auto mt-0 py-12">
            <div className='mb-12'>
                <h1 className="text-5xl font-extrabold text-center mb-4">
                    Supply Items
                </h1>
                <h2 className="text-xl font-semibold text-center mb-4">
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
                    isSuccess && supplyItems.map((supply, index) => (
                        <SupplyCard key={supply._id} supply={supply} index={index} />
                    ))
                )}
            </div>
        </div>
    )
}

export default AllSupplies