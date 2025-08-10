import { useMemo, useState } from "react";
import {motion, AnimatePresence} from "motion/react"
import { ANIMATE_TRANSITION, EXIT_TRANSITION, INITIAL_TRANSITION } from "../constants/animations"
import Header from "../components/ExpensListing/Header"
import ExpenseList from "../components/ExpensListing/ExpenseList"
import ExpenseCard from "../components/ExpensListing/ExpenseCard"
import type { IExpensItem } from "../types/types"

const ITEMS_PER_PAGE = 10;

const ExpenseListing = () => {
    const [filter, setFilter] = useState<"today" | "last7" | "month" | "all">("month");
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const expenseList: IExpensItem[] = JSON.parse(localStorage.getItem('expenses') || "[]");

    const filteredExpenses = useMemo(() => {
        const now = new Date();
        return expenseList.filter((exp) => {
            const expDate = new Date(exp.date);
            if (filter === "all") {
                return true;
            }
            if (filter === "today") {
                return expDate.toDateString() === now.toDateString();
            }
            if (filter === "last7") {
                const sevenDaysAgo = new Date();
                sevenDaysAgo.setDate(now.getDate() - 7);
                return expDate >= sevenDaysAgo && expDate <= now;
            }
            if (filter === "month") {
                return (
                expDate.getMonth() === now.getMonth() &&
                expDate.getFullYear() === now.getFullYear()
                );
            }
            return true;
        });
    }, [expenseList, filter]);
    
    const currentExpenses = useMemo(() => {
        return filteredExpenses.slice(0, visibleCount);
    }, [filteredExpenses, visibleCount]);

    return (
        <AnimatePresence>
            <motion.div
                initial={INITIAL_TRANSITION}
                animate={ANIMATE_TRANSITION}
                exit={EXIT_TRANSITION}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full"
            >
                <Header filter={filter} setFilter={setFilter} />
                <ExpenseCard expenses={filteredExpenses} />
                <ExpenseList 
                    expenseList={currentExpenses}
                    filter={filter}
                    filteredExpenses={filteredExpenses}
                    visibleCount={visibleCount}
                    setVisibleCount={setVisibleCount}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default ExpenseListing