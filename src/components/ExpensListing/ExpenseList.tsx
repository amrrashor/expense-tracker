import ExpenseItem from './ExpenseItem'
import { type IExpensItem } from '../../types/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../common/ui/Button';

const ITEMS_PER_PAGE = 10;

const ExpenseList = ({expenseList, filteredExpenses, filter, visibleCount, setVisibleCount}: {
    expenseList:IExpensItem[], 
    filteredExpenses: IExpensItem[], 
    filter: string;
    setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
    visibleCount: number
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const totalItems = filteredExpenses.length;
    const hasMoreItems = visibleCount < totalItems;
    const loadMoreButtonRef = useRef<HTMLButtonElement>(null);
    const handleLoadMore = useCallback(async () => {
        if (hasMoreItems && !isLoading) {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 300));
            setVisibleCount(prev => prev + ITEMS_PER_PAGE);
            setIsLoading(false);
        }
    }, [hasMoreItems, isLoading, setVisibleCount]);

    
    
    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE);
    }, [filter, setVisibleCount]);

    return (
        <div className='p-9 px-7 pt-0 mt-[-30px] h-1/2'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>Recent Expenses</h3>
                <div className='text-sm'>see all</div>
            </div>

            <div className='mt-8 overflow-y-auto no-scrollbar h-11/12'>
                {expenseList.map((e, i) => (
                    <ExpenseItem {...e} key={i} />
                ))}

                {hasMoreItems && (
                    <Button
                        ref={loadMoreButtonRef}
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className={`px-6 py-3 overflow-hidden rounded-lg font-medium transition-all duration-200 mt-1 mb-3 w-full
                                ${isLoading 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow'
                                }
                            `}
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                    Loading...
                                </div>
                            ) : (
                                'Load More'
                            )}
                    </Button>
                )}
            </div>

            
        </div>
    )
}

export default ExpenseList