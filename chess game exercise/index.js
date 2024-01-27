/*This program defines a function createChessboard that takes the size of the chessboard as an argument and generates the corresponding pattern. The main loop uses the row and column indices to determine whether to add a space or a "#" character at each position. The result is then printed using console.log.

You can change the size variable to any desired value, and the program will generate a chessboard of the specified width and height.
*/

function createChessboard(size){
    let chessboard = "";

    //using row indices for the position of the board.
    for(let row = 0; row < size; row++){
        for(let col = 0; col < size; col++){
            if((row + col) % 2 === 0){
                chessboard += " "; // add space for even numbers
            }
            else{
                chessboard += "#"; //add # character for odd numbers
            }
        }
        chessboard += "\n";
    }
    return chessboard;
}

const size = 8;
console.log(createChessboard(size));