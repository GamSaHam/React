// var -> function
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHello();

// let -> block
function sayHello2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //console.log(i); //error;
}

sayHello2();

// const -> block
const x = 1;
//x = 2;
