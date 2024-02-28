import { donorsLeaderboard } from "../../constants"

const Leaderboard = () => {
    return (
        <div className="container mx-auto py-12">
            <div className='sm:mb-12 px-2 sm:px-0'>
                <h1 className="dark:text-gray-100 text-3xl sm:text-5xl font-extrabold text-center mb-4">
                    Top Donors
                </h1>
                <h2 className="dark:text-gray-100 text-lg sm:text-xl font-semibold text-center mb-4">
                    Thank you to our generous donors who have contributed to the relief efforts.
                </h2>
            </div>

            <div className="relative max-w-2xl mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-8 sm:px16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-4 sm:px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-4 sm:px-6 py-3">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {donorsLeaderboard.map(donor => (
                            <tr key={donor.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-1 sm:px-4 py-4">
                                    <img src={donor.image} className="w-16 md:w-32 max-w-full max-h-full rounded-t-3xl rounded-b-md" alt={`${donor.name}'s photo`} />
                                </td>
                                <td className="px-4 sm:px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {donor.name}
                                </td>
                                <td className="px-4 sm:px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    ${donor.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard