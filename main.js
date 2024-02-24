var numberArr = [ [ [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0] ], [ [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0] ] ];
let sum = [ [0, 0, 0], [0, 0, 0] ];
var currentDice = 0;

function launchDice() {
  currentDice = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
  document.getElementById("dice").innerHTML = currentDice;
}

function col1(i,k) {
	if (numberArr[i][0][k] == 0){
		numberArr[i][0][k] = currentDice;
	} else if (numberArr[i][1][k] == 0) {
		numberArr[i][1][k] = currentDice;
	} else {
		numberArr[i][2][k] = currentDice;
	}
	
  refresh();
  if (i==0){
		updateArrayCheck(i+1,k);
	}
	else {
		updateArrayCheck(i-1,k);
	}
   refresh();
}

function displayUpdatedArrays() {
  numberArr.forEach((column, i) =>
   column.forEach((row, j) => 
    row.forEach((item, k) => {
      document.getElementById("cell" + i + j + k).innerHTML = item;
	 })))
}
function displayUpdatedSums() {
	sum.forEach((column, i) =>
     column.forEach((item, j) => {
	  document.getElementById("sum" + i + j).innerHTML = item;
   }))
}
function updateSums() {
	sum.forEach((column, i) =>
	 column.forEach((item, j) => {
		 
		 if(numberArr[i][0][j] == numberArr[i][1][j] && numberArr[i][0][j] == numberArr[i][2][j]){
			sum[i][j] = numberArr[i][0][j] * 3 * 3;
		 }
		 else if(numberArr[i][0][j] == numberArr[i][1][j]){
			 sum[i][j] = numberArr[i][0][j] * 2 * 2 + numberArr[i][2][j];
		 }
		 else if(numberArr[i][1][j] == numberArr[i][2][j]){
			 sum[i][j] = numberArr[i][1][j] * 2 * 2 + numberArr[i][0][j];
		 }
		 else{
		 sum[i][j] = numberArr[i][0][j] + numberArr[i][1][j] + numberArr[i][2][j];
		 }
	 }))
}

function updateArrayCheck(i,k) {
  for(let it=2; it >= 0; it--){
	  if(numberArr[i][it][k] == currentDice){
		  for(let it2=it ; it2 <= 2; it2++){
		  numberArr[i][it2][k] = numberArr[i][it2+1][k];
		  }
	  }
	  
  }
}

function resetArrays() {
	numberArr.forEach((column, i) =>
   column.forEach((row, j) => 
    row.forEach((item, k) => {
      numberArr[i][j][k] = 0;
	 })))
	 currentDice=0;
	 refresh();
}

function refresh() {
   updateSums();
   displayUpdatedArrays();
   displayUpdatedSums();
   document.getElementById("dice").innerHTML = currentDice;
}