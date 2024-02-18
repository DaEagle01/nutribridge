/* eslint-disable react/prop-types */
import { cn } from "../utils/cn";

const Container = ({ children, className }) => {
    return (
        <div className={cn('w-full max-w-[90rem] px-4 lg:px-20 mx-auto', className)}>
            {children}
        </div>
    );
};

export default Container;
