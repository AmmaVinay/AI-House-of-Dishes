import { Link } from 'react-router-dom';

const NavBarDishes = () => {
  return (
    <>
      <div className='py-10 bg-[#e6e6fa] shadow-lg'>
        <div className='flex justify-center gap-6 font-medium pt-5'>
          <Link to='/' className='bg-[#717173] text-white p-2 rounded-full px-5'>All</Link>
          <Link to='/Luxury-Dishes' className='bg-[#717173] text-white p-2 rounded-full px-5'>Luxury Dishes</Link>
          <Link to='/' className='bg-[#717173] text-white p-2 rounded-full px-5'>Quick Dishes</Link>
          <Link to='/' className='bg-[#717173] text-white p-2 rounded-full px-5'>Healthy Dishes</Link>
          <Link to='/' className='bg-[#717173] text-white p-2 rounded-full px-5'>Create Dishes</Link>
        </div>
      </div>
    </>
  );
}

export default NavBarDishes;
