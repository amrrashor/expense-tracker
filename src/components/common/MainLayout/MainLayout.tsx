import NavigationBar from '../../ExpensListing/NavigationBar';
import type { IMainlayoutProps } from '../../../types/types';

const Mainlayout = ({children , withBottomBar}: IMainlayoutProps) => {
    return (
        <div className={`${withBottomBar && 'bg-gradient-to-b from-[#f3f5f9] to-white'} h-full relative md:shadow max-w-full md:max-w-1/2 mx-auto md:rounded-xl md:my-4`}>
            {children}
            {withBottomBar && (
                <NavigationBar />
            )}
        </div>
    )
}

export default Mainlayout