import axios from "axios";

const recommendCatsTool = async (
  kidsFriendly: boolean,
  appartmentFriendly: boolean,
) => {
  const response = await axios.post(
    "http://localhost:3000/api/cats/recommend",
    {
      kidsFriendly,
      appartmentFriendly,
    },
  );

  return response.data;
};

const getAllCatsTool = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/cats/"
  );

  return response.data;
};

export { getAllCatsTool, recommendCatsTool };