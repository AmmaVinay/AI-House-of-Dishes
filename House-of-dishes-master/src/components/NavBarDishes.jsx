import { Link } from 'react-router-dom';

const NavBarDishes = () => {
  return (
    <>
      <div className='py-10 bg-[#ADD8E6]'>
        <div className='flex justify-center gap-6 font-medium pt-5'>
          <Link to='/All-Indian-Dishes' className='border-2 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5 hover:bg-gradient-to-tb hover:from-blue-500 hover:to-cyan-400 hover:border-blue-500 transition-all duration-300' onClick={() => window.scrollTo(0, 0)}>All</Link>
          <Link to='/Luxury-Dishes' className='border-2 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5 hover:bg-gradient-to-tb hover:from-blue-500 hover:to-cyan-400 hover:border-blue-500 transition-all duration-300' onClick={() => window.scrollTo(0, 0)}>Luxury Dishes</Link>
          <Link to='/' className='border-2 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5 hover:bg-gradient-to-tb hover:from-blue-500 hover:to-cyan-400 hover:border-blue-500 transition-all duration-300' onClick={() => window.scrollTo(0, 0)}>Quick Dishes</Link>
          <Link to='/' className='border-2 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5 hover:bg-gradient-to-tb hover:from-blue-500 hover:to-cyan-400 hover:border-blue-500 transition-all duration-300' onClick={() => window.scrollTo(0, 0)}>Healthy Dishes</Link>
          <Link to='/' className='border-2 bg-gradient-to-tr from-cyan-400 to-blue-500 transparent text-white p-2 rounded-full px-5 hover:bg-gradient-to-tb hover:from-blue-500 hover:to-cyan-400 hover:border-blue-500 transition-all duration-300' onClick={() => window.scrollTo(0, 0)}>Create Dishes</Link>
        </div>
      </div>
    </>
  );
}

export default NavBarDishes;
