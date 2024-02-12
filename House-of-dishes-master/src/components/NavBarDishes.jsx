import { Link } from 'react-router-dom';

const NavBarDishes = () => {
  return (
    <>
      <div className='py-10 bg-[#ADD8E6]'>
        <div className='flex justify-center gap-6 font-medium pt-5'>
          <Link to='/' className=' bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5'>All</Link>
          <Link to='/Luxury-Dishes' className='bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5'>Luxury Dishes</Link>
          <Link to='/' className='bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5'>Quick Dishes</Link>
          <Link to='/' className='bg-gradient-to-tr from-cyan-400 to-blue-500 text-white p-2 rounded-full px-5'>Healthy Dishes</Link>
          <Link to='/' className='bg-gradient-to-tr from-cyan-400 to-blue-500 transparent text-white p-2 rounded-full px-5'>Create Dishes</Link>
        </div>
      </div>
    </>
  );
}

export default NavBarDishes;
