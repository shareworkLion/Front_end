# Front_end

## header / footer

(js) 검색 창에 검색어 입력 후 검색 버튼 누르기/Enter 키 누르면 검색어 콘솔 창에 띄우기

(back) 검색 키워드 가져가기

## main page

- index.html
- main.css

(js) 갤러리 넘어가기 버튼/Pagination 넘어가기 구현 완료

(back) 갤러리 이미지 불러오기

## best slip awards

- /html/bestAwards.html
- /css/bestAwards.css

(js) 갤러리 넘어가기 버튼/Pagination 넘어가기 구현 완료

(back) 갤러리 이미지 불러오기

## about us

- /html/aboutUus.html
- /css/aboutUs.css
  [완료] 물결 배경 적용

## 개인 slip page

- /html/mySlip.html
- /css/mySlip.css

(js) 수정 버튼 hover, 클릭 시 수정 페이지로 이동

## 다른 유저의 slip page + 댓글/대댓글

- /html/otherUserSlip.html
- /html/otherUserSlip.css

(js) 팔로우/스크랩/좋아요 버튼 hover, 클릭 구현

(js) 코멘트 버튼 클릭 시 댓글 창 -> 대댓글 창 생성

(back) 코멘트 받아오기

(추가) 댓글 개수 기반 index(pagination), db에서 댓글 불러오기

## slip page 댓글/대댓글

- /html/slipComments.html
- /css/slipComments.css

[수정사항] 다른 유저의 slip page로 병합됨(다른 페이지에 사용하기 위한 페이지)

## 마이페이지

### 1. 마이페이지 메인화면

- /html/myPage1.html
- /css/myPage1.css

### 2. 마이페이지 이름 변경화면

- /html/myPage2.html
- /css/myPage2.css

(js) 활동할 이름 입력 후 버튼 클릭하면 변경된 이름 출력

(back) 동일한 이름 존재할 경우 밑에 확인 메시지 띄우기

### 3. 마이페이지 MBTI 변경화면

- /html/myPage3.html
- /css/myPage3.css

(js) MBTI 버튼 클릭 시 무지개색 배경으로 변경

(js) 같은 유형끼리 중복 선택 불가

(js) 바꾸기 버튼 클릭 시 페이지 새로고침

(back) 변경된 MBTI 저장하고, 페이지 새로고침될 때 변경된 MBTI 가져와서 출력하기

### 4. 마이페이지 비밀번호 변경화면

- /html/myPage4.html
- /css/myPage4.css

(js) 폼 입력한 값 받아오기 완료

(js) 현재 pwd 틀릴 경우 확인 메시지 띄우기

(js) changePWD 조건 걸기

(js) changePWD <> checkPWD인 경우 확인 메시지 띄우기

(back) 현재 비밀번호 확인

## 로그인 페이지

- /html/login.html
- /css/sigin.css

## 회원가입 페이지

### 기타 (수정 완료)

- /html/header.html
- /html/footer.html

위의 두 파일은 헤더와 푸터 내용 들어있는 파일
추후 페이지 추가 시 복붙하기

# [이미지 파일 경로]

- /img - 버튼을 제외한 이미지들
- /img/Button - 버튼 하얀 바탕
- /img/Button/Button_reverse - 버튼 검은 바탕
- /img/Button_MBTI - MBTI 버튼 하얀 바탕
- /img/Button_MBTI_RAINBOW - MBTI 버튼 무지개색 바탕
- /img/Button/Hash - 해시태그 검은 바탕
- /img/Button/Hash_White - 해시태그 하얀 바탕

[추가]
겹치는 이미지 통일하기
