// array function this키워드를 잃지 않는다.

const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.talk();
