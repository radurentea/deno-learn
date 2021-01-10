const denode = (input)=>{
    if (input.toLowerCase() === 'node') {
        return input.split("").sort().join("");
    }
    return input;
};
console.log("Welcome to Deno 🦕");
console.log(denode("node"));
