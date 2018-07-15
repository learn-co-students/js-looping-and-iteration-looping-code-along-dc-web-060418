// Code your solutions in this file


function printBadges(employees){
  for(let i = 0; i < employees.length; i++){
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

function flipCoin(){
  const coin = [1,2]
  return coin[Math.floor(Math.random() * coin.length)];
}

function tailsNeverFails(){
  let i = 0;
  while(flipCoin() > 1){
    i++
  };
  return `You got ${i} tails in a row!`;
}
