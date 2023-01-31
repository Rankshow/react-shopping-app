import React, { useState } from "react";

let nextId = 3;
const initialCounters = [
  { id: 0, name: 'Marta Colvin'},
  { id: 1, name: 'Spark john'},
  { id: 2, name: 'Jonas Schmetmann'},
];

const MovingDot = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialCounters);

  const handleList = () => {
     const nextList = [...artists];
     nextList.reverse();
     setArtists(nextList);
  }

  const handleEvent = () => {
    const insertAt = 1;
      const nextArtist = [
        // add item before list
        ...artists.slice(0, insertAt),
        //new item
        { id: nextId++, name: name},
        //add after the list in the item
      ...artists.slice(insertAt),
      ];
      setArtists(nextArtist);
      setName('');
    }

    return(
      <>
        <h1>Inserting Everyday Working</h1>
          <input className="m-4" value={name} onChange={e => setName(e.target.value)}/>
          <button onClick={handleEvent}>
            insert Value
          </button>
          <button onClick={handleList}>
            Reverse
          </button>
        <ul>
          {artists.map(items => (
          <li key={items.id}>
            {items.name}
          </li>
          ))}
        </ul>
      </>
    )
}

export default MovingDot;
