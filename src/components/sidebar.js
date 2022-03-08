import "./style/sidebar.scss"
import Section from "./section"

export default function Sidebar() {
    return(
    <div className="sidebar">

        <div className="sidebar-container">
            <div className="personal-info">
                <div className="name">Adriano<br />Navarro</div>
                <div className="position"><p>Web Developer</p></div>
                <div className="contact">
                    <p>City of São Paulo</p>
                    <p>+55 (11) 93960-8757</p>
                    <p>Adriano_Navarro@outlook.com</p>
                </div>
            </div>
            
            <div className="info">
                <Section title="Front-End Skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Sass/Scss</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </Section>
                <Section title="Back-End Skills">
                    <li>Python</li>
                    <li>Selenium</li>
                    <li>SQLite</li>
                    <li>MySQL</li>
                    <li>PHP</li>
                </Section>
                <Section title="Extra Skills">
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                </Section>
                <Section title="Education">
                    <li>Technical School of São Paulo (ETEC) - I.T. Technician</li>
                </Section>
                <Section title="Languages">
                    <li>English (B2 - C1)</li>
                    <li>Portuguese (Native)</li>
                </Section>
            </div>
        </div>
    </div>
    )
}