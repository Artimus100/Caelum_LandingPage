import Arrow from '../Assets/Arrow.svg'
import { Button } from '../components/Button'
export const GetInTouch = () => {
    const contactDetails = [{
        lable: 'Tweeter',
        value: 'CaliumX'
    },
    {
        lable: 'Email',
        value: 'calum@gmail.com'
    }, {
        lable: 'Phone',
        value: '+91 2891839278'
    }]
    return <div className="m-12 mt-48">
        <div className=''>
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Get In Touch</h1>
        </div>
        <div className='mt-12 flex w-full justify-between items-start'>
            <div className='inline-flex w-1/3   '>
                <div className='flex flex-col gap-8 w-full '>
                    {
                        contactDetails.map(({ lable, value }, index) => (

                            <div key={index} className='border-b-[1px] pb-3 border-b-zinc-600/30 inline-flex  flex-col  justify-between '>
                                <h5 className='text-zinc-500'>{lable}</h5>
                                <div className='inline-flex flex-row gap-4 items-center justify-start'>
                                    <h2 className='text-3xl text-zinc-200'>{value}</h2>
                                    <div className='inline-flex items-center justify-center'>
                                        <img src={Arrow.src} className=' rotate-[135deg] size-12' alt="Arrow Icon" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-8 w-1/2'>
                <div className='flex flex-row items-center  gap-8'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-zinc-100 ' htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='John' id='firstName' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-zinc-100 ' htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder='Doe' id='lastName' />
                    </div>
                </div>
                <div className='flex flex-row items-center  gap-8'>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-zinc-100 ' htmlFor="email">Email</label>
                        <input type="email" placeholder='john@gmailc.com' id='email' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='text-zinc-100 ' htmlFor="phone">Phone Number</label>
                        <input type="number" placeholder='+91 998797892' id='phone' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-zinc-100 ' htmlFor="message">Message</label>
                    <input className='h-32' type="text" placeholder='' id='message' />
                </div>
                <div className='inline-flex'>

                    <Button label='Submit' />
                </div>
            </div>
        </div>
    </div>
}
