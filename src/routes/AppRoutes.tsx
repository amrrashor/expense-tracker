import { lazy } from "react";
import { Routes, Route } from "react-router";
import ExpenstListing from "../pages/ExpenseListing";
import Mainlayout from "../components/common/MainLayout/Mainlayout";
const AddExpense = lazy(() => import("../pages//AddExpense"));
const Login = lazy(() => import("../pages/Login"));


const AppRoutes = () => {
    return (
        <Mainlayout>
            <Routes>
                <Route path="/" element={<ExpenstListing />} />
                <Route path="/addExpense" element={<AddExpense />} />
                <Route path="/login" element={<Login />} />
            </Routes>    
        </Mainlayout>
        
    )
}

export default AppRoutes