import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const board_list = [
    {
      "boardNo" : 1,
      "title" : '1번글',
      "content" : '1번글 내용',
      "writer" : '김자바',
      "regDate" : '2024-02-01'
    },
    {
      "boardNo" : 2,
      "title" : '2번글',
      "content" : '2번글 내용',
      "writer" : '박자바',
      "regDate" : '2024-02-02'
    },
    {
      "boardNo" : 3,
      "title" : '3번글',
      "content" : '3번글 내용',
      "writer" : '최자바',
      "regDate" : '2024-02-03'
    },
    {
      "boardNo" : 4,
      "title" : '4번글',
      "content" : '4번글 내용',
      "writer" : '이자바',
      "regDate" : '2024-02-04'
    },
    {
      "boardNo" : 5,
      "title" : '5번글',
      "content" : '5번글 내용',
      "writer" : '홍자바',
      "regDate" : '2024-02-05'
    }
  ];
  let [idx, setIdx] = useState()
  let [isShow, setIsShow] = useState(false);


  return (
    <div className="App">
      <div className='blue-nav'>게시글</div>
      <div>
        <table className='board-table'>
          <thead className='bgc-nav'>
            <tr>
              <td>글 번호</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {
              board_list.map((board,i)=>{
                return(
                  <tr key={i}>
                    <td>{board['boardNo']}</td>
                    <td><span onClick={() => {
                      set
                      setIsShow(true)
                    }}>
                      {board['title']}
                      </span>
                    </td>
                    <td>{board['writer']}</td>
                    <td>{board['regDate']}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      {
        isShow ? <Detail board_list={board_list} idx={}/> : ''
      }
      
    </div>
  );
}

//상세 정보 컴포넌트
function Detail(props){
  return(
    <div>
      <div>글번호 : {props.board_list[0].boardNo}</div>
      <div>제목 : {props.board_list.title}</div>
      <div>내용 :</div>
      <div>작성자 :</div>
      <div>작성일 :</div>
    </div>
  );

  
}

export default App;
