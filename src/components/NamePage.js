import React from 'react';
import BabyNamesList from './BabyNamesList';

const NamePage = ({ gender, toggleGender}) => {
    
    return <BabyNamesList list={gender}  addFavourite={toggleGender} />;
};


export default NamePage;
