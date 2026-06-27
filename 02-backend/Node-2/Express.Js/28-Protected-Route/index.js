app.use(verifyAuthentication);

app.use((req,res,next) => {
    req.locals.user = req.user;
    return next();
});

// req.locals:
    // - How it works:
        // - This middleware runs on every request before reaching the route handlers.
        // - res.locals is an object that persists throughout the request - response cycle.
        // - If req.user exists (typically from authentication, like passport.js), it is stored in res.locals.user
        // - views (like EJS ,oug or handlers) can directly access user without manually passing it in every route.


// protected routes
export const dashboard = (req,res) => {
    if(!req.user) {
        return res.send("Not Logged In");
    }

    return res.send(`<h1>Hey ${req.user.name} - ${req.user.email} </h1>`);
};