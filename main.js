// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let machineWater = 400;
let machineMilk = 540;
let machineBeans = 120;
let machineDisposableCups = 9;
let machineMoney = 550;

let hasFinished = false;
while (!hasFinished) {
    let buyFillTake = input("Write action (buy, fill, take, remaining, exit)\n");

    switch (buyFillTake) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            showMachineContent();
            break;
        case "exit":
            hasFinished = true;
            break;
    }
    console.log();
}


function showMachineContent() {

    console.log(`The coffee machine has:
${machineWater} ml of water
${machineMilk} ml of milk
${machineBeans} g of coffee beans
${machineDisposableCups} disposable cups
$${machineMoney} of money\n`)
}
function buy() {
    console.log();
    let coffeeChoice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n")
    console.log();
    switch (coffeeChoice) {
        case "1":

            if (machineWater >= 250 && machineBeans >= 16 && machineDisposableCups >= 1) {
                machineWater -= 250;
                machineBeans -= 16;
                machineDisposableCups -= 1;
                machineMoney += 4;
                console.log("I have enough resources, making you a coffee!")
            } else if (machineWater < 250) {
                console.log("Sorry, not enough water!");
            } else if (machineBeans < 16) {
                console.log("Sorry, not enough coffee beans");
            }
            break;
        case "2":
            if (machineWater >= 350 && machineMilk >= 75 && machineBeans >= 20 && machineDisposableCups >= 1) {
                machineWater -= 350;
                machineMilk -= 75;
                machineBeans -= 20;
                machineDisposableCups -= 1;
                machineMoney += 7;
                console.log("I have enough resources, making you a coffee!")
            } else if (machineWater < 350) {
                console.log("Sorry, not enough water!");
            } else if (machineMilk < 76) {
                console.log("Sorry, not enough milk!");
            } else if (machineBeans < 20) {
                console.log("Sorry, not enough coffee beans");
            }
            break;
        case "3":
            if (machineWater >= 200 && machineMilk >= 100 && machineBeans >= 12 && machineDisposableCups >= 1) {
                machineWater -= 200;
                machineMilk -= 100;
                machineBeans -= 12;
                machineDisposableCups -= 1;
                machineMoney += 6;
                console.log("I have enough resources, making you a coffee!")
            } else if (machineWater < 200) {
                console.log("Sorry, not enough water!");
            } else if (machineMilk < 100) {
                console.log("Sorry, not enough milk!");
            } else if (machineBeans < 12) {
                console.log("Sorry, not enough coffee beans");
            }
            break;
    }

}

function fill() {
    let addedWater = input("Write how many ml of water you want to add: \n");
    let addedMilk = input("Write how many ml of milk you want to add: \n");
    let addedBeans = input("Write how many grams of coffee beans you want to add: \n");
    let addedDisposableCups = input("Write how many disposable cups you want to add: \n");
    machineWater += Number(addedWater);
    machineMilk += Number(addedMilk);
    machineBeans += Number(addedBeans);
    machineDisposableCups += Number(addedDisposableCups);
    console.log();
}

function take() {
    console.log(`I gave you $${machineMoney}`);
    machineMoney = 0;
    console.log();
}








// const waterPerCup = 200;
// const milkPerCup = 50;
// const beansPerCup = 15;
// const coffeeCupPerCup = 1;
//
// let machineWater = input("Write how many ml of water the coffee machine has:\n");
// let machineMilk = input("Write how many ml of milk the coffee machine has:\n");
// let machineBeans = input("Write how many grams of coffee beans the coffee machine has:\n");
// let cupNum = input("Write how many cups of coffee you will need:\n");
//
// let waterPortion = Math.floor(machineWater / waterPerCup);
// let milkPortion = Math.floor(machineMilk / milkPerCup);
// let beansPortion = Math.floor(machineBeans / beansPerCup);
// let
// let maxNum = Math.min(waterPortion, milkPortion, beansPortion);
// let secondaryMaxNum = maxNum - cupNum;
//
// if (secondaryMaxNum === 0) {
//     console.log("Yes, I can make that amount of coffee");
// } else if (secondaryMaxNum > 0) {
//     console.log(`Yes, I can make that amount of coffee (and even ${secondaryMaxNum} more than that)`);
// } else {
//     console.log(`No, I can make only ${maxNum} cups of coffee`);
// }