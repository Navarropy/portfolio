import "./style/section.scss"

export default function Section(props) {
    return(
            <div className="info-section">
                <div className="title">{props.title}</div>
                <div className="body">
                    <ul>
                        {props.children}   
                    </ul>
                </div>
            </div>
    )
}