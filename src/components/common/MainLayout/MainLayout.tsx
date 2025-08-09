import { type ReactNode } from 'react';
import NavigationBar from '../../ExpensListing/NavigationBar';

type Props = {
    children: ReactNode;
    withBottomBar: boolean
};

const Mainlayout = ({children , withBottomBar}: Props) => {
    return (
        <div className={`${withBottomBar && 'bg-gradient-to-b from-[#f3f5f9] to-white'} h-full relative md:shadow max-w-full md:max-w-1/2 mx-auto md:rounded-xl my-4`}>
            {children}
            
            {withBottomBar && (
                <NavigationBar />
            )}
        </div>
    )
}

export default Mainlayout