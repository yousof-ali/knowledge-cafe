import profile from '../../assets/images/yousuf_pic.jpg'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-2 border-b-2  px-2 md:px-8 lg:px-12'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <div className='w-12 h-12'>
                <img className='rounded-full w-full h-full' src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;