import { Navigate } from "react-router-dom";
import { useSelector, } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const user = useSelector(state => state?.auth?.user);
    if (!user?.email) {
        return <Navigate to="/login" replace={true} />
    }
    return children
}

export default PrivateRoute;
