
// 2.1.1 const
// 상수화
const pizza = true;
//pizza = false;
console.log(pizza);


// 2.1.2 let
// let 을 통한 글로벌 변수 보호
var topic = "자바스키립트";

if(topic){

	let topic = "리액트";

	console.log('블록', topic);
}

console.log('글로벌', topic);

var firstName = "GamSa";

// 2.1.3 템플릿 문자열
// html 내에서 ${firstName} 사용하는 것을 말함
console.log('${firstName}');

// 2.1.4 디폴트 파리미터
var defaultPerson = {
	name:{
		 first: "성원"
		,last: "오"

	}
	,favActivity: "테니스"
}

function logActivity(p = defaultPerson){
	console.log(p.favActivity);
}

logActivity(defaultPerson);

// 2.2 화살표 함수
// function return 문을 줄였다.
var lordify = firstname => '켄터베리의 ' + firstname;

console.log(lordify('GamSa'));

/// 화살표 함수를 쓰면 this가 유지 된다. 
/*
var gangwon = {
	 resorts: ["용평", "평창", "강촌"]
	,print : function(delay=1000){
		setTimeout(function(){

			console.log(this.resorts.join(","))
		}, delay)

	}
}
*/

/*
var gangwon = {
	 resorts: ["용평", "평창", "강촌"]
	,print : function(delay=1000){
		setTimeout(() =>{

			console.log(this.resorts.join(","))
		}, delay)


	}

}

gangwon.print();
*/

// 2.4.1 구조 분해를 사용한 타입
var sandwich = {
	 bread : "더치 크런치"
	,meat: "참치"
};

var {bread, meat} = sandwich;

meat = "닭고기"
console.log(bread + " " + meat);
console.log(sandwich.bread + " " + sandwich.meat);


var lordify = ({firstname}) => {

	console.log('켄터베리의 ' + firstname);
}

/*
var lordify = (regularPerson) => {

	console.log('켄터베리의 ' + regularPerson.firstname);
}*/

var regularPerson = {
	firstname : "현석"
}

lordify(regularPerson);

var [firstResort,secondResort] = ["용평", "평창", "강촌"];

console.log(firstResort);
console.log(secondResort);

// 2.4.2 객체 리터럴 개선


var name = "탈락";
var elevation = 9738;

var funHike = {name, elevation};

console.log(funHike);

/*
const skier = {
	name
	,sound
	,powerYell(){
		let yell = this.sound.toUpperCase();
		console.log(yell);

	}
	,speed(mph){
		this.speed = mph;
		console.log(mph);
	}


}


console.log(skier);
*/

//2.4.3. 스프레드 연산자
var peaks = [1,2,3,4];
var seoraksan = [...peaks];

console.log(seoraksan.join(', '));

peaks.reverse();

console.log(peaks);

// 2.5. 프라미스
/*
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
*/

/*
function getData() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function (err) {
  console.log(err); // Error: Request is failed
});
*/

// 2.6 클레스
class Vacation{

	constructor(destination, length){

		this.destination = destination;
		this.length = length;

	}

	print(){
		console.log(this.destination);
	}

}

const trip = new Vacation("칠레 산디아고", 7);

trip.print();

class Expedition extends Vacation{

	constructor(destination, length, gear){
		super(destination, length);
		this.gear = gear;

	}

	print(){
		console.log(this.destination + ", " + this.gear);
	}

}

new Expedition("칠레 산디아고", 7, ["선글라스", "카메라"]).print();

//2.7 ES6 모듈 - 바벨에서 테스팅 가능
/*
import {log} from './text-helper.js';

log();
*/

/*
//2.8 커먼 js
const {callback} = require('./text-helper2.js');
*/












