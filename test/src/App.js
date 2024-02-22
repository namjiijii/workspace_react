import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

// App() 함수의 리턴 문 안에 html태그(JSX)를 작성하면
// 해당 내용이 화면에 출력
// return 안의 내용은 반드시 하나의 태그에 감싸여 있어야 한다
// 의미없는 태그로 모든 내용을 감싸는 것은 불편하기 때문에
// 하나의 기능<>을 제공함 
// JSX에선 클래스를 줄 땐 className을 준다
function App() {
  const name = 'hong';
  const age = 30;

  return (
    <>
      <div>
        header {name}
      </div>
      <MainContent name={name} age={age}/>
      <Footer/>
    </>
  );
}

//본문 영역 컴포넌트
//컴포넌트는 앞 글자가 대문자로 적는 것이 관례
function MainContent(props){
  return (
      <div>
        본문 영역 {props.name} {props.age}
      </div>
  );
}




export default App;
