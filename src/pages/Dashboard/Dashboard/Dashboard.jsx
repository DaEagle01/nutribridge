import MyResponsivePie from "./Pie"
import { useGetSupplyItemsQuery } from "../../../redux/features/supplies/supplyApi";

const Dashboard = () => {
    const { data, isLoading, error } = useGetSupplyItemsQuery();

    const items = data?.map(item => {
        return { ...item, id: item.title, label: item.title }
    })

    return (
        <div className="bg-white dark:bg-gray-800 h-[100vh] w-full p-2 md:p-4 rounded-lg">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-700 dark:text-gray-100 text-center md:text-left md:mb-8">
                Supply Distribution Statistics
            </h1>
            {
                error ? null : (
                    <div className="h-1/2">
                        {
                            isLoading ? (
                                <div className="skeleton h-full w-full rounded-full"></div>
                            ) : (
                                <MyResponsivePie data={items} />
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Dashboard