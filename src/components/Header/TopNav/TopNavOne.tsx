
interface Props {
    props: string;
    slogan: string;
}

const TopNavOne: React.FC<Props> = ({ props, slogan }) => {
    return (
        <>
            <div className={`top-nav md:h-[44px] h-[30px] bg-[#fc8934]`}>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-center max-md:justify-center h-full">
                        <div className="text-center text-button-uppercase text-white flex items-center">
                        আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +880 1975-859249
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavOne