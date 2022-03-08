import "./style/project.scss"

export default function Project(props) {
    return(
        <>
            <a href={props.link} target="_blank">
                <div className="project" style={{background: `url(${props.background})`, backgroundPosition: props.position, backgroundSize: "cover"}}></div>
            </a>
        </>
    )
}