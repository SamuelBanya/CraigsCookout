import React from "react";
import CreateFoodForm from "./CreateFoodForm";
import EditFoodForm from "./EditFoodForm";

function Food({ onAddFood, foodOptions, setFoodOptions, foodId, setFoodId, onEditFood, onDeleteFood, cookouts, onChooseCookout, chosenCookout }) {
    return (
        <div>
            <h1>Foods</h1>
            <CreateFoodForm 
                onAddFood={onAddFood} 
                cookouts={cookouts} onChooseCookout={onChooseCookout} chosenCookout={chosenCookout}
            />
            <hr />
            <EditFoodForm 
                foodOptions={foodOptions} setFoodOptions={setFoodOptions} foodId={foodId} setFoodId={setFoodId}
                onEditFood={onEditFood} onDeleteFood={onDeleteFood} 
                cookouts={cookouts} onChooseCookout={onChooseCookout} chosenCookout={chosenCookout}
            />
        </div>
    )
}

export default Food;