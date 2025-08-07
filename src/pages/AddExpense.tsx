import {motion} from "motion/react"
import { ANIMATE_TRANSITION, EXIT_TRANSITION, INITIAL_TRANSITION } from "../constants/animations"

const AddExpense = () => {
    return (
            <motion.div
                initial={INITIAL_TRANSITION}
                animate={ANIMATE_TRANSITION}
                exit={EXIT_TRANSITION}
                transition={{ duration: 0.3 }}
            >
                ADD EXPENSE
            </motion.div>
    )
}

export default AddExpense