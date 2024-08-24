import "./Button.scss"
const Btn = ({name, children, click}) => {

    return (
        <button className={children} onClick={click}>
            {name}
        </button>
        
    )
}

export default Btn