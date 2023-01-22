import React, {useState} from 'react';

const MovingDot = () => {
 const [person, setPerson] = useState({
    firstName: 'Micheal',
    lastName: 'Uwaoma',
    email: 'uwaomaobinna@gmail.com'
 });

  // event handler to get the value of the firstname
   const handleFirstNameChange = (e) => {
    setPerson({
    ...person, 
     firstName: e.target.value
   })
   }

  // event handler to get the value of the lastname
   const handleLastNameChange = (e) => {
    setPerson({
    ...person,
    lastName: e.target.value
   })
   }

   // event handler to get the value of the email
   const handleEmailChange = (e) => {
    setPerson({
    ...person,
    email: e.target.value
   })
   }

 return(
    <div>
        <label>
            FirstName:
            <input onChange={handleFirstNameChange} value={person.firstName} />
        </label> <br></br>
        <label>
            LastName:
            <input onChange={handleLastNameChange} value={person.lastName} />
        </label><br></br>
        <label>
            Email:
            <input onChange={handleEmailChange} value={person.email} />
        </label>
        <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.email})
        </p>
    </div>
 )
}
export default MovingDot;