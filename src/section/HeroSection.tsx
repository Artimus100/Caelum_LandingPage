import CardImage from '../Assets/Card.png'
import Noice from '../Assets/Background.svg'

export const HeroSection = () => {
    return <>
        <div className="z-0 overflow-hidden inline-flex items-center justify-center mt-28">
           <div className='w-full flex items-center justify-center'>
           <h1
                className="pl-4 text-[116px]  tracking-tight leading-tight  uppercase font-extrabold font-['Anton_SC'] text-[#9CB0A9]"
            >Building a <span className="text-[#39B79F]">Carbon-Neutral</span> World with Blockchain </h1>
           </div>
        </div>
            <div className="inset-0 absolute -z-20 "  >
                <img src={Noice.src} className='w-full opacity-10' alt="" />
            </div>
        <div className="h-80  w-full absolute top-0  flex items-center justify-center -z-40 overflow-x-clip" >

                <div className="inline-flex items-center justify-center">
                    <div className="size-[600px] bg-[#D3FFCA]/30 blur-[300px] rounded-full absolute -top-40 left-40"></div>
                </div>
                <div className="inline-flex items-center justify-center">
                    <div className="size-[400px] bg-[#07B782]/20 blur-[300px] rounded-full absolute top-[200px] right-[300px] -z-40"></div>
                </div>
                <div className="inline-flex items-center justify-center">
                    <div className="size-[400px] bg-[#07B782]/30 blur-[300px] rounded-full absolute -top-[100px] right-[300px] -z-40"></div>
                </div>
                <div className="inline-flex items-center justify-center">
                    <div className="size-[500px] bg-[#8AEE98]/30 blur-[300px] rounded-full absolute top-0 -right-20 -z-40"></div>
                </div>

            {/* <div className="size-60 bg-[#07B782]/40 blur-[300px] rounded-full absolute"></div> */}
        </div>
    <div className='flex  p-6  shadow-sm '>
        <div
        className='inline-flex overflow-clip h-[500px] w-[4000px]  rounded-[40px] drop-shadow-md'
        style={{
            backgroundImage: `url(${CardImage.src})`,
            backgroundSize: "cover", // Ensures the image covers the parent
            backgroundPosition: "bottom", // Centers the image within the parent
            backgroundRepeat: "no-repeat", // Prevents image repetition

        }}
        >
        </div>
    </div>

    </>
}
