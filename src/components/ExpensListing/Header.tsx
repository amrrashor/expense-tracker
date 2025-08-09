const Header = () => {
    return (
        <div className='header-bg relative rounded-bl-lg rounded-br-lg md:rounded-lg bg-primary-blue p-8 pb-40'>
            
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='w-10 h-10 bg-contain rounded-full mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCicxernIb5W2jIRbjKwiMOVIit_7XJtczA&s" alt="" />
                    <div>
                        <p className='text-sm text-white/70'>Good Morning</p>
                        <h4 className='font-bold text-lg text-white/90'>Amr</h4>
                    </div>
                </div>

                <div>drop down</div>
            </div>
        </div>
    )
}

export default Header