"use client"
import React from "react";
import Image from "next/image";
import BlogList from "@/components/BlogList";
import Blog  from  "@/components/blog"

const page = () => {
  return (
   <>
    <section>
        {/* <div>
         <BlogList /> 
        </div> */}
         <div>
         <Blog /> 
        </div>

    </section>
  
   
   
   </>
  );
}

export default page;