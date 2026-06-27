import pkg from "./generated/prisma/index.js"; // relative path
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
  // create (insert data)
  // single user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "krish kumar",
  //       email: "krishkumarbgp23@gmail.com",
  //     },
  //   });
  //   console.log(user);
  //Multiple User
  //   const user = await prisma.user.createMany({
  //     data: [
  //       { name: "ankit", email: "ankit23@gmail.com" },
  //       { name: "sami", email: "sami23@gmail.com" },
  //       { name: "raj", email: "raj23@gmail.com" },
  //       { name: "aman", email: "aman23@gmail.com" },
  //       { name: "krish kumar", email: "krishkumarbgp202223@gmail.com" },
  //     ],
  //   });
  //   console.log(user); // { count: 5 }

  //   // Read (Fetach data)
  //   // Get All users
  //   const users = await prisma.user.findMany();
  //   console.log(users);

  // // Get a single user by id
  // const user = await prisma.user.findUnique({
  //     where: {id:19}
  // });
  // console.log(user);
  // };

  // find first
  //   const users = await prisma.user.findFirst({
  //     where: { name: "krish kumar" },
  //   });
  //   console.log(users);
  //   // find first
  //   const users1 = await prisma.user.findFirst();
  //   console.log(users1);

  // note: unique function requires only unique fields

  //   // Get users with filtering
  //   const users = await prisma.user.findMany({
  //     where: {name: "krish kumar"}
  //   });
  //   console.log(users);

  // update (modify data)
  // update one user
  // mainly requires or works with unique field
  // const updatedUser = await prisma.user.update({
  //     where: {id: 15},
  //     data: {
  //         name: "Ashish Kumar"
  //     }
  // });
  // console.log(updatedUser);

  // update multiple rows
  //   const updatedUser = await prisma.user.updateMany({
  //     where: { name: "krish kumar" },
  //     data: {
  //       name: "test@test.com",
  //     },
  //   });
  //   console.log(updatedUser); //{ count: 5 }

  // Delete (Remove Data)
  // Delete One User

  // const deletedUser = await prisma.user.deleteMany({
  //   where: { name: "test@test.com" }
  // });
  // console.log(deletedUser);

  //delete single user
//   const deletedUser = await prisma.user.delete({
//     where: { id: 6 },
//   });

//   console.log(deletedUser);
  /**
 * {
  id: 6,
  email: 'sami@gmail.com',
  name: 'sami',
  createdAt: 2025-09-18T18:31:42.536Z,
  updatedAt: 2025-09-18T18:31:42.536Z
}
 */

await prisma.user.deleteMany({
    where:[
        {
            id:5
        },
        {
            id:6
        },
        {
            id:7
        },
        {
            id:8
        }
    ]
});


}

main()
  .catch((error) => console.error(error.message))
  .finally(async () => {
    await prisma.$disconnect();
  });

// prisma generate -> updates the prisma client so you can use the latest schema in your application
