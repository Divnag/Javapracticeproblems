function palindrome() {
   var str=prompt("Enter the string to check for Palindrome")
     
     var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
        alert("its Palindrome");
    }
    else {
        alert("not Palindrome");
    }

}








function makeAlphabet() {
    var str = prompt("Enter the string ")
    var arr = str.split(''),
        alpha = arr.sort().join('').replace(/\s+/g, '');
    alert(alpha);
}


///*gives you the area of a triangle if you know all 3 sides*/
function triarea() {
    var side1 = prompt("Enter the side1 ");
    var side2 = prompt("Enter the side2 ");
    var side3 = prompt("Enter the side3 ");
    var p = ((parseInt(side1 )+ parseInt(side2) + parseInt(side3))/2);
    var a = Math.sqrt(p * ((p - side1) * (p - side2) * (p - side3)));
    alert("Area of the triangle = "+ a);
}


function numberguess() {

      x = Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10
    userResponse = prompt('Enter a Number between 1 and 10')

    if (x === userResponse) {
        alert('You guessed Correct')
    }
    else {
        alert('You guessed Wrong')
    }
      alert('Random Number was ' + x)

}

function greaternumber() {
    x = prompt('Enter a number');
    y = prompt('Enter another number')

    if (x > y) {
        alert(x + ' is larger')
    }
    else {
        alert(y + ' is larger')
    }
}




function myfunction(n) {
    var numb = [1, 2, 3, 4, 5, 6, 7];
    var n = 0;
    n = prompt("Enter the index of the array");

         if (n > 0) {
        alert(numb.slice(0, n));
         }
         if (n < 0) {
             alert("[]");
         }
         else {
             alert(numb[0]);
         }
}

