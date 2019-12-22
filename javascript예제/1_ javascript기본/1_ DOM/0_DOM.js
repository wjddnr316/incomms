document.children
//document객체의 자식
document.children[0]
//document의 0번째 children
document.children[0].children[0]
//document0번째children에0번째children
document.children[0].children[1]
//document0번째children에1번째children
document.childrenp[0].children[1].parentNode
//document0번째자식에1번째자식의부모
head = document.children[0].childrenp[0]
//head는 document 0번인덱스 자식의 0번인덱스 자식
head.firstElementChild
//head의 첫번째 자식 엘리먼트
head.lastElementChild
//head의 마지막 자식 엘리먼트
head.children[1]
//head 1번인덱스 차일드 즉 2번째 자식 엘리먼트
link = head.children[1]
//link = head의1번인덱스 자식으로 지정
link.nextElementSibling
//link의 다음형제요소
link.previousElementSibling
//link의 이전형제요소

document.getElementById("");
//단일 엘리먼트 선택하는 메소드
document.getElementsByClassName("");
//문서중 다중 엘리먼트를 선택하는 메소드
document.getElementsByTagName("");
//문서중 테그"" 인 엘리먼트를 선택하는 메소드(다중)
document.getElementsByName("")
//문서중 input이나 다른 name값을 가지고 있는 엘리먼트에서 name 값을 선택하는 메소드(다중)

var what = document.getElementById("whatthe");
//변수what은 id값whatthe로 지정
what.innerText
//#whatthe의 텍스트만 빼와라
what.innerHTML
//#whatthe의HTML구조 가져와라
what.innerText = "안녕"
//#whatthe의 내용을 안녕으로 바꿔라 문자열로만 인식하기때문에테그 써도 그대로 나옴
what.innerHTML = "<h1>안녕</h1>"
//#whatthe의 HTML을 다 무시하고 <h1>안녕</h1>으로 바꿔라 HTML<h1>을 인식하고 그대로 적용시킴
what.style.color = "blue"
//#whatthe의 css컬러를 blue로 바꿈
what.style.fontsize="20px"
//#whatthe의 폰트사이즈를 20px로 바꿈
what.src
//what의 소스를 가져옴 img같은경우 소스가 있지만 일반tag는 소스가 없어 가져오지 못함
what.getAttribute("src")
//what의소스src의 값을 가져와라
what.setAttribute("src","http://www.naver.com");
//what의소스값을 www.naver.com으로 변경

document.querySelector("#what");
//id값 what을 가진 엘리먼트를 가져온다 *html css에 셀렉터를 이용한다 d조건성립이 여러개가 이루어져도 첫번째거만 가져옴
document.querySelectorAll(".what")
//class값 what을 가진 엘리먼트들을 가져온다 *조건에 부합하는 엘리먼트 모두 다 가져옴
    document.querySelectorAll(".what,.whatthe")
    //what이랑whatthe의 클레스를 가져옴

document.creatElement("hr");
//hr테그 엘리먼트를 추가함

var hr = document.creatElement("hr"); //hr = hr테그생성하라 변수지정
var hr2 = hr.cloneNode; //hr2 = hr복사하라 변수지정

document.body.appendChild(hr);
//body에 hr 엘리먼트를 추가한다 *body에 자식요소로 넣는거기 때문에 body안 가장 아래 쪽에 생성 추가할 element를 인자로 받아 호출된 element의 자식으로 인자를 추가함
document.body.insertBefore(hr, document.body.children[1]);
//body안 자식요소중 1번 index 즉 2번째 자식 이전에 hr테그를 생성한다. insertBefore 이전에 삽입
document.body.removeChild(hr2);
//body 자식요소중 hr2의 변수값을 가진 엘리먼트를 삭제한다.
document.body.removeChild(document.body.children[1]);
//body 자식요소중 1번index즉 2번째 자식을 삭제한다

function callback(){
    console.log("callback function is called");
    //callback 을 수행할때 "callback function is called"을 수행하라
}
setTimeout( callback, 3000 ); 
//3초가 지나면 callback을 수행시켜라
setInterval( callback, 5000 ); 
//5초마다 callback을 수행시켜라  
clearTimeout(timeID);
clearInterval(intervalID); 
//interval(timeID)에 해당하는 실행문 중지


/*             window객체 이동              */

window.open(url, 윈도우 name, 옵션);
//팝업창 열기
moveTo(x,y) //절대좌표로 이동
moveBy(x,y) //상대좌표로 이동
resizeTo(),resizeBy() //윈도우 크기 변경
focus() //포커스이동
scrollTo(),scrollBy() //스크롤 위치 이동

/*페이지이동*/
location.href="이동할주소";
location.replace("이동할 주소");

/*                이벤트 처리                  */

onclick:클릭이벤트
onload: 웹페이지 진입했을때
onchange:값이 바뀔때
onmouseover:마우스커서가 올라갈때
onmouseout:마우스 커서가 나갈때
onfocus: 포커스를 얻을때 (인풋에서 키가 깜빡일때)
onblur:포커스를 잃을때
onkeydown: 키입력을 할때

