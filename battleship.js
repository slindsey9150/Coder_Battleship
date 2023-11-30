console.log("hello world!");

variable = 1 
// firstBattleship will be a 5x5 nested array of numbers. when not occupied by a ship the value will be set to 0, when occupied by
// a ship the value will be set to 1. There will be 3 ships. the first ship will have a length of 3 blocks, the second ship will 
//have a length of 2  blocks, the third ship will have a length of 1 block.

let firstBattleship = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],

]
console.log("firstBattleship", firstBattleship);
// secondBattleship will be a 5x5 nested array of numbers. when not occupied by a ship the value will be set to 0, when occupied by
// a ship the value will be set to 1. There will be 3 ships. the first ship will have a length of 3 blocks, the second ship will 
//have a length of 2  blocks, the third ship will have a length of 1 block.
let secondBattleship = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],

]
/*
shootMissile will be a function to shoot a "missile" at the 
*/
function shootMissile(space,variable,battleship) {
    space = battleship[space];
    if (shootMissile(space,battleship) = true){
        console.log("It's a hit");
        battleship.push[space]
    }
}