import ExpenseItem, { type IExpensItem } from './ExpenseItem'


const dummyExpenses: IExpensItem[] = [
    {
        type: "groceries",
        entryMethod: "Manual",
        value: 45.99,
        entryHistory: "2025-08-05 14:32",
    },
    {
        type: "entertainment",
        entryMethod: "Automatic",
        value: 19.5,
        entryHistory: "2025-08-04 20:15",
    },
    {
        type: "gas",
        entryMethod: "Manual",
        value: 65.0,
        entryHistory: "2025-08-04 09:45",
    },
    {
        type: "shopping",
        entryMethod: "Automatic",
        value: 120.25,
        entryHistory: "2025-08-03 17:00",
    },
    {
        type: "news",
        entryMethod: "Manual",
        value: 5.99,
        entryHistory: "2025-08-03 08:10",
    },
    {
        type: "transport",
        entryMethod: "Automatic",
        value: 12.75,
        entryHistory: "2025-08-02 18:40",
    },
    {
        type: "rent",
        entryMethod: "Manual",
        value: 250.0,
        entryHistory: "2025-08-01 10:00",
    },
];

const ExpenseList = () => {
    return (
        <div className='p-9 px-7 pt-0 mt-[-30px] h-1/2'>
            {/* header */}  
            <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>Recent Expenses</h3>
                <div className='text-sm'>see all</div>
            </div>

            {/* list */}
            <div className='mt-8 overflow-y-auto no-scrollbar h-11/12'>
                {dummyExpenses.map((e, i) => (
                    <ExpenseItem {...e} key={i} />
                ))}
            </div>
        </div>
    )
}

export default ExpenseList