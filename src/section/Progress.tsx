import ProgressCard from '../Assets/Container.png'
import Arrow from '../Assets/Arrow.svg'

export const Progress = () => {
    const progressList = [{
        year: 2023,
        title: 'Doodle - customer support chatbot',
        desc: 'We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle s customer support inquiries, freeing up their team to focus on more complex issues.'
    },
    {
        year: 2023,
        title: 'Doodle - customer chatbot',
        desc: 'We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle s customer support inquiries, freeing up their team to focus on more complex issues.'
    }, {
        year: 2023,
        title: 'Doodle - customer support chatbot',
        desc: 'We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle s customer support inquiries, freeing up their team to focus on more complex issues.'
    },
    ]
    return <section id='Progress' className="px-12">
        <div>
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Progress</h1>
        </div>
        <div className='flex flex-row w-full  items-center mt-12 justify-between '>
            <div className='flex flex-col gap-6'>
                {progressList.map(({ year, title, desc }) => (
                    <div className='flex  justify-between flex-row gap-4 items-end border-b-[1px] py-4 border-b-zinc-700'>
                        <div className='inline-flex flex-col '>
                            <div className='inline-flex flex-col '>
                                <h5 className="text-sm text-teal-600">{year}</h5>
                                <h3 className="text-[20px]  font-['Sofia_Pro'] uppercase text-zinc-300">{title}</h3>
                            </div>
                            <div className=''>
                                <p className='hidden'>{desc}</p>
                            </div>
                        </div>
                        <div >
                            <img className='size-8 rotate-[135deg] ' src={Arrow.src} alt="Arrow" />
                        </div>
                    </div>
                ))}

            </div>
            <div className='w-1/3 inline-flex '>
                <img src={ProgressCard.src} alt="Progress Forest" />
            </div>
        </div>
    </section>
}
