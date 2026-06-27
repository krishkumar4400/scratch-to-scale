import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello Express"); 
});

app.get('/profile/:user/:id', (req,res) => {
    console.log(req.params);
    const username = req.params.user;
    const userId = req.params.id;
    res.send(`<h1>Hey i am ${username} and my user id is: ${userId}</h1>`)
    const{user,id} = req.params;
    console.log({user,id});
    // res.json({
    //     message:"Data Received",
    //     user,id,
    //     success:true 
    // });
});

app.get('/profile/:username/article/:slug', (req,res) => {
    const {username,slug} = req.params;
    const formatedSlug = req.params.slug.replace(/-/g, " ")
    // console.log({username,slug})
    console.log({username,formatedSlug})
    // res.send({
    //     username,slug
    // });
    res.json({
        message:"Data Received",
        username,
        formatedSlug,
        success:true
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running om http://localhost:${port}`); 
});
