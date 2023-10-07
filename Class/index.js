//Kiem tra so nguyen to

const isPrime = (num) => {
  for (let i = 2, sqroot = Math.sqrt(num); i <= sqroot; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

//So nguyen to trong khoang

const isPrimeRange = (a, b) => {
  let low, high;
  if (a < b) {
    low = a;
    high = b;
  } else {
    low = b;
    high = a;
  }
  for (let i = low; i <= high; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

//20 so nguyen to dau tien
const first20Prime = () => {
  let count = 0;
  while (count < 20) {
    let i = 1;
    if (isPrime(i)) {
      console.log(i);
      count++;
    }
    i++;
  }
};
//fibbonaci < 50
const fibbonaci = () => {
  let n1 = 0;
  let n2 = 1;
  nextNum = n1 + n2;
  while (nextNum <= 50) {
    console.log(nextNum);
    n1 = n2;
    n2 = nextNum;
    nextNum = n1 + n2;
  }
};

array = [1, 5, 9, 6, 7, 2]

const smallest = (array) => {
  let min = array[0];
  for (let i = 1; i <array.length; i++){
    if (array[i] < min ){
      min = array[i]
    }
  }
  console.log("To Minh Hoang")
  return min
}
