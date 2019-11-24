//깃3차 푸시 테스트
//깃2차 푸시 테스트





/*
const arr = [1, 2, 3];

arr.forEach(console.log);
//arr.forEach(alert);

*/



/*
// 다음 두 변수와 함수는 myName으로 이름이 같습니다.
var myName; // string
function myName() {
     console.log("Rich");
}
// 함수 선언은 변수명을 덮어 씁니다.
console.log(typeof myName); // function
*/



//ctrl+alt+n 코드러너 실행 단축키인듯..

/*
var myName;

console.log(typeof myName); // undefined
*/


/*
var a;
console.log(typeof a); //undefined
var a=null;
console.log(typeof a); //object
*/


/*
var undefinedVar;//var undefinedVar=undefined; 와 동일!
var nullVar=null;
console.log("undefinedVar==nullVar ::: "+(undefinedVar==nullVar));  //true
console.log("undefinedVar===nullVar ::: "+(undefinedVar===nullVar));//false
//즉 undefined변수와 null할당된 변수는 엄격히는 다른것으로 판별...
*/



/*
console.log("0==='0' ::: "+(0==='0'));  //false
console.log("0=='0' ::: "+(0=='0'));    //true
console.log("0!='0' ::: "+(0!='0'));    //false
console.log("0==false ::: "+(0==false));    //false

*/



console.log("typeof '0' ::: "+(typeof '0')); //string    //"0"도 같은 결과
console.log("typeof 0 ::: "+(typeof 0));    //number
console.log("typeof false ::: "+(typeof false)); //boolean



console.log(0=='0');   //true 
console.log(0==false);  //true
console.log('0'==false); //true


console.log(0==='0');   //false
console.log(0===false);  //false
console.log('0'===false); //false


console.log(0!='0');   //false
console.log(0!=false);  //false
console.log('0'!=false); //false

console.log(0!=='0');   //true 
console.log(0!==false);  //true
console.log('0'!==false); //true
