import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import About from "./About";
import Cookout from "./cookout/Cookout";
import Food from "./food/Food";
import Location from "./location/Location";
import ViewCookouts from "./cookout/ViewCookouts";

function App() {
  const [user, setUser] = useState(null);
  const [foods, setFoods] = useState([]);
  const [cookouts, setCookouts] = useState([]);
  const [locations, setLocations] = useState([]);

  // TODO:
  // 1. Figure out how to get to the user's specific cookouts
  // Most likely this requires a fetch() call to "http://localhost:3000/username/cookouts"
  // 2. I maybe need to pass down the user's 'username' value from 'App.js' as props so that I can make fetch requests
  // on their behalf as well
  // useEffect(() => {
  //   fetch("http://localhost:3000/cookouts", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setCookouts(data);
  //   })
  // }, [cookouts]);

  // Example to use as a reference for how to make a fetch() request to collect the 'cookouts' we created in the context of this project:
  // https://github.com/SamuelBanya/phase-4-rails-create-read-lab/blob/main/client/src/components/PlantPage.js
  // useEffect(() => {
  //     // no need to use http://localhost:3000 here
  //     fetch("/plants")
  //       .then((r) => r.json())
  //       .then((plantsArray) => {
  //         setPlants(plantsArray);
  //       });
  // }, []);

  // function handleAddPlant(newPlant) {
  //   const updatedPlantsArray = [...plants, newPlant];
  //   setPlants(updatedPlantsArray);
  // }

  function handleAddFood(newFood) {
    console.log("newFood in parent App.js component: ", newFood);
    // const updatedFoodsArray = [...foods, newFood];
    // setFoods(updatedFoodsArray);
  }

  function handleEditFood(food) {
    console.log("handleEditFood() function called in parent App.js component");
  }

  function handleDeleteFood(food) {
    console.log("handleDeleteFood() function called in parent App.js component");
  }

  function handleAddCookout(newCookout) {
    console.log("newCookout in parent App.js component: ", newCookout);
    // const updatedCookoutsArray = [...cookouts, newCookout];
    // setCookouts(updatedCookoutsArray);
  }

  function handleEditCookout(cookout) {
    console.log("handleEditCookout() function called in parent App.js component");
  }

  function handleDeleteCookout(cookout) {
    console.log("handleDeleteCookout() function called in parent App.js component");
  }

  function handleAddLocation(newLocation) {
    console.log("newLocation in parent App.js component: ", newLocation);
    // const updatedLocationsArray = [...locations, newLocation];
    // setLocations(updatedLocationsArray);
  }

  function handleEditLocation(location) {
    console.log("handleEditFood() function called in parent App.js component");
  }

  function handleDeleteLocation(location) {
    console.log("handleDeleteLocation() function called in parent App.js component");
  }

  console.log("foods from App parent component: ", foods);
  console.log("cookouts from App parent component: ", cookouts);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        })
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  // console.log("user variable outside of '/me route call in parent App.js that is available at all times: ", user);
  console.log("user.username available within parent App.js component: ", user.username);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route 
          path="/about" 
          element={<About user={user}/>} 
        />
        <Route 
          path="/cookouts" 
          element={<Cookout cookouts={cookouts} onAddCookout={handleAddCookout} onEditCookout={handleEditCookout} onDeleteCookout={handleDeleteCookout} />}
        />
        <Route 
          path="/foods" 
          element={<Food foods={foods} onAddFood={handleAddFood} onEditFood={handleEditFood} onDeleteFood={handleDeleteFood} />}
        />
        <Route 
          path="/locations" 
          element={<Location locations={locations} onAddLocation={handleAddLocation} onEditLocation={handleEditLocation} onDeleteLocation={handleDeleteLocation} />}
        />
        <Route 
          path="/viewcookouts" 
          element={<ViewCookouts cookouts={cookouts}/>}
        />
      </Routes>
    </>
  );
}

export default App;
