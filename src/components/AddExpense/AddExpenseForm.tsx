import React from 'react'
import { Button } from '../common/ui/Button'
import CategoryList from './CategoryList'
import { CalendarDays, Camera, ChevronDown } from 'lucide-react'
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuContent } from '../common/ui/DropDownMenu'

const AddExpenseForm = () => {
    return (
        <form className='mt-10'>
            <label htmlFor="email" className="block text-lg font-medium text-primary-black">
                Categoreis
            </label>
            <DropdownMenu>
                <DropdownMenuTrigger className="mt-1 mb-4 w-full p-3 rounded-lg bg-input-bg flex justify-between items-center">Entretainment <ChevronDown /></DropdownMenuTrigger>
                <DropdownMenuContent className="p-3 w-full border-0 rounded-lg bg-input-bg mt-2">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <label htmlFor="password" className="block text-lg font-medium text-primary-black">
                Amount
            </label>
            <input
                id="email"
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="mt-1 mb-4 w-full p-3 rounded-lg bg-input-bg focus:border-none outline-none"
                placeholder="you@example.com"
                aria-required="true"
            />

            <label htmlFor="password" className="block text-lg font-medium text-primary-black">
                Date
            </label>
            <div className="mt-1 mb-4 w-full items-center pr-3 rounded-lg bg-input-bg flex justify-between">
                <input
                    id="nmuber"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    className="w-full  pl-3 py-3 focus:border-none outline-none"
                    placeholder="$ 50,00"
                    aria-required="true"
                    
                />
                <CalendarDays />
            </div>

            <label htmlFor="password" className="block text-lg font-medium text-primary-black">
                Attach Receipt
            </label>
            <div className="mt-1 mb-4 w-full items-center pr-3 rounded-lg bg-input-bg flex justify-between">
                <input
                    id="nmuber"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-3 py-3 focus:border-none outline-none"
                    placeholder="$ 50,00"
                    aria-required="true"
                    
                />
                <Camera />
            </div>
            
            <label className="block text-lg font-medium text-primary-black">
                Categories
            </label>
            <CategoryList />

            <Button
                type="submit"
                className="w-full p-7 text-lg rounded-lg bg-primary-blue hover:bg-primary-blue/80 text-white"
            >
                Save
            </Button>
        </form>
    )
}

export default AddExpenseForm