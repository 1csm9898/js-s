const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB");

//스키마 생성
const fruitSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "이름을 지정하세요"],
  },
  Rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  Review: String,
});
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

//컬렉션 생성
//Fruit라고 써도 fruits라는 컬렉션이름으로 자동 생성
const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("persons", personSchema);

//컬렉션에 들어갈
const fruit = new Fruit({
  Name: "Mango",
  Rating: 10,
  Review: "I like it !",
});

//fruit.save();

const pineapple = new Fruit({
  Name: "Pineapple",
  Rating: 4,
  Review: "Hard to peel.",
});

const grapes = new Fruit({
  Name: "Grapes",
  Rating: 8,
  Review: "I like them a lot.",
});

const person = new Person({
  name: "Elle",
  age: 24,
  favouriteFruit: pineapple,
});
person.save();

//Model api에 insertMany 함수가 있다.
//첫 매개변수:특정 스키마와 일치하는 객체의 배열
//둘 먀개변수:오류시 이를 기록할 콜백함수
// Fruit.insertMany([pineapple, grapes], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("insertMany 정상적 가동");
//   }
// });

//컬렉션에서 데이터 읽기
//완료 되면 콜백함수 트리거=>에러시, 정상적으로 읽었을때 반환값(과일 컬렉션에 있는 객체들의 베열)
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     //데이터베이스 연결 닫아야함
//     mongoose.connection.close();
//     fruits.forEach(function (fruit) {
//       console.log(fruit.Name);
//     });
//   }
// });

//1쿼리
//2업데이트하고자하는 대상
//3단순히 오류기록 콜백함수
Fruit.updateOne(
  { _id: "6134829f1cbc26fc876ffb17" },
  { Name: "Peach" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      //mongoose.connection.close();
      console.log("문제없이 업데이트됨");
    }
  }
);

Fruit.deleteOne({ _id: "6134829f1cbc26fc876ffb16" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log("문제없이 삭제됨");
  }
});
