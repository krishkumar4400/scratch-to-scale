const isAuth = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    console.log(error.message);
  }
};


export default isAuth;