
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




