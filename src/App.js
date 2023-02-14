import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("처음 실행했을떄만");
  }, []);
  useEffect(() => {
    console.log("키워드 바꼇을때 실행");
  }, [keyword]);
  useEffect(() => {
    console.log("카운터가 바꼈을때 실행");
  }, [counter]);
  useEffect(() => {
    console.log("카운터 또는 키워드가 바꼈을때 실행");
  }, [counter, keyword]);
  
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text"
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
