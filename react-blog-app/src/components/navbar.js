
import Link from 'next/link';
import React from 'react';

const navbar = () => {
  return (
    <div>
     <header className=" body-font bg-slate-400 text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Logo</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="./login" className="mr-5 hover:text-blue-500">Login</Link>
            <Link href="./sign" className="mr-5 hover:text-blue-500">SignUp</Link>
          
          </nav>
          <div className="inline-flex items-center border-0 py-1 space-x-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            <a href="#" >About us</a>
            <a href="#" >Contact us</a>
          </div>
        </div>
      </header>
            
    </div>
  );
}

export default navbar;
