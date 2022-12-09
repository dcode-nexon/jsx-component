import Article from './Article';

//일반 주석문 가능
function App() {
	return (
		//일반 주석문 가능
		//컴포넌트는 단일 JSX요소만 반환 가능
		//복수개의 JSX요소를 반환할시 wrapping태그로 감싸주거나
		//아래처럼 Fragment로 감싸줌
		<>
			{/* JSX안쪽에서 주석을 달때 */}
			<h1>Hello</h1>
			<Article />
		</>
	);
}

export default App;
