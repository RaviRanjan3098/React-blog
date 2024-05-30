import { BlogProvider } from './context/BlogContext'; // Adjust the path if necessary
import '../styles/globals.css'; // Import your global CSS

function App({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  );
}

export default App;
