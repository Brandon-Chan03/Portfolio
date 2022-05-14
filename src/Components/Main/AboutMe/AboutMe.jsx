import selfImage from '../../../images/headshot.jpg'

export function AboutMe() {
    return (
        <div className="about-me-section">
            <section className="about-me">
                <div className="about-me-title">
                    <h2 className="about-me-heading font-redhat weight-600">About Me</h2>
                    <hr />
                </div>
                <div className="about-me-info">
                    <p className="info-about-me font-oxygen p-color">Hello! My name is <span>Brandon</span> and I've always enjoyed technology especially the coding behind how it all works.  
                        My coding journey began back when I was <span >10 years old</span> when I discovered <span>HTML and CSS</span>.  Sadly, I had stopped
                        because back then 10 year old me didn't have the patience to code.  Since then I have been <span>on and off</span> coding.
                    </p>
                    <br />
                    <p className="info-continued font-oxygen p-color">Fast forward, <span>6 years,</span> to my Sophomore year of highschool I picked coding backup.  
                        I picked up <span>HTML and CSS</span> once again and became the <span>Web Developer</span> for my mom's business, updating her website regularly. 
                        This also gave me the opportunity to learn <span>e-commerce</span> and how <span>themes</span> are developed through <span>my use of Shopify</span>.  One year later,
                        quarantine hit and that gave me more time than ever to <span>enhance my skills</span>.
                    </p>
                    <br />
                    <p className="info-continued-2 font-oxygen p-color">Now in <span>the present</span>, I have had the opportunity to work on <span>2 freelance jobs</span>.  One being a <span>Web Developer</span>
                        for my <span>mom's business</span> and my second being a <span>Web Developer</span> for a <span>local Christian leadership forum</span>. I've also worked on multiple personal
                        projects.
                    </p>
                </div>
            </section>
            <section className="personal-image">
                <div className="brandon-image">
                    <img src={selfImage} alt="Brandon Chan" title="Brandon Chan" className="brandon-chan" />
                </div>
                <section className="technologies">
                    <div className="skills">
                        <ul className="skills-list font-oxygen">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>PostgreSQL</li>
                            <li>APIs</li>
                        </ul>
                    </div>
                </section>
            </section>   
        </div>
    )
}