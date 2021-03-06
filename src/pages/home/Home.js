import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];

const APP_ID = '4e9f05eb';
const APP_KEY = '9b904d703fa0d46a88ce1ac63f29f498';

const Home = () => {
  const [query, setQuery] = useState('pizza');
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== '') {
      const result = await axios.get(url);
      //console.log(result);
      if (!result.data.more) {
        alert(`No food with such ${query} `);
      }
      setRecipes(result.data.hits);
      setQuery('');
    } else {
      console.log('Please fill the form');
    }
  };

  // useEffect(() => {
  //   getData();
  // });

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </div>
  );
};

export default Home;