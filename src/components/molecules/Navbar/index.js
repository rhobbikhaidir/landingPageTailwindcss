import React from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const dataNav = [
    {
      id: Math.random(),
      navLi: 'Home',
      path: '/',
    },
    {
      id: Math.random(),
      navLi: 'Find a Doctor',
      path: '/doctor',
    },
    {
      id: Math.random(),
      navLi: 'Apps',
      path: '/apps',
    },
    {
      id: Math.random(),
      navLi: 'Testimonial',
      path: '/testimonial',
    },
    {
      id: Math.random(),
      navLi: 'About us',
      path: '/about',
    },
  ];
  const navigate = useNavigate();
  const handleChangePage = path => {
    navigate(path);
  };

  return (
    <nav className="fixed w-full max-w-6xl bg-transparent  flex flex-row justify-between h-20  ">
      <a href="/" className="flex focus:outline-none flex-row py-4 b">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ">
          <p className="text-center text-lg text-white sm:text-2xl bg-brand rounded-full font-bold font-sans pt-1">
            T{' '}
          </p>
        </div>
        <p className="text-lg sm:text-2xl px-1 pt-1">Trafalgar</p>
      </a>
      <ul className="list-none hidden  w-full px-4  sm:flex sm:flex-row sm:space-x-6  py-6 sm:justify-end">
        {dataNav.map((data, index) => {
          // console.log(data);
          return (
            <li
              className="hover:text-black text-gray-500 cursor-pointer text-base"
              key={data.id}
              onClick={() => handleChangePage(data.path)}
            >
              {data.navLi}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
