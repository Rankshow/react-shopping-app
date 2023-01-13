import React from 'react';
import { useState } from 'react';
import { recipeData } from './recipeData';

const RecipeData = () => { 
    const [index, setIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setIndex(index + 1);
      }

    const handleImageEvent = () => {
      setShowText(!showText);
    }

    let recipeItem = recipeData[index];
    return(
        <>
        <div className='d-flex flex-column aligns-items-center px-5 mt-4'>
            <div className='text-center p-2'>
            <button className='bg-primary w-25 rounded-pill p-2' onClick={handleClick}>
                Next
            </button>
          </div >
            <h2 className='text-center pink'>
              {recipeItem.name} flavoured with {recipeItem.title}
            </h2>
          <h3 className='text-center p-3'>
            ({index + 1} of {recipeData.length})
          </h3>
          <div className='text-center'>
          <button className='w-25 rounded-pill p-2 bg-danger' onClick={handleImageEvent}>
            {showText ? 'Hide' : 'Show'} info
          </button>
          </div>
            <div className='fs-5 text-center text-white bg-dark p-4 m-3 rounded-pill'>
            {showText && <p>{recipeItem.description}</p>}
            </div>
            <div className='mx-auto'>
            <img style={{width:'350px', height:'340px', borderRadius: '50%'}}
              src={recipeItem.url} 
              alt={recipeItem.alt}         
            />
            </div>
         </div>
        </>
    );
}

export default RecipeData;