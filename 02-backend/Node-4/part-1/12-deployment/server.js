/** render / aws
 * git init
 * git add .
 * git commit -m "initial commit"
 * git branch -M main
 * git remote add origin url
 * git push -u origin main
 */

//  package.json:
// "scripts": {
//     "build": "npm install", or "npm run build"
//     "start": "node server.js" or "npm run start"
// }

// openssl command for generate strong JWT_SECRET:- openssl rand -hex 64

/*

(base) PS C:\Users\krish> openssl rand -hex 64
4bbad404d678d61341538f52447f2f05d709ee3017750abbacc3bfebed7acd07f9919daa845f791d9a15ba751af39720fa511a0e065a4085f5f35bddba2e5366
(base) PS C:\Users\krish>

*/


/** vercel
 * 1. create vercel.json file in root directory which will tell the configuration of our file
 * 2.
 * 
 */

// // vercel.json:- 

//     {
//         "version": 2, // this version will tell that we are using version 2 of this vercel configuration file
//         "builds": [
//             {
//                 "src": "server.js", // tell entry file of our application
//                 "use": "@vercel/node" // telling vercel i am using node
//             }
//         ],
//         "routes": [
//             "src": "/(.*)", // this will match all the incoming request that we will be doing after deploying the application
//             "dest": "server.js"
//         ]
//     }

// in package.json the build command in script is optional because vercel automatically run the build command

