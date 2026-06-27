import { hostname } from "os";
import path from "path";


export const getRegisterPage = async (req,res) => {
    return res.render('auth/register');
}

export const getLoginPage = async (req,res) => {
   return res.render('./auth/login');
}


//setting cookies-
export const postLogin = async (req,res) => {
    try {
        res.setHeader('Set-Cookie', "isLoggedIn==true; path=/");
        res.redirect('/');
    } catch (error) {
        console.error(error.message)
    }
}
export const postLogin2 = async (req,res) => {
    try {
        // res.setHeader('Set-Cookie', "isLoggedIn==true; path=/");
        // res.setHeader('Set-Cookie', "isLoggedIn==true; path=/login");
        res.cookie("isLoggedIn", true);
        res.redirect('/');
    } catch (error) {
        console.error(error.message)
    }
}

// authorization - check if a user is logged in or not via cookies
export const getPage = async (req,res) => {
try {
    // const isLoggedIn = req.headers.cookie;
    // isLoggedIn = Boolean(isLoggedIn?.split(';')?.find((cookie) => cookie.trim().startsWith('isLoggedIn'))?.split('=')[1]);
    
    const isLoggedIn = res.cookies.isLoggedIn;
    console.log("IsLoggedIn: ", isLoggedIn);

    return res.render("index", {
        host:req.host,
        isLoggedIn
    });

} catch (error) {
    console.error(error.message);
    
}
}

//Do you Need to set path=/ Manually?
// cookie-parser and express automatically set the path to / by default

