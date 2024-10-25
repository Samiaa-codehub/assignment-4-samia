import Image from "next/image"
import Link from "next/link"
import logo from "../../../../public/logo.jpg"


const Header=()=>{
    return(
        <div className="">
                <header className="bg-pink-400">
                <div className=" container mx-auto flex flex-wrap  flex-col md:flex-row">
                 <Image
                 src={logo}
                 alt="logo"
                 className="w-[60px] h-[60px] rounded-full m-2"
                 />
                 <span className="m-5 text-2xl">Sweet Delights</span>
                
                <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 flex flex-wrap items-center text-base justify-between gap-20 text-2xl " >
                    <li className="hover:text-gray-500  m-5"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-gray-500 m-5"><Link href={"/"}> About us</Link></li>
                    <li className="hover:text-gray-500 m-5 "><Link href={"/"}>services</Link></li>
                
                </ul>

                </div>
                </header>
        </div>
    )
}
export default Header