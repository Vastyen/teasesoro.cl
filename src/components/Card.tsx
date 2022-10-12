import React from 'react'; // we need this to make JSX compile

import * as Factory from "factory.ts";

interface Person {
    id: number;
    name: string;
    area: string;
    description: string;
    age: number;
}


export const personFactory = Factory.Sync.makeFactory<Person>({
    id: Factory.each((i) => i),
    name: "",
    area: "",
    description: "",
    age: 0,
});


export default function Card(props: Person) {
    return (<>
        <label>{props.id}</label>
        <label>{props.name}</label>
        <label>{props.area}</label>
        <label>{props.description}</label>
        <label>{props.age}</label>
    </>
    )


}

