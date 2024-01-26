function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

console.log(makeLine(3))

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++){
        square += makeLine(size) // makes each row
        if (i !== size - 1) {
            square += "\n";
        }
    }
    return square
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(3,7));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(6));

function makeSpaceLine(numSpaces, numChars) {
    let line = '';
  
    // Add spaces
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
    }
  
    // Add hashes
    for (let i = 0; i < numChars; i++) {
      line += '#';
    }
  
    // Add spaces after hashes
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
    }
  
    return line;
}
  
console.log(makeSpaceLine(2, 5)); // Output: "  #####  "
  

function makeIsoscelesTriangle(height){
    let triangle = '';
    for (let i = 0; i < height; i++){
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0,-1);
}

console.log(makeIsoscelesTriangle(4));

function reverse(s){
    return s.split('').reverse().join('');
}

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height);
    diamond += ('\n' + reverse(diamond.slice()));
    return diamond;
}
console.log(makeDiamond(3));