import React from "react";
import Card from "../UI/Card";
import Mealitem from "./MealItem/Mealitem";

import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Bakhtiari Kebab",
    description: "From the most fresh meats",
    price: 14.26,
  },
  {
    id: "m2",
    name: "Fesenjan",
    description: "Iranian best traditional food",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Joojeh Kebab",
    description: "Highly delicious Kebab for you",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Ash Reshteh",
    description: "Very light meal if you are in a diet",
    price: 8.99,
  },
];

const AvailableMeals = () => { 
  const mealList = DUMMY_MEALS.map((meal) => (
    <Mealitem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
