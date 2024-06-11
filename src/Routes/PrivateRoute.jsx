import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-full" value="100" max="100"></progress>


    }

    if(user?.email){
        return children
    }

    return <Navigate to='/loading' replace></Navigate>
};

export default PrivateRoute;