function squaresOfMax(a, b, c) {

    if(a>c && b>c){
        return (a*a)+(b*b);
    }
    if(b>=a && c>a){
        return (b*b)+(c*c);
    }
    if(a>=b && c>=b){
        return (a*a)+(c*c);
    }

  // Write a function that takes three numbers and returns
  // sum of squares of two largest
}

function drawTriangle() {

    var i = 0;
    var k = 0;
    var string = "";
    while(i < 8){
        while(k < i){
            string+='#';
            k++;
        }
		string+='\n';
        k=0;
        i++;
    }
    console.log(string);

  // Write a loop that makes seven calls to console.log to output the following triangle:
  //
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
}

function fizzBuzz() {

    for(var i=1; i<=100; i++){
        if(!(i%3)){
            console.log('Fizz');
        }
        if(!(i%5)){
            console.log('Buzz');
        }
        if((!(i%3) && !(i%5))){
            console.log('FizzBuzz');
        }
        console.log(i);
    }

  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).
}

function chessBoard(size) {
	
    if(size === 0){return "";}
    if(size === 1){return " ";}

    var sizeInner = size || 8;
    var string = "";
    var flag = true;

    for(var i = 0; i < sizeInner; i++){
        var firstFlag = flag;
//        debugger
        for(var j=0; j<sizeInner; j++){
            if(flag){
                string +=" ";
                flag = false;
            }else{
                string +='#';
                flag = true;
            }
        }
        string += '\n';
        flag = !firstFlag;
    }

    return string;
 
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.
}

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
