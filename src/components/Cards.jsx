import React, { Fragment } from 'react'; // we need this to make JSX compile
import Card, { personFactory } from './Card';



export default function Cards(){
    const p1 = personFactory.build({
        name: "Bastián Escribano",
        area: "Informática",
        description: "Ingeniero Informático",
        age: 22,
    })

    return(
        <Card name={p1.name}></Card>
        

    )
    

    
}
