import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Mealitem from "./MealItem/Mealitem";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/62f9f8485c146d63ca6f25a2/latest"
      );

      if (!response.ok) {
        throw new Error("Something went wrong ...");
      }
      const responseData = await response.json();
      setMeals(responseData.record.meals);
      setIsLoading(false);
    };
    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles["is-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles["is-error"]}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealList = meals.map((meal) => (
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
