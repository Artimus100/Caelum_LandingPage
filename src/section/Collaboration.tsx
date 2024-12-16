import Globe from '../Assets/Globe.png'

export const Collaboration = () => {
    const collaborationList = [{
        name : 'aramco',
        year:2023
    },{
        name : 'eki energy',
        year:2023
    },{
        name : 'carbon brief',
        year:2023
    },
]
    return <div className="flex flex-col gap-16 px-12 ">
        <div className="mb-12">
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Collaboration</h1>
        </div>
        <div className='relative w-full mt-12'>
        <div className="flex flex-row w-full justify-between items-center mt-4">
            <div  className="flex flex-col  justify-center gap-16">
                {
                    collaborationList.map(({name, year}) => (
                        <div key={name} className="flex flex-col items-start justify-center gap-1">
                            <h4 className="text-sm text-teal-600">{year}</h4>
                            <h3 className="text-4xl font-medium font-['Sofia_Pro'] uppercase text-[#9CB0A9]">{name}</h3>
                        </div>
                    ))
                }
            </div>
            <div  className="flex flex-col items-end justify-center gap-16">
            {
                    collaborationList.map(({name, year}) => (
                        <div key={name} className="flex flex-col items-end justify-center gap-1">
                            <h4 className="text-sm text-teal-600">{year}</h4>
                            <h3 className="text-4xl font-medium font-['Sofia_Pro'] uppercase text-[#9CB0A9] ">{name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <img src={Globe.src} alt="3D globe" />
        </div>
        </div>
    </div>
}
