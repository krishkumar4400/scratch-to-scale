import jwt from "jsonwebtoken";


export const verifyAuthentication = (req,res,next) => {
    const token = req.cookies.userId;

    if(!token) {
        req.user = null;
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, secret_key);
        if(!decodedToken) {
            req.user = null;
        }
        req.user = decodedToken;
        return next();
    } catch (error) {
        req.user = null;
    }
    return next();
};


// Notes:
/**
 * You can add any property to req, but:
 *  - Avoid overwriting existing properties
 *  - Use req.user for authentication 
 *  - Group custom properties under req.custom if needed.
 *  - Keep the data lightweight
 */