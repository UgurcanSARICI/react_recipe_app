import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-5 w-[30rem] text-center">
      <p className="text-xl mb-5">{data.recipe.label}</p>
      <img
        src={data.recipe.image}
        alt="pizza"
        width="200px"
        className="rounded-lg"
      />
      <button
        onClick={() => navigate("/details", { state: data.recipe })}
        className="rounded-lg bg-black text-white p-1 w-[5rem] mt-2"
      >
        Details
      </button>
    </div>
  );
};

export default RecipeCard;
