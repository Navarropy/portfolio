import "./style/sidebar.scss"
import Section from "./section"

export default function Sidebar() {
    return(
    <div className="sidebar">
        <div className="name">Adriano Navarro</div>
        <div className="info">
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
        </div>
    </div>
    )
}