import { QnA } from "../components/QnA"

export const Questions = () => {
    const questionAnswer = [{
        question : 'What is the purpose of this platform?',
        answer : 'Our platform enables individuals and businesses to participate in carbon offsetting by offering access to verified carbon credits. It simplifies the process through fractional ownership, transparent impact tracking, and community-driven governance.'
    },
    {
        question : 'How are carbon credits verified ?',
        answer : ' All carbon credits on our platform are audited and verified by accredited third-party organizations to ensure authenticity and compliance with global standards.'
    },{
        question : 'Can I buy a small portion of a carbon credit ?',
        answer : 'You can use our real-time dashboard to monitor the environmental impact of your purchased credits, providing transparency and fostering trust.'
    },{
        question : 'What rewards do I get for staking carbon credits ?',
        answer : 'By staking your carbon credits, you can earn rewards and incentives, promoting long-term engagement with the platform.'
    },{
        question : 'How does decentralized governance work ?',
        answer : 'Our platform empowers users through DAO-based governance, enabling them to participate in decision-making processes and influence the platform s growth and direction.'
    },]
    return <section id='Question' className="m-12 mt-48">
                    <div >
            <h1 className="text-7xl font-['Anton_SC'] text-[#9CB0A9]  uppercase">Questions</h1>
        </div>
        <div>
            <div className="bg-[#0F0F0F] rounded-xl p-10 flex flex-col gap-8 mt-12">
{                questionAnswer.map((qna, index) => (
                    <QnA key={index} {...qna} />
                ))}
            </div>
        </div>
    </section>
}
