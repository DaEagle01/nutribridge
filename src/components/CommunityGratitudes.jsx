
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../utils/cn";
import { useGetGratitudesQuery } from "../redux/features/gratitudes/gratitudeApi";

export const CommunityGratitudes = ({ className }) => {
    const { data: gratitudes, isLoading, error } = useGetGratitudesQuery();
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10",
                {
                    "gap-6": isLoading
                },
                className
            )}
        >
            {isLoading ? (
                [0, 1, 2, 3, 4, 5]?.map((i) => (
                    <div key={i} className="flex flex-col gap-4 w-full bg-teal-50 dark:bg-gray-700 p-6 rounded-xl">
                        <div className="skeleton h-3 w-24"></div>
                        <div className="skeleton h-2 w-full"></div>
                        <div className="skeleton h-2 w-full"></div>
                    </div>
                ))
            ) :
                gratitudes?.map((item, idx) => (
                    <div
                        key={item?.link}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-teal-100 dark:bg-slate-500/[0.8] block rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.name}</CardTitle>
                            <CardLocation>{item.location}</CardLocation>
                            <CardDescription>{item.message}</CardDescription>
                        </Card>
                    </div>
                ))}
            {error && (
                <h2 className="col-span-12 text-red-600 text-lg sm:text-xl font-semibold text-center mb-4">
                    Something went wrong. Please try again later.
                </h2>
            )}
        </div>
    );
};

export const Card = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-2 overflow-hidden bg-teal-50 dark:bg-gray-800 border border-transparent dark:border-white/[0.2] group-hover:border-teal-700 dark:group-hover:border-teal-800 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({ className, children, }) => {
    return (
        <h4 className={cn("text-gray-700 dark:text-gray-100 font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};
export const CardLocation = ({ className, children, }) => {
    return (
        <h4 className={cn("text-gray-700 dark:text-gray-100 font-semibold text-xs tracking-wide", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({ className, children, }) => {
    return (
        <p
            className={cn(
                "mt-2 text-gray-700 dark:text-gray-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
