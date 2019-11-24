//zad 2

var Calculator = function(){
    this.operations = [];
}
Calculator.prototype.add = function(num1, num2){
    let result = num1 + num2;
    this.operations.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}
Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2;
    this.operations.push(`multiplied ${num1} by ${num2} got ${result}`);
    return result;
}
Calculator.prototype.substract = function(num1, num2){
    let result = num1 - num2;
    this.operations.push(`substracted ${num1} from ${num2} got ${result}`);
    return result;
}
Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2;
    this.operations.push(`divived ${num1} by ${num2} got ${result}`);
    return result;
}
Calculator.prototype.printOperations = function(){
    console.table(this.operations)
}
Calculator.prototype.clearOperations = function() {
    this.historyOperations = [];
    this.historyOperations.length = 0;
}