import { Summary } from "./Summary/Summary" 
import { AboutMe } from './AboutMe/AboutMe'
import { Experience } from "./Experience/Experience"


export function Main() {
    return (
        <main>
            <Summary />
            <AboutMe />
            <Experience />
        </main>
    )
}