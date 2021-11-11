
const Buttons = (props) => {

    return (
        <>
        <button onClick = {props.getRandomDinos}>Research New Species</button>
        <button onClick ={props.addDino}>Add Dinosaur To Park</button>
        <button onClick = {props.resetPark}  >Destroy Park (some things were not meant to be)</button>
        </>
    )

}

export default Buttons;