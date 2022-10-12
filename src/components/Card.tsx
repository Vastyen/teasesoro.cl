import React from 'react'; // we need this to make JSX compile

import * as Factory from "factory.ts";

interface Person {

        name: string;
    area: string;
    description: string;
    contact: string;
}


export const personFactory = Factory.Sync.makeFactory<Person>({
    name: "",
    area: "",
    description: "",
    contact: "",
});


export default function Card(props: Person) {
    return (<>
        <label>{props.name}</label>
        <label>{props.area}</label>
        <label>{props.description}</label>
        <label>{props.contact}</label>
    </>
    )


}

