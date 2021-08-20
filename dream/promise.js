//promise가 만들어질때, executer라는 콜백함수가 바로 실행됨
//producer역할: 어떤 일을 2초정도 하다가, 성공해서 ellie라는 값을 전달하는 resolve실행한다
const promise = new Promise((resolve, reject) => {
  console.log("doing something");
  setTimeout(() => {
    //resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

//consumer역할: then, catch, finally로 값 받아올수
//then-프로미스가 정상적을 실행되어서 resolve의 반환값을 value라는 param으로 들어옴
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//error handlig
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen}=>달걀`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>계란후라이`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
//받는 value를 다른 함수에 전달시
getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log);
