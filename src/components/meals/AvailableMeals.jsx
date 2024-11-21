import React,{useEffect, useState} from "react";
import classes from "./availablemeals.module.css";
import Card from "../UI/Card";
import ListMeal from "./ListMeal";



const AvailableMeals = () => {
const [meals, setMeals] = useState([])
const [loader, setLoader] = useState(true)

const fetchData = async()=>{
  try{
  const response = await fetch("https://taks-4bb52-default-rtdb.asia-southeast1.firebasedatabase.app.json")
  const data = await response.json();
  console.log(data)
  setMeals(data)
  setLoader(false)
  
  if(!response.ok){
    throw new Error('not defined')
  }
  }
  catch(error){

    console.log(error)
  }

}
  useEffect(() => {
    fetchData()
  
   
  }, [])
  

  console.log(meals)
  return (
     
    
      <section className={classes.meals}>

        <Card>
          {loader ? <p style={{textAlign:'center'}}>Loading...</p> :  <ul>
            {meals?.map((item) => (
              <ListMeal
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </ul>}
         
        </Card>
      </section>
      
    
  );
};

export default AvailableMeals;
