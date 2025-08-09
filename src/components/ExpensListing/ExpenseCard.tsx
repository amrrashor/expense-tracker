import { ArrowDown, ArrowUp, Ellipsis } from "lucide-react"

const ExpenseCard = () => {
    return (
        <div className="card-bg bg-primary-blue-2 p-4 shadow rounded-3xl w-8/12 mx-auto -translate-y-20">
            <div className="flex justify-between">
                <div>
                    <p className="text-white/90 text-sm font-semibold">Total Balance</p>
                    <h3 className="text-white text-3xl font-bold">$ 2,400.00</h3>
                </div>

                <Ellipsis className="text-white" />
            </div>

            <div className="flex justify-between mt-8">
                <div>
                    <p className="flex text-white/70 items-center"><span className="bg-primary-blue-1/40 p-1 w-5 h-5 rounded-full flex justify-center items-center mr-1"><ArrowDown className="w-3" /></span> Income</p>
                    <h3 className="text-white font-bold">$ 10,840.00</h3>
                </div>

                <div className="flex flex-col items-center">
                    <p className="flex text-white/70 items-center"><span className="bg-primary-blue-1/40 p-1 w-5 h-5 rounded-full flex justify-center items-center mr-1"><ArrowUp className="w-3" /></span> Expenses</p>
                    <h3 className="text-white font-bold">$ 10,840.00</h3>
                </div>
            </div>
        </div>
    )
}

export default ExpenseCard