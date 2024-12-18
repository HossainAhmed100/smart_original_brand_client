
interface Props {
    props: string;
    slogan: string;
}

const TopNavOne: React.FC<Props> = ({ props, slogan }) => {
    return (
        <>
            <div className={`top-nav md:h-[44px] h-[44px] bg-[#fc8934]`}>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-center max-md:justify-center h-full">
                        <div className="text-center text-base font-bangla sm:font-medium font-normal text-white flex items-center">
                        আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +880 9613-660320
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavOne