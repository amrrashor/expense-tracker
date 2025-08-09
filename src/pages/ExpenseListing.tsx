import {motion} from "motion/react"
import { ANIMATE_TRANSITION, EXIT_TRANSITION, INITIAL_TRANSITION } from "../constants/animations"
import Header from "../components/ExpensListing/Header"
import ExpenseList from "../components/ExpensListing/ExpenseList"
import ExpenseCard from "../components/ExpensListing/ExpenseCard"

const ExpenseListing = () => {
    return (

            <motion.div
                initial={INITIAL_TRANSITION}
                animate={ANIMATE_TRANSITION}
                exit={EXIT_TRANSITION}
                transition={{ duration: 0.3 }}
                className="h-full"
            >
                <Header />
                <ExpenseCard />
                <ExpenseList />
            </motion.div>

    )
}

export default ExpenseListing