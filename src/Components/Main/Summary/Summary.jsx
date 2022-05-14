import pdf from '../../../resume.pdf'

export function Summary() {
    return (
        <div className="summary-introduction">
            <section className="introduction">
            <div className="salutation">
                    <h2 className= "greeting font-redhat">Hi, my name is</h2>
                </div>
                <div className="name">
                    <h1 className="introduction-name heading-color font-oxygen">Brandon Chan</h1>
                </div>
                <div className="title">
                    <h2 className="introduction-title font-oxygen">Freelance Programmer</h2>
                </div>
                <div className="quick-summary font-oxygen p-color">
                    <p>I'm a freelance full stack developer who specializes in creating beautifully efficient websites.<br />
                    Currently I'm focused on expanding my knowledge through personal projects and online courses.</p>
                </div>
            </section>
            <section className="resume-section">
                <button className="resume"><a href={pdf} target='_blank' rel='noreferrer' className='resume-link'>Resume</a></button>
            </section>
        </div>
    )
}