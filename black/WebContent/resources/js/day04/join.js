// 정규표현식
var idpwPat = /^[a-zA-Z0-9]{4,10}$/ // 아이디 비밀번호
var mailPat = /^[a-zA-Z0-9]{4,10}@[a-zA-Z]{2,10}.[a-zA-Z]{2,3}.?[a-zA-Z]{0,2}$/ // 메일
var telPat = /^010-[0-9]{4}-[0-9]{4}$/ // 전화

var pwPat =/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,10}$/;

var genValue = '';
var avtValue = '';

// 아이디체크 이벤트
$('#idck').click(function() {

			var sid = $('#id').val();
			if(!sid) {
				return;
			}

			$.ajax({
				url: '/black/member/idCheck.pink',
				type: 'GET',
				dataType: 'json',
				data: {
					id: sid
					},
				success: function(data) {
					var result = data.result;
					alert(data);
					alert(result);
					if(result == 'OK') {
						// 이 경우는 사용가능한 아이디인 경우이므로
						alert('사용가능한 아이디 입니다.');
					} else {
						alert('### 이미 사용되고 있는 아이디 입니다.');
						$('#id').val('');
					}
				},
				error: function() {
					alert('### 통신에러 ###');
				}

			});
});
$('#hbtn').click(function(){
	$(location).attr('href', '/black/')
});
$('#rbtn').click(function() {
	// $('#frm').reset(); jquery에는 없는 함수
	document.frm.reset();
	$('#patck').css('display', 'none');
	
});

// 성별 클릭시 아바타 조회 이벤트
$('[name="gen"]').click(function() {
	// 성별 속성값
	var avtv = $('[name="gen"]');
	for(var i = 0; i < avtv.length; i++) {
		if(avtv.eq(i).is(':checked')) {
			genValue = avtv.eq(i).val();
		}
		}
		/*	alert(genValue);*/
		if(genValue == 'F') {
			$('[name="avt"]').prop('checked', false);
			$('#avtblock1').css('display', 'none');
			$('#avtblock2').css('display', 'block');
		} else if(genValue == 'M') {
			$('[name="avt"]').prop('checked', false);
			$('#avtblock2').css('display', 'none');
			$('#avtblock1').css('display', 'block');
		}
});

// 비밀번호 체크 안내 이벤트
$('#pwck').keyup(function() {
	$('#patck').css('display', 'block');
	var ppw = $('#pw').val();
	var ppwck = $('#pwck').val();
	if(ppw == ppwck) {
		$('#patck').css('color', 'blue');
		$('#patck').html('* 비밀번호가 일치합니다. *')
	} else {
		$('#patck').css('color', 'red');
		$('#patck').html('# 비밀번호가 일치하지 않습니다. #')
	}
});


// 조인버튼 이벤트
$('#jbtn').click(function() {
	
	var pname = $('#name').val();
	var pid = $('#id').val();
	var ppw = $('#pw').val();
	var ppwck = $('#pwck').val();
	var pmail = $('#mail').val();
	var ptel = $('#tel').val();
	
	
	var idResult = idpwPat.test(pid);
	var pwResult = pwPat.test(ppw);
	var mailResult = mailPat.test(pmail);
	var telResult = telPat.test(ptel);

	// 아바타 속성값
	var el = $('[name="avt"]');
	
	for(var i = 0; i < el.length; i++){
		if(el.eq(i).is(':checked')){
			avtValue = el.eq(i).val();
			
		}
	}
	
	
	if(!pname) {
		alert('이름을 입력해주세요');
		$('#name').focus();
	} else if(!pid){
		alert('아이디를 입력해주세요');
		$('#id').focus();
	} else if(!idResult) {
		alert('잘못된 아이디입니다. 영문, 숫자를 포함하여 4~10 이내로 생성해주세요');
		$('#id').val('');
		$('#id').focus();
	} else if(!ppw){
		alert('비밀번호를 입력해주세요');
		$('#pw').focus();
	} else if(!pwResult) {
		alert('잘못된 비밀번호입니다. 영문 소대문자, 숫자, 특수문자를 포함하여 4~10 이내로 생성해주세요');
		$('#pw').val('');
		$('#pw').focus();
	} else if(!ppwck) {
		alert('비밀번호 확인을 입력하세요');
		$('#pwck').focus();
	} else if(ppw != ppwck) {
		alert('비밀번호가 일치하지 않습니다.');
		$('#pwck').val('');
		$('#pwck').focus();
	} else if(!pmail) {
		alert('메일을 입력해주세요');
		$('#mail').focus();
	} else if(!mailResult) {
		alert('잘못된 메일입니다. 영문, 숫자를 포함하여 4~10 이내로 생성해주세요');
		$('#mail').val('');
		$('#mail').focus();
	} else if(!ptel) {
		alert('전화번호를 입력해주세요');
		$('#tel').focus();
	} else if(!telResult) {
		alert('잘못된 전화번호입니다. 010-0000-0000 형식으로 입력해주세요');
		$('#tel').val('');
		$('#tel').focus();
	} else if (!genValue) {
		alert('성별을 선택해주세요');
	} else if (!avtValue) {
		alert('아바타를 선택해주세요');
	} else {
		$('#frm').submit();
	}


});