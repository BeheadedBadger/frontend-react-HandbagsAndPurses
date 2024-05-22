// eslint-disable-next-line react/prop-types
function Button ( {isDisabled, text, target}) {
    return (<button disabled={isDisabled} onClick={target}> {text} </button>)
}

export default Button;