import React, { Fragment } from 'react'; // we need this to make JSX compile
import Card, { personFactory } from './Card';



export default function Cards(){
    const p1 = personFactory.build({
        name: "Bastián Escribano",
        area: "Informática",
        description: "Ingeniero Informático",
        contact: "+56 9 46241025",
    })

    return(
        <>
        <Card name={p1.name} area={p1.area} description={p1.description} contact={p1.contact}></Card>
   
        </>
    )
    

    
}
