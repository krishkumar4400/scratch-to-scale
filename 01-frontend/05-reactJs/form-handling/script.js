const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.type);
    console.log("Hello")
});
