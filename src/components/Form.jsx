import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "../pages/RecipeCard";

const Form = () => {
  const [searchBar, setSearchBar] = useState(null);
  const [meal, setMeal] = useState(null);
  const [data, setData] = useState(null);

  const apiKey = "654e7a3e84b3384f93779196b6c6ec82";
  const appId = "46fc98d5";

  const getApi = () =>
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${appId}&app_key=${apiKey}&mealType=${meal}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.hits);
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-5 flex-wrap">
        <div className="flex gap-1">
          <input
            type="text"
            className="bg-black text-white p-2 rounded-lg"
            placeholder="Search"
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              setMeal(e.target.value);
            }}
            className="rounded-lg bg-black text-white p-1"
          >
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="snack">Snack</option>
            <option value="teatime">Tea Time</option>
          </select>
        </div>
        <button
          onClick={() => getApi()}
          className="rounded-lg bg-black text-white p-2 w-[5rem] m-5"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {data && data.map((item, idx) => <RecipeCard data={item} key={idx} />)}
      </div>
    </>
  );
};

export default Form;
