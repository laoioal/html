// join.html에서 전송한 데이터를
// 페이지에 h1태그로 추가해서 보여주세요

// 유효성검사

	document.getElementById('pwck').onkeyup = function() {
		var ckpw = this.value
		for(var i = 0; i < ckpw.length; i++) {
			if((document.getElementById('pw').value).charAt(i) != ckpw.charAt(i)){
				alert('비밀번호가 다릅니다.')
			}
		}
	}

document.getElementById('jbtn').onclick = function() {
	var sname = document.getElementById('name').value;
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('pw').value;
	var spwck = document.getElementById('pwck').value;
	var smail = document.getElementById('mail').value;
	var stel = document.getElementById('tel').value;
	var sgen = document.getElementById('gen').value;
	

	// 편하게 하는방법 ==> 체크가 필요한 곳에 클래스 이름 부여(ck 부여 가정)
	// document.getElementsByClassName('ck');
	// for(var i = 0; i < el.length; i++) {
	//	var tmp = el[i].value;
	// if(!tmp) {
	//	el[i].focus();
	//	retrun
	//	}
	// }
	if(!sname) {
		document.getElementById('name').focus();
	} else if(!sid) {
		document.getElementById('id').focus();
	} else if(!spw) {
		document.getElementById('pw').focus();
	} else if(!spwck) {
		document.getElementById('pwck').focus();
	} else if(!smail) {
		document.getElementById('mail').focus();
	} else if(!stel) {
		document.getElementById('tel').focus();
	} else if(!sgen) {
		document.getElementById('gen').focus();
	} else if(spw !== spwck){
		alert('비밀번호가 다릅니다.');
	}
	
// 정규식 검사
	// 1. 이름 -> 영문 한글 2글자 이상 10글자이하
		var namePat =/^[a-zA-z]{2,10}&/
		var nameResult = namePat.test(sname);
		if(!nameResult) {
			alert('잘못된 이름입니다.');
			sname = '';
		}
	// 2. 아이디 -> 영문 5글자이상 10글자 이하
	
	// 3. 비밀번호 -> 
	
	// 4. 메일
	
	// 5. 전화번호
	
	
}