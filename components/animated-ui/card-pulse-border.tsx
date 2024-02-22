const CardPulseBorder = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative h-full w-full my-20'>
            <div className='absolute top-0 flex w-full justify-center'>
                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
            </div>
            <div className='flex h-full items-center justify-center rounded-md border border-stone-800 bg-gradient-to-b from-stone-950 to-black px-3 py-2'>
                {children}
            </div>
        </div>
    );
};

export default CardPulseBorder;
