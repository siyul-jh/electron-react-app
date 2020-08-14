import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>GIF 이미지</p>
				<img src={logo} className="App-logo" alt="logo" />
				<span>
					<a href="http://mail.incar.co.kr" target="_blank" rel="noopener noreferrer">
						인카 메일
					</a>
				</span>
				<span>
					<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer">
						PDF 열기
					</a>
				</span>
				<span>
					<Link to="/editor" target="_blank">
						텍스트 에디터
					</Link>
				</span>
				<span>
					<Link to="/video" target="_blank">
						동영상
					</Link>
				</span>
			</header>
		</div>
	);
}

export default App;
