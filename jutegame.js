const ps = require('prompt-sync');
const prompt = ps();
console.log("This is a jute game which i used to play in my childhood");
console.log("Press Enter to play game");
let choice;
const userCard = prompt("Enter a name you prefer for your card:     ");
const values = ['Tiger', 'Lion', 'beer', 'Elephant', 'giraffe', 'chettah', 'Leopard', 'Buffalo', 'zebra'];
values.sort((a, b) => Math.random() - 0.5);
const system1 = values[0];
const system2 = values[1];
const system3 = values[2];
values[3] = userCard;
const ansArray = [];
for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 3; j++)
        ansArray.push(values[i]);
}
const suffle = (check) => {
ansArray.sort((a,b) => Math.random() - 0.5);
check();
}
const check = () => {
    console.log("called");
    if(ansArray[0] == ansArray[1] && ansArray[1] == ansArray[2])
        suffle(check);
    else if(ansArray[3] == ansArray[4] && ansArray[4] == ansArray[5])
        suffle(check);
    else if(ansArray[6] == ansArray[7] && ansArray[7] == ansArray[8])
        suffle(check);
    else if(ansArray[9] == ansArray[10] && ansArray[10] == ansArray[11])
        suffle(check);
}
suffle(check);
console.log(ansArray);
  const userCards = [ansArray[0], ansArray[1], ansArray[2]];
  const system1Cards = [ansArray[3], ansArray[6], ansArray[5]];
  const system2Cards = [ansArray[6], ansArray[7], ansArray[8]];
  const system3Cards = [ansArray[9], ansArray[10], ansArray[11]];
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const userfunc = () => {
    if(userCards[0] == userCards[1] && userCards[1] == userCards[2]) {
        console.log("congragulation dude! you won the game");
        return true;
    }
    let choice;
    do {
        if(choice != undefined)
            console.log("WTF! do you have vision?? if you have then see and enter the correct choice");
            choice = prompt("which card you want to pass? (1 or 2 or 3)");
    }while(choice < 1 || choice > 3)
    system1Cards.push(userCards[choice - 1]);
    userCards.splice(choice - 1, 1);
    return false;
  }
  const onefunc = () => {
    system1Cards.sort();
    if((system1Cards[0] == system1Cards[1] && system1Cards[1] == system1Cards[2]) || (system1Cards[2] == system1Cards[1] && system1Cards[2] == system1Cards[3])) {
        console.log("Sorry dude! System1 won the match");
        return true;
    }
    if(system1Cards[0] == system1Cards[1] || system1Cards[1] == system1Cards[2]) {
        system2Cards.push(system1Cards[3]);
        system1Cards.splice(3, 1);
    }
    else {
        system2Cards.push(system1Cards[0]);
        system1Cards.splice(0, 1);
    }
}
const twofunc = () => {
    system2Cards.sort();
    if((system2Cards[0] == system2Cards[1] && system2Cards[1] == system2Cards[2]) || (system2Cards[2] == system2Cards[1] && system2Cards[2] == system2Cards[3])) {
        console.log("Sorry dude! System2 won the match");
        return true;
    }
    if(system2Cards[0] == system2Cards[1] || system2Cards[1] == system2Cards[2]) {
        system3Cards.push(system2Cards[2]);
        system2Cards.splice(2, 1);
    }
    else {
        system3Cards.push(system2Cards[0]);
        system2Cards.splice(0, 1);
    }
}
const threefunc = () => {
    system3Cards.sort();
    if((system3Cards[0] == system3Cards[1] && system3Cards[1] == system3Cards[2]) || (system3Cards[2] == system3Cards[1] && system3Cards[2] == system3Cards[3])) {
        console.log("Sorry dude! system3 won the match");
        return true;
    }
    if(system3Cards[0] == system3Cards[1] || system3Cards[1] == system3Cards[2]) {
        userCards.push(system3Cards[3]);
        system3Cards.splice(3, 1);
    }
    else {
        userCards.push(system3Cards[0]);
        system3Cards.splice(0, 1);
    }
}
  async function example() {
    console.log('Trying to get and fetch the game');
    await sleep(2000); // 2 second delay
    console.log("Game get started");
    console.log('your cards are:');
    while(true) {
        let a = 1;
        userCards.map((cards) => {
            console.log(`${a++}. ${cards}`);
        })
        if(userfunc())
            break;
        console.log("System one is now playing....");
        await sleep(2000);
        if(onefunc())
            break;
        console.log("System two is now playing....");
        await sleep(2000);
        if(twofunc())
            break;
        console.log("System three is now playing....");
        await sleep(2000);
        if(threefunc())
            break;
    }
  }
  example();