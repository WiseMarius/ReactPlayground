import './Card.css'

function Card(props) {
    const classNameValue = 'card ' + props.className

    return <div className={classNameValue}>{props.children}</div>
}

export default Card;