import { House, Plus, SignalHigh, UserRound, WalletMinimal } from 'lucide-react'
import { NavLink } from 'react-router'

const NavigationBar = () => {
    return (
        <div className='fixed md:absolute bottom-0 mt-10 bg-re-50 p-6 w-full md:shadow md:rounded-bl-lg md:rounded-br-lg bg-white'>
            <div className='flex justify-between items-center'>
                <NavLink to={'/'}>
                    {({isActive}) => (
                        <House stroke={isActive ? '#2053f4' : '#cecece'} />
                    )}
                </NavLink>

                <NavLink to={'/not-found'}>
                    {({isActive}) => (
                        <SignalHigh stroke={isActive ? '#2053f4' : '#cecece'} />
                    )}
                </NavLink>

                <NavLink to={'/addExpense'}>
                    <div className='bg-primary-blue p-3 rounded-full'>
                        <Plus stroke='#fff' />
                    </div>
                </NavLink>

                <NavLink to={'/not-found'}>
                    {({isActive}) => (
                        <WalletMinimal stroke={isActive ? '#2053f4' : '#cecece'} />
                    )}
                </NavLink>

                <NavLink to={'/not-found'}>
                    {({isActive}) => (
                        <UserRound  stroke={isActive ? '#2053f4' : '#cecece'} />
                    )}
                </NavLink>
            </div>
        </div>
    )
}

export default NavigationBar