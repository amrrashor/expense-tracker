import { lazy} from "react";
import { Routes, Route, useLocation } from "react-router";
import Mainlayout from "../components/common/MainLayout/MainLayout";
const AddExpense = lazy(() => import("../pages//AddExpense"));
const Login = lazy(() => import("../pages/Login"));
const ExpenstListing = lazy(() => import("../pages/ExpenseListing"))

const AppRoutes = () => {
    const location = useLocation();
    return (
        <Mainlayout>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                            <ExpenstListing />
                    } />
                    <Route path="/addExpense" element={<AddExpense />} />
                    <Route path="/login" element={<Login />} />
                </Routes> 
        </Mainlayout>
        
    )
}

export default AppRoutes