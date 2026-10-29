import axios from "axios";

const recommendCatsTool = async (
  kidsFriendly: boolean,
  appartmentFriendly: boolean,
) => {
  const response = await axios.post("http://localhost:3000/api/ai/recommend", {
    kidsFriendly,
    appartmentFriendly,
  });

  

};
