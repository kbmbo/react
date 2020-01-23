import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import EventPractice from './EventPractice';
import Say from './Say';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import ContextSample from './ContextSample';

/*
function App() {
  const name = '안녕';
  return (
    <>
      <h1>{name}하세요</h1>
      <h2>테스트중입니다.</h2>
    </>
  );
}
*/
/*
function App() {
  const name = '나';
  return (
    <>
      {name ==='나' ? (
        <h1>나 입니다.</h1>
        ) : (
          <h2>내가 아닙니다.</h2>
        )
      }
      {name ==='나z' ? <h1>2나 입니다.</h1> : null}
      {name ==='나' && <h1>3나 입니다.</h1>}
    </>
  );
}
*/
/*
function App() {
  const name = 'kspring';
  const style = {
    backgroundColor:'#000',
    color:'#fff',
    fontSize:40,
    paddingLeft:20
  };
  return (
    <>
    <div style={style}>{name}</div>
    <div style={{
      backgroundColor:'#eee',
      color:'#fff',
      fontSize:60,
      marginLeft:50
    }}>{name}</div>
    <div className="txt">{name}</div>
    <input />
   </>
  );
  
}
*/
const App = () => {
  return (
    <>
    <MyComponent name='kspring' likeNum={87} >BOM</MyComponent>
    <Counter />
    <Say />
    <EventPractice />
    <ValidationSample />
    <ScrollBox />
    <ContextSample />
    </>
  );
};

export default App;
