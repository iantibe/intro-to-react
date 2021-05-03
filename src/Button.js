const Button = (props) => {

    const {onClickFunction, children} = props
    return (
        <button onClick={onClickFunction}>{children}</button>
    )
}

export default Button;