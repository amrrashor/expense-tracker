import {motion, AnimatePresence} from "motion/react"
import { ANIMATE_TRANSITION, EXIT_TRANSITION, INITIAL_TRANSITION } from "../constants/animations"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"
import AddExpenseForm from "../components/AddExpense/AddExpenseForm"
const AddExpense = () => {
    const navigate = useNavigate();
    return (
        <AnimatePresence>
            <motion.div
                initial={INITIAL_TRANSITION}
                animate={ANIMATE_TRANSITION}
                exit={EXIT_TRANSITION}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-9"
            >
                <div className="flex items-center">
                    <ArrowLeft className=" cursor-pointer" onClick={() => navigate(-1)}/>
                    <h1 className="text-center mx-auto font-bold text-lg">Add Expense</h1>
                </div>

                <AddExpenseForm />
            </motion.div>
        </AnimatePresence>
    )
}

export default AddExpense