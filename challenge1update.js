const calculator ={
    plus: function(a, b){
        return a + b;
    },

    minus: function(a, b){
        return a - b;
    },

    divide: function(a, b){
        return a / b;
    },

    multiply: function(a, b){
        return a * b;
    },

    squared: function(a, b){
        return a ** b;
    },

};

    const plusResult = calculator.plus(5, 2);
    const minusResult = calculator.minus(plusResult, 2);
    const divideResult = calculator.divide(2, minusResult);
    const multiplyResult = calculator.multiply(divideResult, plusResult);
    const squaredResult = calculator.squared(multiplyResult, minusResult);