import { type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Mainlayout = ({children}: Props) => {
    return (
        <div className='md:shadow max-w-full md:max-w-1/2 mx-auto md:rounded-xl p-4 mt-4'>{children}</div>
    )
}

export default Mainlayout