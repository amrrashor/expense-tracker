import { Button } from '../common/ui/Button'
import CategoryList from './CategoryList'
import { CalendarDays, Camera, ChevronDown, Loader2 } from 'lucide-react'
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuContent } from '../common/ui/DropDownMenu'
import { categories } from '../../constants/categories'
import { useState, type FormEvent } from 'react'
import { Calendar } from '../common/ui/Calender'
import { Popover, PopoverContent, PopoverTrigger } from '../common/ui/PopOver'
import { format } from 'date-fns'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

const AddExpenseForm = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const [amount, setAmount] = useState<number>();
    const [expenseDate, setExpenseDate] = useState<Date>();
    const [fileNames, setFileNames] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const names = Array.from(files).map(file => file.name)
            setFileNames(names)
        }
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedCategory || !expenseDate || !amount) {
            toast.error('Please fill all required fields');
            return;
        }

        const newExpense = {
            category: selectedCategory,
            amount,
            date: format(expenseDate, "dd MMM yyyy"),
            files: fileNames,
            entryMethod: "Manual"
        };

        setIsLoading(true);
        const expenses = JSON.parse(localStorage.getItem('expenses') || "[]");
        expenses.push(newExpense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        setTimeout(() => {
            setIsLoading(false);
            toast.success('Expense added successfully');
            navigate('/');
        }, 500)
    };



    return (
        <form className='mt-10' onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-lg font-medium text-primary-black">
                Categoreis
            </label>
            <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer mt-1 mb-4 w-full p-3 rounded-lg bg-input-bg flex justify-between items-center">{selectedCategory ?? "Select Category"} <ChevronDown /></DropdownMenuTrigger>
                <DropdownMenuContent className="p-3 w-full border-0 rounded-lg bg-input-bg mt-2">
                    {categories?.map((c, i) => (
                        <DropdownMenuItem onClick={() => setSelectedCategory(c.name.toLocaleLowerCase() )} className='cursor-pointer hover:bg-white/50 duration-200' key={i}>{c.name}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <label htmlFor="amount" className="block text-lg font-medium text-primary-black">
                Amount
            </label>
            <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-1 mb-4 w-full p-3 rounded-lg bg-input-bg focus:border-none outline-none"
                placeholder="$ 50,000"
                aria-required="true"
            />

            <label htmlFor="date" className="block text-lg font-medium text-primary-black">
                Date
            </label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className="flex justify-between mt-1 mb-4 w-full p-6 rounded-lg bg-input-bg focus:border-none outline-none"
                    >
                        {expenseDate ? format(expenseDate, "MM/dd/yy") : <span className='text-black/50'>02/01/24</span>}
                        <CalendarDays className="w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="border-0 bg-input-bg shadow">
                    <Calendar
                        mode="single"
                        selected={expenseDate}
                        onSelect={setExpenseDate}
                    />
                </PopoverContent>
            </Popover>

            <label htmlFor="image" className="block text-lg font-medium text-primary-black">
                Attach Receipt
            </label>
            <div className="mt-1 mb-4 w-full items-center pr-3 rounded-lg bg-input-bg flex justify-between">
                <label
                    htmlFor="image"
                    className=" w-11/12 pl-3 py-3 rounded-lg bg-input-bg text-gray-500 cursor-pointer flex justify-between items-center overflow-clip"
                >
                    {fileNames.length > 0 ? fileNames.join(", ") : "Upload image"}
                </label>
                <Camera className="w-4" />
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                />
                
            </div>
            
            <label className="block text-lg font-medium text-primary-black">
                Categories
            </label>
            <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            <Button
                type="submit"
                className="w-full p-7 text-lg rounded-lg bg-primary-blue hover:bg-primary-blue/80 text-white"
            >
                {isLoading ? <Loader2 className='animate-spin' /> : "Save"}
            </Button>
        </form>
    )
}

export default AddExpenseForm