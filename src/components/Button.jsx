// eslint-disable-next-line react/prop-types
function Button ( {isDisabled, text}) {
    const printToConsole = () => {
        console.log({text})
    };

    return (<button disabled={isDisabled} onClick={printToConsole}> {text} </button>)
}

export default Button;