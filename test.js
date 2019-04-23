
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
var lastName = "Ham";

// 2.1.3 템플릿 문자열
// html 내에서 ${firstName} 사용하는 것을 말함
console.log(firstName + ", "+ lastName);

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
var lordify = firstname => '켄터베리의 '

consile.log(lordify('GamSa'))

