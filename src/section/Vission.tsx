import Vission_1 from '../Assets/VissionCard1.png'
import Vission_2 from '../Assets/VissionCard2.png'

export const Vission = () => {
    return <section id='Vission' className='my-72 pl-6 mx-12  relative '>
        <h1 className="text-7xl font-['Anton_SC'] tracking-wider text-[#CDCDCD] uppercase">
        To drive a
        <div className='size-60 top-0 left-[360px]  absolute'>
            <img src={Vission_1.src} alt="Forest and boat" />
        </div>
        <span className='text-teal-600 ml-[290px] '>carbon-neutral</span>
        </h1>
        <h1  className="text-7xl font-['Anton_SC']  tracking-wider text-[#CDCDCD] uppercase" >
            <div className='size-44 right-8 top-18 absolute'>
            <img src={Vission_2.src} alt="River and brear" />
        </div>
        <span className=''>future through transparent accessible</span>
        <span className='text-teal-600 ml-5'>blockchain</span> innovations</h1>
    </section>
}
