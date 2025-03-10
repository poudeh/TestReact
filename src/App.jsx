import { useContext, useEffect, useState } from 'react';
import { peoples } from './DB/People';
import AdminOnly from './Components/AdminOnly';
import PersonBox from './Components/PersonBox';
import TimeList from './Components/TimeList';
import { Rectangle, ColorRectangle } from './Class/main';
import { TextContext } from './TextContext';

function App() {
  const [people, setPeople] = useState([]);
  const [rectangle] = useState(new Rectangle(10, 20))
  const [colorRectangle] = useState(new ColorRectangle(2, 3, "Red"))
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState(["00:05:12"]);



  useEffect(() => {
    setPeople(peoples);
  }, []);

  useEffect(() => {
    console.log("Effect runs");
    return () => {
      console.log("Cleanup runs");
    };

    //     When the component mounts, the effect runs (console.log("Effect runs")).
    // If count changes, React first calls the cleanup function (console.log("Cleanup runs")) before running the effect again.

  }, [isLight])

  return (
    <>
      <TextContext.Provider value={{color:"White" , funcs:{isLight , setIsLight , timeArr , setTimeArr} }}>
        <div className='MainDiv'>
          <h1 style={{ color: isLight ? "red" : "blue" }}>People List</h1>
          <div className="people-container">
            {people.map((person, index) => (
              <AdminOnly key={index} user={person}>
                <PersonBox person={person} />
              </AdminOnly>
            ))}
          </div>
          <p>Sum of the amounts are {rectangle.sumAmounts()}</p>
          <p> The important thing about  {colorRectangle.TextRighter()}</p>
          <p>In this statement the color  is asd</p>
          <button onClick={() => setIsLight(!isLight)}>Is light changer</button>
        </div>

        <TimeList timeArr={timeArr} setTimeArr={setTimeArr}>
          {
            timeArr.map((time, index) => (
              <div key={index}>{time}</div>
            ))
          }
        </TimeList>
      </TextContext.Provider>

    </>

  );
}

export default App;






