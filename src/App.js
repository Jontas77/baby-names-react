import React from "react";
import BabyNamesData from "./data/babyNamesData.json";

//Import Components
import BabyNamesList from "./components/BabyNamesList";

const App = () => {
  return (
    <div className="container">
     <BabyNamesList nameList={BabyNamesData} />
    </div>
  );
};

export default App;
