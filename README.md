# pokemonWiki
pokeAPI를 활용하여 포켓몬 도감을 검색할 수 있는 사이트

### 0. 화면

- ver 0.1
<img src="https://user-images.githubusercontent.com/99037697/232314311-9b2f09f9-3846-4a62-b731-13b5c0a9e1a4.png" width="700" height="500">

<img src="https://user-images.githubusercontent.com/99037697/232321292-89fa7bba-0abd-49ad-86a3-2d30671ee75d.png" width="700" height="500">


### 1. 사용기술
- Java
- JavaScript
- Springboot

<hr>

### 2. 기능
- 23.04.16
    - 포켓몬 전체 리스트 (사진, 이름)
    - 사진 클릭하면 해당 포켓몬의 상세 정보
    - 영어 이름 or 전국 도감번호 검색하면 해당 포켓몬이 나옴

<hr>

### 3. 배운거 & 오류해결
- javascript로 fetch()를 활용하여 api 호출 (json 형태)
- javascript에서 문자열 null, undefined 확인하는 방법


### 4. 넣고 싶은 기능
- 트레이너 데이터도 넣어서 어떤 포켓몬 갖고 있는지 출력.
- 상세정보에 종족치, 기술 등 표기.
- 검색 결과 비동기식으로 출력.
- 도감번호, 타입 순서로 정렬하기

### 5. 잡설
- 사실 springboot를 쓸 필요 없었는데 그냥 spring으로 기본설정 공부하는 겸 썼다.
- 영어 이름으로만 나와서 한글로도 출력하고 싶다. 근데 https://pokeapi.co/api/v2/pokemon-species/1 주소로 한글 이름이랑 설명이 있긴한데 이걸 동시에 하는 방법을 모르겠다.
    - 해결했다. fetch() 안에서 fetch를 한 번 더 하면 url 여러개로 데이터 호출이 가능하다.

<hr>
## api
https://pokeapi.co/
