import Image from "next/image"
import logo from "../../../../public/logo.jpg"
import face from "../../../../public/face.jpg"
import inta from "../../../../public/inta.jpg"
import { clearScreenDown } from "readline"
import Link from "next/link"
const Footer=()=>{
    return(
        <div className="h-20 bg-pink-400">
            <footer>
                <div>
                    <h5 className="text-md font-semibold  text-center text-2xl">Follow us</h5>
                    <ul className="flex justify-center space-x-4">
                        <li>
                            
                            <Image
                            src={face}
                            alt="Facebook"
                            width={60}
                            height={60}
                            className="rounded-full"
                            />
                            
                        </li>
                        <li>
                        
                            <Image
                            src={inta}
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="rounded-full"
                            />
                        </li>
                    </ul>
                    </div>
                    <div className=" bg-pink-400 text-center text-2xl">
                        <p>Email: Contact@SweetDelight234.com</p>
                        <p>phone: +1 345-456-78903</p>
                     </div>
                     
            <div className=" flex font-semibold bg-pink-400  ">
                <Image
                src={logo}
                alt="logo"
                className="w-[60px] h-[60px] rounded-full"/>
                <span className="text-2xl m-5  mr-10 font-thin">&copy;Sweet Delights.com</span>
                </div>

            </footer>
        </div>
    )
}
export default Footer