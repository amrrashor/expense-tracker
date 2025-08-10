import { ArrowDown, ArrowUp, ChevronDown, ChevronUp, Ellipsis } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import {motion, AnimatePresence} from 'motion/react';
import type { IExpensItem } from "../../types/types";
import { Popover, PopoverContent, PopoverTrigger } from '../common/ui/PopOver'
import { currencies } from "../../constants/currencies";

const INCOME = 10840;

const ExpenseCard = ({expenses}: {expenses:IExpensItem[]}) => {
    const [balanceDetails, showBalanceDetails] = useState(true);
    const [isLoading, setIsLoading] = useState(true); 
    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    const conversionRate = currencies.conversion_rates[selectedCurrency] || 1;

    const getTotalExpenses = expenses.reduce((sum: number, expense: {amount: number}) => {
        return sum + (expense.amount || 0)
    }, 0);

    const totalBalance = useMemo(() => {
        return (INCOME - getTotalExpenses) * conversionRate;
    }, [getTotalExpenses, conversionRate]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const convertedIncome = useMemo(() => INCOME * conversionRate, [conversionRate]);
    const convertedExpenses = useMemo(() => getTotalExpenses * conversionRate,
        [getTotalExpenses, conversionRate]);
    return (
        <motion.div 
            layout
            transition={{ duration: 0.4,  ease: "easeInOut" }}
            className="card-bg bg-primary-blue-2 p-4 shadow rounded-3xl w-11/12 md:w-8/12 mx-auto -translate-y-20"
        >
            <div className="flex justify-between items-start">
                <div>
                    <p onClick={() => showBalanceDetails(!balanceDetails)} className=" cursor-pointer text-white/90 text-sm font-semibold flex items-center">
                        Total Balance
                        {balanceDetails ? <ChevronUp className="w-4 ml-1" /> : <ChevronDown className="w-4 ml-1" />}
                    </p>
                    {isLoading ? (
                        <h3 className="bg-white/10 py-3  w-16 rounded-md animate-pulse"></h3>
                    ) : (
                        <h3 className="text-white text-3xl font-bold ">
                            {selectedCurrency} {totalBalance.toFixed(2)}
                        </h3>
                    )}
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Ellipsis className="text-white" />
                    </PopoverTrigger>
                    <PopoverContent className="bg-input-bg w-full border-0 shadow overflow-y-auto h-100 no-srollbar">
                        {Object.keys(currencies.conversion_rates).map((code) => (
                            <div
                                key={code}
                                onClick={() => setSelectedCurrency(code)}
                                className={`p-2 cursor-pointer hover:bg-white/10 ${
                                selectedCurrency === code ? "bg-white/20" : ""
                                }`}
                            >
                                {code}
                            </div>
                        ))}
                    </PopoverContent>
                </Popover>
            </div>
            <AnimatePresence>
                {balanceDetails && (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex justify-between mt-8">
                            <div>
                                <p className="flex text-white/70 items-center">
                                    <span className="bg-primary-blue-1/40 p-1 w-5 h-5 rounded-full flex justify-center items-center mr-1">
                                        <ArrowDown className="w-3" />
                                    </span>{" "}
                                    Income
                                </p>
                                {isLoading ? (
                                    <h3 className="bg-white/10 py-3  w-16 rounded-md animate-pulse"></h3>
                                ) : (
                                    <h3 className="text-white font-bold sm:text-sm md:text-lg">{selectedCurrency} {convertedIncome.toFixed(2)}</h3>
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="flex text-white/70 items-center">
                                    <span className="bg-primary-blue-1/40 p-1 w-5 h-5 rounded-full flex justify-center items-center mr-1">
                                        <ArrowUp className="w-3" />
                                    </span>{" "}
                                    Expenses
                                </p>
                                {isLoading ? (
                                    <h3 className="bg-white/10 py-3  w-16 rounded-md animate-pulse"></h3>
                                ) : (
                                    <h3 className="text-white font-bold sm:text-sm md:text-lg">{selectedCurrency} {convertedExpenses.toFixed(2)}</h3>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default ExpenseCard