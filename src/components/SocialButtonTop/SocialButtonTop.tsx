import { TiktokLogo } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"


function SocialButtonTop() {
  return (
    <>
    <div className={` bg-[#fc8934]`}>
      <div className="container p-4 mx-auto h-full">
        <div className="flex justify-center max-md:justify-center h-full">
        <div className="list-social flex items-center gap-8">
            <Link href={'https://www.facebook.com/Smartoriginalbrand'} target='_blank'>
              <div className="icon-facebook text-4xl text-white"></div>
            </Link>
            <Link href={'https://www.instagram.com/smartoriginalbrand'} target='_blank'>
              <div className="icon-instagram text-4xl text-white"></div>
            </Link>
            <Link href={'https://www.tiktok.com/@smart_original_brand02'} target='_blank'>
              <TiktokLogo size={32} color="white"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default SocialButtonTop