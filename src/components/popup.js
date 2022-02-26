import "./style/popup.scss"

export default function Popup(props) {
    return(
        <div className="popup">
            {props.children}
        </div>
    )
}