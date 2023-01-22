import React from 'react';
import { useState } from 'react';
import { recipeData } from './recipeData';
import './RecipeData.css';

const RecipeData = () => { 
    const [index, setIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < recipeData.length - 1;

    // Event handler for the next button
    const handleClick = () => {
        if(hasNext){
        setIndex(index + 1);
      }
    }

    // Event handler for the Previous button
    const handlePrevious = () => {
      if(hasPrev){
        setIndex(index - 1);
      }
    }
    // Event for Showing text
    const handleImageEvent = () => {
      setShowText(!showText);
    }

    let recipeItem = recipeData[index];
    return(
        <>
        <div className='d-flex flex-column aligns-items-center px-5 mt-4'>
            <div className='text-center p-2'>
            <button className='btn-effect bg-primary w-25 border-0 rounded-pill p-2 text-white' disabled={!hasNext} onClick={handleClick}>
                Next
            </button>
          </div >
          <div className='text-center p-2'>
            <button className='btn-effect bg-primary border-0 w-25 rounded-pill p-2 text-white' disabled={!hasPrev} onClick={handlePrevious}>
              Previous
            </button>
          </div>
            <h2 className='text-center pink'>
              {recipeItem.name} flavoured with {recipeItem.title}
            </h2>
          <h3 className='text-center p-3'>
            ({index + 1} of {recipeData.length})
          </h3>
          <div className='text-center'>
          <button className='btn-effect w-25 rounded-pill mb-3 border-0  p-2 bg-danger' onClick={handleImageEvent}>
            {showText ? 'Hide' : 'Display'} info
          </button>
          </div>
           <div>
            {
            showText && <p className='text-center p-3  fs-5 rounded bg-success w-50px text-white'>{recipeItem.description}</p>
            }
           </div>
            <div className='mx-auto'>
            <img style={{width:'350px', paddingTop: '1rem', height:'340px', borderRadius: '50%'}}
              src={recipeItem.url} 
              alt={recipeItem.alt}         
            />
            </div>
         </div>
        </>
    );
}

export default RecipeData;