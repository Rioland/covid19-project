import cookies from "js-cookie"
import { useRouter } from "next/router";

const Conf = () => {
  var  route=useRouter();
   var vid= cookies.get("vid");
   console.log(vid);
    return ( 
        <>
        kllkk</>
     );
}
 
export default Conf;