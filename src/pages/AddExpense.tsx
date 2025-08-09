import {motion} from "motion/react"
import { ANIMATE_TRANSITION, EXIT_TRANSITION, INITIAL_TRANSITION } from "../constants/animations"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"
import AddExpenseForm from "../components/AddExpense/AddExpenseForm"
const AddExpense = () => {
    const navigate = useNavigate();
    return (
            <motion.div
                initial={INITIAL_TRANSITION}
                animate={ANIMATE_TRANSITION}
                exit={EXIT_TRANSITION}
                transition={{ duration: 0.3 }}
                className="p-9"
            >
                {/* title */}
                <div className="flex items-center">
                    <ArrowLeft className=" cursor-pointer" onClick={() => navigate(-1)}/>
                    <h1 className="text-center mx-auto font-bold text-lg">Add Expense</h1>
                </div>

                {/* form */}
                <AddExpenseForm />
            </motion.div>
    )
}

export default AddExpense