# pokemonWiki
pokeAPI를 활용하여 포켓몬 도감을 검색할 수 있는 사이트

### 0. 화면

- ver 0.1
<img src="https://user-images.githubusercontent.com/99037697/232314311-9b2f09f9-3846-4a62-b731-13b5c0a9e1a4.png" width="500" height="300">

<img src="https://user-images.githubusercontent.com/99037697/232321292-89fa7bba-0abd-49ad-86a3-2d30671ee75d.png" width="500" height="300">

- ver 0.1.1

![image](https://user-images.githubusercontent.com/99037697/235226981-1873b1c2-9194-4cac-9f1d-53aaf695964b.png)

- ver 0.1.2

<img src="https://user-images.githubusercontent.com/99037697/236265871-f9f425ee-29e1-4ee4-b2d1-089eb05ec455.png" width="500" height="300">



### 1. 사용기술
- Java
- JavaScript
- Springboot

<hr>

### 2. 기능
- ver 0.1
    - 포켓몬 전체 리스트 (사진, 이름)
    - 사진 클릭하면 해당 포켓몬의 상세 정보
    - 영어 이름 or 전국 도감번호 검색하면 해당 포켓몬이 나옴

- ver 0.1.1
    - 포켓몬을 한글 이름으로 검색하면 해당 포켓몬이 나오도록 설정.
    
- ver 0.1.2
    - 검색하면 한글 이름으로 나오도록.
    - 버튼 눌면 세대별로 포켓몬 출력되도록.

<hr>

### 3. 배운거 & 오류해결
- javascript로 fetch()를 활용하여 api 호출 (json 형태)
- javascript에서 문자열 null, undefined 확인하는 방법
- javascript에서 json 로컬 파일 불러오기 (.js로 만들어서 불러온 다음 json.parse 한다)
- javascript에서 배열 값을 쉽게 찾는 라이브러리 lodash


### 4. 넣고 싶은 기능
- 트레이너 데이터도 넣어서 어떤 포켓몬 갖고 있는지 출력.
- 상세정보에 종족치, 기술 등 표기.
- 검색 결과 비동기식으로 출력.
- 도감번호, 타입 순서로 정렬하기
      - 네비게이션 바를 만들어서 세대별 (1-9세대), 타입별(불-페어리), 특수진화(메가진화, 울트라비스트, 폼체인지) 넣기
- 로그인, 회원가입 기능 넣어서 내 포켓몬 넣기 (포켓몬, 기술, 성격, 아이템 등)

### 5. 잡설
- 사실 springboot를 쓸 필요 없었는데 그냥 spring으로 기본 설정 공부하는 겸 썼다.
- 영어 이름으로만 나와서 한글로도 출력하고 싶다. 근데 https://pokeapi.co/api/v2/pokemon-species/1 주소로 한글 이름이랑 설명이 있긴한데 이걸 동시에 하는 방법을 모르겠다.
    - 해결했다. fetch() 안에서 fetch를 한 번 더 하면 url 여러 개로 데이터 호출이 가능하다.

<hr>
## api
https://pokeapi.co/
