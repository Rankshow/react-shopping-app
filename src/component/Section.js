import React from 'react';
import { Button } from 'react-bootstrap';

const Section = () => {
    return(
        <>
        <div className='pb-5 pt-3 text-dark fs-5  hover-overlay hover-zoom hover-shadow' style={{backgroundColor: 'rgba(255, 174, 86)'}}>
          <div className='mx-5'>
            <h1 className='text-center text-primary text-secondary mt-4'>The Simply Recipes Team<div></div></h1>
            <p style={{color:'#fff', fontSize:'20px', fontWeight:'bold'}}>
               Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.
               </p>
          </div>
          <div style={{display: 'flex', justifyContent:'center' }}><Button>Search for more recipes</Button></div>
        </div>
        </>
    )
}
export default Section;