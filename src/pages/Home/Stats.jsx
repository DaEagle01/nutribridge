import { FaPeopleCarry } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { GiFirstAidKit } from "react-icons/gi";

const Stats = () => {
    return (
        <section className="mb-10 sm:mb-24">
            <div className="py-4 mx-auto flex flex-wrap">
                <div className="flex-1 flex flex-wrap  my-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className='sm:mb-4 flex flex-col items-center sm:items-start w-full'>
                        <h1 className="text-3xl sm:text-5xl font-extrabold sm:mb-4">
                            Stats
                        </h1>
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">
                            Number of lives we affected
                        </h2>
                    </div>
                    <div className="stats shadow w-full flex flex-col md:flex-row justify-center items-center">
                        <div className="stat w-full">
                            <div className="stat-figure text-accent">
                                <FaPeopleCarry size={30} />
                            </div>
                            <div className="stat-title">Total Communities</div>
                            <div className="stat-value text-info">65+</div>
                            <div className="stat-desc">Growing 21% more this year</div>
                        </div>
                        <div className="stat w-full">
                            <div className="stat-figure text-accent">
                                <GiFruitBowl size={30} />
                            </div>
                            <div className="stat-title">Meals Distributed</div>
                            <div className="stat-value text-info">100K+</div>
                            <div className="stat-desc">The number is growing everyday</div>
                        </div>
                        <div className="stat w-full">
                            <div className="stat-figure text-accent">
                                <GiFirstAidKit size={30} />
                            </div>
                            <div className="stat-title">Hygiene Kit</div>
                            <div className="stat-value text-info">50K+</div>
                            <div className="stat-desc">Making hygiene a priority</div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 hidden sm:block">
                    <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1628921626297-91ba382038f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="stats" />
                </div>
            </div>
        </section>
    )
}

export default Stats