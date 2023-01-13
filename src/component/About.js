import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <div>
            <h2>About</h2>
            <Link to='/about' className='btn'>
                About 
            </Link>
        </div>
    )

}
export default About;