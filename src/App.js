// react-router-dom 라이브러리에서 BrowserRouter, Routes, Route 컴포넌트를 가져옵니다.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>                     {/* BrowserRouter 컴포넌트를 사용하여 라우팅 설정 */}
      <Routes>                   {/* Routes 컴포넌트를 사용하여 각 경로 별 컴포넌트 매핑 */}
        {/* 동적 경로 매개변수 :id를 사용하여 영화 상세 페이지 경로 설정 */}
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
        {/* 기본 경로에 Home 컴포넌트 매핑 */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
