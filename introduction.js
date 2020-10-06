
console.log("hello world!")

for (let index = 0; index < 10; index++) {
    console.log(typeof(index + 123), ", index + 1 = ", index + 1)
}

function testFunction(arg) {
    const variable = 123
    console.log("hello and welcome to my js program")
    return "nothing"
}

var x = testFunction(123)
if (x == "nothing") {
    console.log("nothing was returned")
}