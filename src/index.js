import React from "react";
import ReactDOM from "react-dom/client"; // 임포트 경로 변경에 주목하세요
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // 루트 인스턴스를 생성합니다.
root.render(<App />); // 루트 인스턴스를 사용하여 렌더링합니다.
