import React from 'react';
import Favourites from './Favourites';

const NamePage = ({ nameList, search, favourites, addToFavourites, gender, toggleGender}) => {
//<BabyNamesList list={gender}  addFavourite={toggleGender} />; 
    
    return (
    <>
  
    <Favourites
        list={nameList}
        nameList={gender}
        search={search}
        favourites={favourites}
        addToFavourites={addToFavourites}
        toggleGender={toggleGender}
      /> 
      </>
    )
};


export default NamePage;
 