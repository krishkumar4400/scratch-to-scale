// Manual way to validate environment variable: 
// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);


// Using ZOD library:
import {z} from "zod";
import { ZodError } from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 800;

// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);


// Handling error:
// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 800;

// try {
//     const parsedUserAge = ageSchema.parse(userAge);
//     console.log(parsedUserAge);
// } catch (error) {
//     // instanceof is a javascript operator used to check if an object is an instance of a specific class or constructor
//     if(error instanceof ZodError) {
//         // console.log(error);
//         console.log(error.issues[0].message);
//     } else{
//         console.error("Unexpected Error: ", error);
//     }
// }


// Another easiest way :
// const ageSchema = z.number().min(20).max(50).int();
// const userAge = "30";

// const {data,error,success} = ageSchema.safeParse(userAge);

// console.log(data); // 30
// console.log(error); // undefined
// console.log(success); // true

// zod is not only validating it is also parsing or converting or transforming the info (like: string "10" to integer 10, trim also, toUpperCase also etc) so that's why it is 

// validating port number of environment variable:

// coerce: converts string to number
// number: only validate if it is number not converts from str to int.
const portSchema = z.coerce.number().min(1).max(65535).default(3000);

export const PORT = portSchema.parse(process.env.PORT);