"use client"
import React from "react";
import Image from "next/image";
import Blog from "@/components/blog";
// import { BlogProvider } from './context/BlogContext';

const page = ({ Component, pageProps }) => {
  return (
   <>
    <section>
        <div>
         <Blog /> 
        </div>

        {/* <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider> */}
    </section>
  
   
   
   </>
  );
}

export default page;