"use client";
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseconfig';
import { useRouter } from 'next/navigation';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        console.log({ res });
        setEmail('');
        setPassword('');
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert('Failed to sign in. Please check your email and password and try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Sign In</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error.message}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;




// import React from "react";
// import Link from "next/link";
// import { Input, Button } from "antd";

// const page = () => {
//   return (
//     <>
//       <div className="h-screen flex flex-col m-auto justify-center items-center">
//         <div className="mt-4">
//           <b className="text-4xl font-bold">Login Page </b>
//         </div>
//         <div className="flex flex-col items-start justify-center pl-20 pr-20 pb-20 pt-10">

//           <p className="mt-2 text-textColor text-sm">Email</p>
//           <Input
//             className="w-80 border border-blue-700 rounded-md"
//             defaultValue=" "
//           />

//           <p className="mt-2 text-textColor text-sm">Password</p>
//           <Input
//             className="w-80 border border-blue-700 rounded-md"
//             defaultValue=" "
//           />



//           <Link href="#" className="mt-6 m-auto">
//             <Button
//               type="submit"
//               className="w-80  login-form-button text-white bg-blue-500"
//             >
//               Login Now 
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

