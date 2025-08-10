import { ChevronDown } from 'lucide-react'
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuContent } from '../common/ui/DropDownMenu'

const Header = ({filter, setFilter}: { filter: string, setFilter: (arg:"today" | "last7" | "month" | "all") => void}) => {
    const userInfo: {email: string, password: string} = JSON.parse(localStorage.getItem('userInfo')|| '{}');
    const userName = userInfo.email.split("@")[0];

    return (
        <div className='header-bg relative rounded-bl-xl rounded-br-xl md:rounded-lg bg-primary-blue p-8 pb-40'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='w-10 h-10 bg-contain rounded-full mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCicxernIb5W2jIRbjKwiMOVIit_7XJtczA&s" alt="" />
                    <div>
                        <p className='text-sm text-white/70'>Good Morning</p>
                        <h4 className='font-bold text-lg text-white/90'>{userName}</h4>
                    </div>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer px-2 py-0.5 rounded-lg bg-input-bg flex justify-between items-center text-sm">
                        {
                        filter === 'month'
                            ? 'This Month'
                            : filter === 'last7'
                            ? 'Last 7 Days'
                            : filter === 'all'
                                ? 'All' : 'Today'
                        } 
                        <ChevronDown className='w-4' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-3 w-full border-0 rounded-lg bg-input-bg mt-2">
                        <DropdownMenuItem onClick={() => setFilter('month')} className='cursor-pointer hover:bg-white/50 duration-200 text-sm'>
                            This Month
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter('last7')} className='cursor-pointer hover:bg-white/50 duration-200 text-sm'>
                            Last 7 Days
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter('today')} className='cursor-pointer hover:bg-white/50 duration-200 text-sm'>
                            Today
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter('all')} className='cursor-pointer hover:bg-white/50 duration-200 text-sm'>
                            All
                        </DropdownMenuItem>
                    </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>
    )
}

export default Header