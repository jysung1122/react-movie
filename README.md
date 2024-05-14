# react-movie
- [React를 이용한 영화 웹앱](https://jysung1122.github.io/react-movie)
- [리액트 공부](https://github.com/jysung1122/ReactStudy) 하는 과정 중 개발한 영화 웹앱
- 리액트 공부 사이트의 react-study 폴더 내용 중 중요한 파일인 src와 package.json 파일만 올림

## 웹앱 설명
- 무료 영화 API를 다운로드 순으로 정렬하여 가지고 와 출력
- 영화 제목을 누를 시 해당 영화의 자세한 내용 출력
- 개발 과정은 리액트 공부 사이트 참조

### React에서 Bootstrap 사용하기
1. Bootstrap CSS 및 JavaScript 파일 설치
```
npm install react-bootstrap bootstrap
```
2. src/index.js 파일에서 Bootstrap CSS 가져오기
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

3. Bootstrap 컴포넌트 가져오기

   Bootstrap 컴포넌트를 사용하려면 해당 컴포넌트를 가져와야 함. 예를 들어, Container 컴포넌트를 사용하려면 다음과 같이 가져옴
```
import { Container } from 'react-bootstrap';
```


4. Bootstrap 컴포넌트 사용하기
   이제 Home 컴포넌트에서 Bootstrap 컴포넌트를 사용할 수 있음. 예를 들어, Container 컴포넌트를 사용하여 콘텐츠를 감싸면 Bootstrap의 반응형       레이아웃을 적용할 수 있음
```
import { Container } from 'react-bootstrap';

function Home() {
  // ...

  return (
    <Container>
      {/* 기존 코드 */}
    </Container>
  );
}
```

- Bootstrap 공식 문서(https://react-bootstrap.github.io/) 를 참고하여 더 자세한 사용법을 확인할 수 있음
