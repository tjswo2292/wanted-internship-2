<h1>Wanted Front-End Internship Mission[1]</h1>

# 기술스택

### main

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### state management

![Redux](https://img.shields.io/badge/redux--toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)

### style

![Styled-Components](https://img.shields.io/badge/styled--components%20CSS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

# 주요기능

## API 호출별로 로컬 캐싱 구현 & 캐싱 데이터 expire time 구현

<details>
<summary>코드 이미지</summary>
<div markdown="1">

<img width="566" alt="Screenshot 2023-09-17 at 14 50 53" src="https://github.com/tjswo2292/wanted-internship-1/assets/55657931/b51eb354-08ab-4a04-8e15-aa360d1131a1">

</div>
</details>

<details>
<summary>코드 Description</summary>
<div markdown="1">

![Screenshot 2023-09-16 at 22 12 29](https://github.com/tjswo2292/wanted-internship-2/assets/55657931/497a93c6-6c11-4e26-bf0a-959f827e9626)

</div>
</details>

## 입력마다 API 호출하지 않도록 호출 횟수 줄이기

<details>
<summary>코드 이미지</summary>
<div markdown="1">

### useDebounce custom hook

<img width="501" alt="Screenshot 2023-09-17 at 15 00 59" src="https://github.com/tjswo2292/wanted-internship-2/assets/55657931/a476893f-8d31-45bb-822b-8b5a001c02e8">

### Input

<img width="385" alt="Screenshot 2023-09-17 at 15 05 39" src="https://github.com/tjswo2292/wanted-internship-2/assets/55657931/883eccba-6236-422d-8ac5-4af118d7c659">

</div>
</details>

- 인자로 받은 callback 함수를 DEBOUNCE_DELAY_TIME 만큼 딜레이 후에 실행하는 함수를 return 하는 useDebounce custom hook 선언
- input의 onChange event listener에 위에 말한 return된 함수 넣기
- 검색어 상태를 변경하는 함수를 callback 함수로 넣어주기

## 키보드 만으로 최근 검색어 이동

<img width="529" alt="Screenshot 2023-09-17 at 15 38 20" src="https://github.com/tjswo2292/wanted-internship-2/assets/55657931/cebc3256-fa05-4cc8-aef3-de3e72b652a6">

- SearchKeywordList: 최근 검색어
- childrenElementCount: 모달에 몇개의 최근 검색어가 있는지

---

<img width="550" alt="Screenshot 2023-09-17 at 16 28 19" src="https://github.com/tjswo2292/wanted-internship-2/assets/55657931/9d295009-fc73-41fc-8b6f-65753962d0d4">

- 최근 검색어가 있으면
  - key down
    - 최근 검색어 리스트의 끝 지점 도달 T/F
      - T : 최근 검색어 index 0 으로 초기화
      - F : childrenIndex + 1
  - key up
    - 최근 검색어 리스트의 처음 지점 도달 T/F
      - T : 최근 검색어 리스트 끝으로 이동
      - F : childrenIndex - 1

---

### commit message convention

| Commit Type | Format                                               |
| ----------- | ---------------------------------------------------- |
| feat        | 새로운 기능 추가                                     |
| bug         | 버그 수정                                            |
| design      | 사용자 UI 디자인 변경(CSS 등)                        |
| refactor    | 코드 리팩토링                                        |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                    |
| remove      | 파일을 삭제만 한 경우                                |
| docs        | 문서수정                                             |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등) |
