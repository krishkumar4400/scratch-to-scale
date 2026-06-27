import express from "express";

const router = express.Router();

router.get('/about', (req,res) => {
    res.send("This is about page"); 
});

router.get('/contact', (req,res) => {
    res.send("This is contact page"); 
});

router.get('/help', (req,res) => {
    res.send("This is help page");
});

export default router;