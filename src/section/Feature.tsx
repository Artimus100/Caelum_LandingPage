import Feature_1 from '../Assets/Feature1.png'
import Feature_2 from '../Assets/Feature2.png'
import Feature_3 from '../Assets/Feature3.png'

export const Feature = () => {

    return <div className="mt-[360px] mb-[240px] px-12">
        <div>
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Feature</h1>
        </div>

        <div className=' flex flex-col gap-16 mt-12'>
            <div className='flex w-full flex-row items-center justify-between '>
                <div className='inline-flex items-center justify-center'>
                    <img src={Feature_1.src} alt="Feature Card" />
                </div>
                <div className='w-[45%] p-0  flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Tokenisation & Ownership Unlocked</h5>
                    <h3 className='text-3xl text-zinc-200'>Unlock the power of <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Tokenization</span> & <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Fractional Ownership</span> Carbon Credits with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Calum</span></h3>
                </div>
                <p className='text-sm text-zinc-400 font-light'>Calum revolutionizes carbon offsetting by making it accessible to everyone. Through tokenization, carbon credits are digitized for seamless trading, while fractional ownership allows individuals and businesses to contribute to sustainability, no matter their size. Empower your journey toward a greener future with ease and transparency.</p>
                </div>
            </div>
            <div className='flex w-full flex-row items-center justify-between '>
                <div className='w-[45%] p-0  flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Accessibility Unlocked</h5>
                    <h3 className='text-3xl text-zinc-200'><span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Sustainability</span> isn’t just for the big players anymore.</h3>
                </div>
                <p className='text-sm text-zinc-400 font-light'>Explore a diverse range of verified carbon credit projects with ease. Our advanced search tools allow you to find projects that align with your values and sustainability goals. Whether you want to buy, trade, or support impactful initiatives, our platform ensures a seamless and transparent experience for every user.</p>
                </div>
                <div className='inline-flex items-center justify-center'>
                    <img src={Feature_2.src} alt="Feature Card" />
                </div>
            </div>
            <div className='flex w-full flex-row items-center justify-between '>
                <div className='inline-flex items-center justify-center'>
                    <img src={Feature_3.src} alt="Feature Card" />
                </div>
                <div className='w-[45%] p-0  flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/80 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Powerpacked Fetures</h5>
                    <h3 className='text-3xl text-zinc-200'>Additional Features To <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/90 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Manage</span> & <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6 ]/90 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Track</span> Carbon Credits with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14B7A6]/90 via-[rgba(255,255,255,.88)] to-[rgba(255,255,255,0.88)]'>Calum</span></h3>
                </div>
                <p className='text-sm text-zinc-400 font-light'>Our platform offers a comprehensive suite of tools to help you easily manage, track, and trade carbon credits. With features like customizable impact reports, real-time notifications, and seamless integration with external verified sources, you can stay on top of your environmental contributions and make informed decisions with ease.</p>
                </div>
            </div>

        </div>
    </div>
}
