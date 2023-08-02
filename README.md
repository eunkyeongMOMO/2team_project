## 개발 2팀 퍼블 월간스터디 7월 과제 

😒회사에서 gitlab > hstudy 권한 받고 클론 받아야함, 

[실행방법]<br/>

npm i 로 패키지 설치<br/>
npm start으로 로컬서버 실행 
>>(실행 시키시면 터미널에 url나옵니다! ex.http://localhost:3000/)

- typescript, scss설치 해놨으니까 따로 설치 안해도 됩니다. 



[폴더별 설명]
- node_modules : package.json에서 다운되어있는 라이브러리들이 나오는데, 
그 라이브러리들이 설치된 폴더(깃에 업로드XX)
- src : 대부분의 작업파일은 여기에<br/>
   ㄴ common : 프로젝트 공통적으로 사용되는 파일<br/>
   ㄴ ★ components : 안에 작업할 폴더를 생성해 css/scss, 컴포넌트를 넣어놓는곳
- .gitignore : git에 올라가면 안되는 파일들 작성해두는곳
- package-lock.json : package.json 설치하면서 생기는 파일. (삭제하여도 무방,깃 업로드X)
- tsconfig.json : 타입스크립트 환경설정하는 파일 (기본셋팅해놓음)

[import 할때 절대경로 사용법]

src안에 있는 파일 가져올때
-> @src/ 
```
import styles from "@src/scss/layout.scss";
```
components 안에 있는 컴포넌트 가져올때
->@components/
```
import {파일명} from "@components/TodoInput";
```

components 파일명 반드시 첫글자 대문자로 써야함. 

은경 캘린더
건 투두
효정 투두

발표 다음주라고...믿기지 않음/ 주말에 무조건 다해야 살수이씀....
꾸아아아아아앙
