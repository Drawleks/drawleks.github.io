let numberArr = [ [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ], [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ] ]

let currentDice = 0

function launchDice() {
  currentDice = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
  document.getElementById("dice").innerHTML = currentDice;
}

function col1(i,k) {
	let j=0
	if (numberArr[i][0][k] == 0){
		numberArr[i][0][k] = currentDice;
	} else if (numberArr[i][1][k] == 0) {
		numberArr[i][1][k] = currentDice;
		j=1
	} else {
		numberArr[i][2][k] = currentDice;
		j=2
	}
	updateArrayCheck(i,j)
  displayUpdatedArrays();
}

function displayUpdatedArrays() {
  numberArr.forEach((column, i) =>
   column.forEach((row, j) => 
    row.forEach((item, k) => {
      document.getElementById("cell" + i + j + k).innerHTML = item;
	 })))
}

function updateArrayCheck(i,j) {
  
}