import React from 'react'

function EventsDemo() {

    type Person = {
        name: string;
        age: number;
    }
    let peoples: Person[] = [
        {
            name: "John",
            age: 25
        },
        {
            name: "Jane",
            age: 30
        },
        {
            name: "Jack",
            age: 28
        }
    ]
  return (
    <div>
    {
        /*
        * To display each item in an array to the dom we use the map function
        */
       peoples.map((obj, index) => {
        return (
            <div key={index}>
                <h1>{obj.name}</h1>
                <h2>{obj.age}</h2>
            </div>
        );
        })
    }
    </div>
  )
}

export default EventsDemo