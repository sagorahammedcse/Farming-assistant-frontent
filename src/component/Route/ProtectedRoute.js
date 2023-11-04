
import React from 'react';
import { Navigate,Outlet } from "react-router-dom";
const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/account",
  
})=>{
   if(isAuthenticated === false){
    return <Navigate to={redirect} />
   }
   if(adminRoute && !isAdmin){
    return <Navigate  to={redirectAdmin}/>
   }
   return children ? children : <Outlet/>
}


// const ProtectedRoute = () => {
//     const {isAuthenticated} = useSelector((state) => state.user);
//     // let auth = {'token':true}
    
//         if(!isAuthenticated){
//           return<Navigate to= "/login"/>
//         }
//        if(isAuthenticated){
//         return <Outlet/>
//        } 
    
// };

export default ProtectedRoute;