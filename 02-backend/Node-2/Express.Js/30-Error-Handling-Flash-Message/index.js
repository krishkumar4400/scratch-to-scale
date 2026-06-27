// express-session
// connect-flash

/**
 * npm i express-session
 * npm i connect-flash
 * 
 *  The connect-flash module relies on express-session to function properly. Flash 
 * messages are temporarily stored in the session and then displayed to the 
 * user on the next request, then cleared automatically. This is why you 
 * need both packages.
 * 
 * 
 * 
 * 
 */

// server.js
import session from 'express-session';
import flash from 'connect-flash';

app.use(cookieParser());
app.use(session({
    secret:'my-secret', resave: true, saveUnInitialized: false
}));

app.use(flash());

app.use(verifyAuthMiddleware);

//controller.js
if(userExists) {
    req.flash('errors', "user already exists");
}

export const register = (req,res) => {
    if(req.user) return res.redirect('/');

    return res.render('/views/auth/register', {
        errors: req.flash('errors')
    })
}

// register.ejs
// show errors: 
<% if(errors && errors.length > 0) { %>
    <% errors.forEach((error) => {
        <%error%>
    })