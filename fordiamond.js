console.log(`______________________________________________`)
console.log(`Diamond Compressed`)
console.log(`______________________________________________`)

let width =15; // change this number to resize

for (let counter = ((width)*(-1)); counter <= width; counter +=1) {
    console.log(((" ".repeat(Math.abs(counter))+"*".repeat(((Math.abs(Math.abs(counter)-width)*2)+1)))));
}

console.log(`______________________________________________`)
console.log(`Inverse Diamond Compressed`)
console.log(`______________________________________________`)

console.log(`*`.repeat(((width+1)*2)+1));
for (let invCounter = ((width)*(-1)); invCounter <= width; invCounter +=1) {
    console.log("*".repeat((Math.abs(invCounter)+1))+" ".repeat(((Math.abs(Math.abs(invCounter)-width)*2)+1))+"*".repeat((Math.abs(invCounter)+1)));
}
console.log(`*`.repeat(((width+1)*2)+1));



//V3 originals + explanation

/* 
------------------------------------------------------------------------------------
Task 1: Diamond
Things to note: 
-The growing number of stars (+2) and the decreasing spaces (-1)
-Star numbers: 1 3 5 7 9 11 9 7 5 3 1 (all odd)
-The shape is horizontally symmetric:
    -2 loops? One for growing, one for shrinking?
    -V shape: could use absolute value? 
    -In practice "absolute value" means to remove negative sign, and to think of the numbers as positive. 

     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *

------------------------------------------------------------------------------------
Task 2: Inverted Diamond
Things to note: 
-Same as the previous task, but inverted
-First and last row is fully covered with stars
-Space numbers: _0_ 1 3 5 7 5 3 1 _0_ (all odd)
-The shape is symmetric both vertical and horizontal => 
    -Can we just add the same stars to the other side? problem arises, see below
    -_must_ work with odd number of caracters per line (eg: 9), so adding the same twice is problematic


*********
**** ****
***   ***
**     **
*       *
**     **
***   ***
**** ****
*********

------------------------------------------------------------------------------------

Solutions:

console.log(`______________________________________________`)
console.log(`Diamond`)
console.log(`______________________________________________`)

let counter; // main counter
let width =7; // index number which sets the size of the diamond (not real width tho...)
let space; // variable to store how many spaces should be per iteration/line
let star; // variable to store how many stars should be per iteration/line

for (counter = 
        ((width)*(-1)); // counter start position, -1 turns the counter into negative number (important for making absolute value method work)
        counter <= width;  // number of iterations, repeat the loop until the counter reaches specified width
        counter +=1) // counter steps: each iteration advances counter by +1 ()
        {

    space = Math.abs(counter); // number of spaces = the absolute value of the counter (counter starts at -7 this case, absolute value is 7)
    star = ((Math.abs(Math.abs(counter)-width)*2)+1); // we use *2+1 to create a formula to generate a serie of odd numbers. The rest is coming from the table you can find in the bottom.

    console.log(((" ".repeat(space)+"*".repeat(star)))); // .repeat(value) repeats the string in front of it <value> times. this <value> is defined in the "star" and "space" variables above. 
}

console.log(`______________________________________________`)
console.log(`Inverse Diamond`)
console.log(`______________________________________________`)


let invCounter, invSpaceCounter, invStarCounter; 
width= width;

let fullrow = `*`.repeat(((width+1)*2)+1); // this is a lame way to fill the first and the last row with stars. Not DRY and not elegant. If you find a better way, please hit me up!

console.log(fullrow);
for (invCounter = ((width)*(-1)); invCounter <= width; invCounter +=1) {
    invSpaceCounter =((Math.abs(Math.abs(invCounter)-width)*2)+1);   
    invStarCounter =(Math.abs(invCounter)+1); 
    console.log("*".repeat((Math.abs(invCounter)+1)) +" ".repeat(invSpaceCounter)+"*".repeat((Math.abs(invCounter)+1)));
}
console.log(fullrow); 
*/