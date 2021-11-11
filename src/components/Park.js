import DinoCard from "./DinoCard";

const Park = (props) => {
    console.log(props.dinos)
    const dinosToDisaply = props.dinos.map((each) => <DinoCard dino ={each}/>)

    return (

        <div className = "dino-grid" >
           {dinosToDisaply}
        </div>
                
    )

}

export default Park;