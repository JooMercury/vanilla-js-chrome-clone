function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age + " years.");
}

sayHello("Mercury", 34);
sayHello("Tom", 3);
sayHello("Jerry", 2);
sayHello("Samara", 29);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
function divide(a, b){
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name:"Mercury",
    sayHello:  function(otherPersonsName){
      console.log("hello! " + otherPersonsName + " nice to meet you!!")
    },
};

console.log(player.name)
player.sayHello("samara");
player.sayHello("Tom");