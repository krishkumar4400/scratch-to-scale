import exprees from 'express';
// import 'dotenv/config';

const app = exprees();

app.get("/", (req,res) => {
    res.send("Hello Express"); 
});

// const port = 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`); 
});

/**
 * setting environment variable:
 * 
 * - IN powersell
 * $env:PORT=3000
 * 
 * in command prompt:
 * set PORT=3000
 * 
 * check existing saved port :
 * echo $env:PORT
 * 
 * deleting those saved port:
 * Remove-Item env:\port
 */