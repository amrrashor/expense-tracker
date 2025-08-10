import { type ElementType } from "react";
import { Popcorn, ShoppingCart, Fuel,  Handbag, Newspaper, Car, HandCoins } from "lucide-react"
import type { IExpensItem } from "../../types/types";

const ExpenseItem = ({category, entryMethod, amount, date}: IExpensItem) => {
    const iconMap: Record<
        string,
        {Icon:ElementType , bg: string, stroke: string}
    > = {
        groceries: { Icon: ShoppingCart, bg: "bg-primary-blue-2/30", stroke: "#496ef3" },
        entertainment: { Icon: Popcorn, bg: "bg-pink-200/30", stroke: "#ec4899" },
        fuel: { Icon: Fuel, bg: "bg-yellow-200/30", stroke: "#f59e0b" },
        shopping: { Icon: Handbag, bg: "bg-purple-200/30", stroke: "#8b5cf6" },
        news: { Icon: Newspaper, bg: "bg-green-200/30", stroke: "#10b981" },
        transport: { Icon: Car, bg: "bg-red-200/30", stroke: "#ef4444" },
        rent: { Icon: HandCoins, bg: "bg-orange-200/30", stroke: "#f97316" },
    };

    const renderExpenseIcon = (category: string) => {
        const config = iconMap[category.toLowerCase()];
        if (!config) return null;
        const { Icon, bg, stroke} = config;

        return (
            <div className={`${bg} rounded-full w-9 h-9 flex justify-center items-center`}>
                <Icon className='w-4' stroke={stroke} />
            </div>
        )
    };

    return (
        <div className="shadow rounded-lg p-4 flex items-center border border-input-bg mb-4">
            {renderExpenseIcon(category)}

            <div className="ml-3">
                <h5 className="font-bold">{category}</h5>
                <p className="text-sm text-primary-black/50">{entryMethod}</p>
            </div>

            <div className="ml-auto">
                <h5 className="font-bold text-right">-${amount}</h5>
                <p  className="text-sm text-primary-black/50">{date}</p>
            </div>
        </div>
    )
}

export default ExpenseItem