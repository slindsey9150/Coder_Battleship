console.log("hello world!");
threeShip = 3;
twoShip = 2;
oneSHip = 1;

/*
firstBattleship will be a 5x5 nested array of numbers. when not occupied by a ship the value will be set to 0, when occupied by
a ship the value will be set to 1. There will be 3 ships. the first ship will have a length of 3 blocks, the second ship will 
have a length of 2  blocks, the third ship will have a length of 1 block.
*/

let firstBattleship = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],

]
console.log("firstBattleship", firstBattleship);

/* 
secondBattleship will be a 5x5 nested array of numbers. when not occupied by a ship the value will be set to 0, when occupied by
a ship the value will be set to 1. There will be 3 ships. the first ship will have a length of 3 blocks, the second ship will 
have a length of 2  blocks, the third ship will have a length of 1 block.
*/

let secondBattleship = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],

]
console.log("secondBattleship", secondBattleship);


/* 
create a function to arrange battleships in array
    3 separate items to place in array
    ships of length 3, 2, and 1
    ships can be placed vertically and horizontally, but not diagonally (yet)
        ship size
        ship orientation
        ship location (starting block and ending block probably)
*/

// function arrangeBattleship(){


// }

/*
create a function to confirm that the battleship arrays have been configured correctly
    if blocks are 3, make sure they're adjacent to 2 other 3 blocks
    if blocks are 2 long, make sure they're adjacent to 1 other 2 block
    block 1 can exist wherever

*/

// function validBattleship(){

// }

/*
shootMissile will be a function to shoot a "missile" at the target battleship. Hitting a valid target will return log of 'hit', missing target will return log of 'miss', mistyping code will return log of 'misfire'
*/

// function shootMissile(space,variable,battleship) {
//     space = battleship[space];
//     if (shootMissile(space,battleship) = true){
//         console.log("It's a hit");
//         battleship.push[space]
//     }
// }



/*
create function that in event of all ships being destroyed returns log 'you won!'
*/