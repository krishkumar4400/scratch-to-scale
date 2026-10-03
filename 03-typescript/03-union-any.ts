// union

let subs: number | string = 10;
subs = '1M';

console.log(subs);

let apiResponse: "pending" | "success" | "error" = "pending";
// apiResponse = "done"; -> error