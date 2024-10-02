import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location.pathname);


    if(loading){
        return <progress className="progress w-full" value="100" max="100"></progress>
    }

    if(user?.email){
        // Navigate(pathLocation, { replace: true });
        return children
    }

    return <Navigate state ={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;