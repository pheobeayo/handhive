
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { CiInstagram } from "react-icons/ci";


export default function Footer() {
  return (
    <footer className="bg-[#000F15] mt-auto border-black border-t w-1/2">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex gap-4 mx-64">
          <FaTwitter color="white" />
          <CiInstagram color="white" />
          <HiOutlineMail color="white" />
          <SiDiscord color="white" />
        </div>

      </div>
      <div className="border"></div>
      <div className="grid-place-items-center mt-4 mb-4">
        <p className="text-center text-base text-white">About <span className="mx-2">Our services</span><span className="mx-2">Contact</span>  FAQs</p>
      </div>
      <div className="border"></div>
      <div className="grid-place-items-center mt-4 mb-4">
        <p className="text-center text-base text-white">How it works</p>
      </div>
      <div className="border"></div>
      <div className="grid-place-items-center mt-4">
        <p className="text-center text-base text-white">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  )
}