import { lazy} from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";
import Mainlayout from "../components/common/MainLayout/MainLayout";
const AddExpense = lazy(() => import("../pages//AddExpense"));
const Login = lazy(() => import("../pages/Login"));
const ExpenstListing = lazy(() => import("../pages/ExpenseListing"))

const AppRoutes = () => {
    const location = useLocation();
    const isLogged = localStorage.getItem("userInfo") !== null;
    const withBottomBar = location.pathname === '/' || location.pathname === '/not-found'
    return (
        <Mainlayout withBottomBar={withBottomBar}>
                <Routes location={location} key={location.pathname}>
                    {isLogged ? (
                    <>
                        <Route path="/" element={<ExpenstListing />} />
                        <Route path="/addExpense" element={<AddExpense />} />
                        <Route path="/login" element={<Navigate to="/" />} />
                    </>
                    ) : (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </>
                    )}
                </Routes> 
        </Mainlayout>
        
    )
}

export default AppRoutes