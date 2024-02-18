import { useParams } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonateNowModal from "../../components/modal/DonateNowModal";
import { useGetSingleItemQuery } from "../../redux/features/supplies/supplyApi";

const ViewSupplyDetails = () => {
    const { id } = useParams();
    const { data: item, isLoading, error } = useGetSingleItemQuery({ id });
    if (error) return null;
    return (
        <div>
            {isLoading ? (
                <div className="min-h-[80vh] flex gap-4 w-full px-8 py-8 pb-2">
                    <div className="skeleton h-96 w-full"></div>
                    <div className="w-full space-y-4">
                        <div className="skeleton h-6 w-1/2"></div>
                        <div className="skeleton h-6 w-1/3"></div>
                        <div className="skeleton h-6 w-40"></div>
                        <div className="skeleton h-48 w-full"></div>
                        <div className="skeleton h-12 w-40"></div>
                    </div>

                </div>
            ) : (
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="py-8 mx-auto">
                        <div className="w-full mx-auto flex flex-wrap">
                            <div className="w-1/2 h-[30rem]">
                                <img className="w-full h-full rounded object-fill object-scale-down" src={item?.image} alt={`${item?.title} image`} />
                            </div>
                            <div className="md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0
                        flex flex-col gap-4">
                                <h1 className="text-gray-900 text-3xl title-font font-bold">
                                    {item?.title}
                                </h1>
                                <p className={`text-gray-800 text-base font-semibold `}>
                                    Category: {" "}
                                    <span className="bg-fuchsia-100 w-max px-2 cursor-pointer rounded-xl">
                                        {item?.category}
                                    </span>
                                </p>
                                <p className={`text-gray-800 text-base font-semibold `}>
                                    Quantity: {" "}
                                    <span className="bg-pink-100 w-max px-2 cursor-pointer rounded-xl">
                                        {item?.quantity}
                                    </span>
                                </p>
                                <p className="leading-relaxed">
                                    {item?.description}
                                </p>
                                <button
                                    onClick={() => document.getElementById('donate-now').showModal()}
                                    className="btn w-max text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
                                >
                                    Donate Now
                                    <FaHandHoldingHeart size={18} />
                                </button>
                                {item?.title && <DonateNowModal item={item} />}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default ViewSupplyDetails