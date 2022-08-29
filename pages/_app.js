import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../styles/globals.css'
// import '../styles/register.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

  return <Component {...pageProps} />
}


export default MyApp
