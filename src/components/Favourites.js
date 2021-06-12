import React from "react";


const Favourites = ({ nameList, favourites }) => {

 const addNames = favourites.map((id)=> {
     const { name, sex } = nameList[id]
     return (
         <li key={name} className={sex}>{name}</li>
     )
 })
  return (
    <div>
      <h3>Favourites List:</h3><span><ul>{addNames}</ul></span>
    </div>
  );
};

export default Favourites;
// const myArr = () => {
//         setFavourites([1, 2, 4])
//     }
//     const idList = favourites.map(id => {
//         const babyName = nameList[id].name;
//         console.log(babyName);
//         return (
//             <li key={id}>{babyName}</li>
//         )
//     })

// const addNames = nameList.filter((value) => {
//     return favourites.includes(value.id);
//   });

//   const removeNames = (id) => {
//     return setFavourites(
//       favourites.filter((enterId) => {
//         return id !== enterId;
//       })
//     );
//   };

//   const containNames = favourites.length > 0;
