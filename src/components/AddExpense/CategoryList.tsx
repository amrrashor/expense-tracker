import { Popcorn, ShoppingCart, Fuel, Handbag, Newspaper, Car, HandCoins } from "lucide-react";
import type { ICategoryList } from "../../types/types";

const categoryList = [
    { name: "Groceries", icon: ShoppingCart, color: "#496ef3", bg: "bg-blue-200/30" },
    { name: "Entertainment", icon: Popcorn, color: "#ec4899", bg: "bg-pink-200/30" },
    { name: "Fuel", icon: Fuel, color: "#f59e0b", bg: "bg-yellow-200/30" },
    { name: "Shopping", icon: Handbag, color: "#8b5cf6", bg: "bg-purple-200/30" },
    { name: "News", icon: Newspaper, color: "#10b981", bg: "bg-green-200/30" },
    { name: "Transport", icon: Car, color: "#ef4444", bg: "bg-red-200/30" },
    { name: "Rent", icon: HandCoins, color: "#f97316", bg: "bg-orange-200/30" },
];





const CategoryList = ({selectedCategory, setSelectedCategory}: ICategoryList) => {
    return (
        <div className="mb-15 mt-5 grid grid-cols-4 gap-1">
            {categoryList.map(({ name, icon: Icon, color, bg }, idx) => (
                <div
                    key={idx}
                    onClick={() => setSelectedCategory(name.toLocaleLowerCase())}
                    className=" mb-5 cursor-pointer flex flex-col items-center"
                >
                    <div
                        className={`${selectedCategory === name.toLocaleLowerCase() ? ' bg-primary-blue' : bg} rounded-full w-10 h-10 flex justify-center items-center`}
                    >
                        <Icon className="w-5 h-5" stroke={selectedCategory === name.toLocaleLowerCase() ? '#fff' : color} />
                    </div>
                    <span className={`${selectedCategory === name.toLocaleLowerCase() ? 'text-primary-blue' : 'text-primary-black'} font-medium text-sm mt-2`}>{name}</span>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
