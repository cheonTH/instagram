var regex = /h.t/;
// . : 아무 문자 한글자
regex.test("hat")//true
regex.test("hit")//true
regex.test("hoot")//false

// * : 바로앞의 문자가 0번이상 반복
var regex = /ab*c/
regex.text("abc")//true
regex.test("abbc")//true
regex.test("abbbc")//true

// + : 바로 앞의 문자가 1번 이상 반복
var regex = /ab+c/
regex.text("ac")//false
regex.test("abbc")//true
regex.test("abbbc")//true

// ? : 바로 앞의 문자가 0번 또는 1번만
var regex = /ab?c/
regex.text("ac")//true
regex.test("abc")//true
regex.test("abbc")//false
regex.test("abbbc")//false

//{n} : 바로 앞에 있는 문자를 정확히 n번 반복
var regex = /ab{3}c/
regex.text("abc")//false
regex.test("abbc")//false
regex.test("abbbc")//true

//{n, m} : 바로 앞에 있는 문자를 n번 이상 m번 이하 반복
var regex = /ab{2,4}c/
regex.text("abc")//false
regex.test("abbc")//false
regex.test("abbbc")//true
regex.test("abbbbc")//true
regex.test("abbbbbc")//false

//[문자] : 문자를 포함해야함
//ex) [abc] : 문자열이 a또는 b 또는 c를 포함하면 됨
var regex = /[abc]/
regex.test("a")//true
regex.test("b")//true
regex.test("c")//true
regex.test("ab")//true
regex.test("efg")//false

//[^문자] : 문자를 포함하지 않아야함
//[^abc] : a또는 b또는 를 제외한 문자가 하나라도 있으면 true
//문자열 안에 조건에 맞는 문자가 하나라도 있는지 검사
var regex = /[^abc]/
regex.test("a")//false
regex.test("b")//false
regex.test("c")//false
regex.test("ab")//false
regex.test("abd")//true
regex.test("efg")//true

//[0-9] : 0~9를 포함하고 있는지
// \d와 같은 의미

var regex = /[0-9]/ 
regex.test("0")//true
regex.test("3")//true
regex.test("7")//true
regex.test("123abc")//true
var regex = /^[0-9]$/  // == var regex = /^\d$/
regex.test("123abc")//false

//[a-z] : 소문자 a~z까지 포함
var regex = /[a-z]/
regex.test("a")//true
regex.test("ab")//true
regex.test("abc")//true
regex.test("abc123")//true
var regex = /^[a-z]$/
regex.test("a")//true
regex.test("ab")//false
regex.test("abc")//false

//[A-Z] : 대문자 A~Z까지 포함
//\w : 영어 + 숫자 + 밑줄(_);
var regex = /[a-z]/
regex.test("A")//true
regex.test("AB")//true
regex.test("ABC")//true
regex.test("ABC123")//true
var regex = /^[a-z]$/
regex.test("A")//true
regex.test("AB")//false
regex.test("ABC")//false

//[가-힣] : 가부터 힣까지
var regex = /[가-힣]/
regex.test("가")//true
regex.test("가나")//true
regex.test("가나다")//true
regex.test("가나다123")//true
var regex = /^[a-z]$/
regex.test("가")//true
regex.test("가나")//false
regex.test("가나다")//false

//한글 이름에 대한 유효성 검사
//한글로만 이루어진 문자열
//길이는 2 ~ 5
var regex = /^[가-힣]{2,5}$/

//영어 소문자 숫자만 허용하는 아이디
//길이는 4 ~ 12자
var regex = /^[a-z0-9]{4,12}$/

//이메일 형식 검사
//username@domain.com 형태
//username은 영문 숫자/./_포함가능
//domain은 영문/숫자
//com은 영문/숫자,  .com 또는 .net

var email = username && /^[@]$/ && domain && com;

var regex = /^[\w.]+@[a-zA-Z0-9]+\.(com | net)$/

//휴대폰 번호 검사
//010으로 시작
//중간 마지막 자리 숫자는 4자리
//전체 형식 => 010-xxxx-xxxx
var regex = /^(010)\-[0-9]{4}\-[0-9]{4}$/ // == var regex = /^(010)-\d{4}-\d{4}$/

//그룹화
var regex = /(ha)+/
regex.test("hahaha")//true
regex.test("haha")//true
regex.test("ha")//true
regex.test("hahah")//true

// | : or의 의미 그룹화랑 같이 사용
var regex = /I (like|love) you/
regex.test("I love you")//true

//그룹에서 값을 빼오는 것이 가능
//match()
let str = "price : $300"
var result = str.match(/\$(\d+)/)
//result[0] : 정규식에 매칭된 전체 문자열
//result[1] : 첫번째 그룹에 해당하는 값