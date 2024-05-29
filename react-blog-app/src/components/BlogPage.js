// import React, { useContext } from 'react';
// import { BlogContext } from "../../src/app/context/BlogContext" ;
// import { useRouter } from 'next/router';

// const BlogPage = () => {
//   const { blogs } = useContext(BlogContext);
//   const router = useRouter();
//   const { id } = router.query;
//   const blog = blogs[id];

//   if (!blog) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>{blog.title}</h2>
//       <div dangerouslySetInnerHTML={{ __html: blog.description }} />
//       {blog.coverImage && <img src={blog.coverImage} alt="Cover" />}
//     </div>
//   );
// };

// export default BlogPage;
