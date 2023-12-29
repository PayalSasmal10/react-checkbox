import './App.css';
import { useState} from "react";

function App() {
  const bucket1 = ["hi", "hello", "testing"];
  const bucket2 = ["hi there", "hello there", "testing there"];
  const [bucketList1, setBucketList1] = useState(bucket1);
  const [bucketList2, setBucketList2] = useState(bucket2);


  return (
    <main className="">
      <section>
        <h3>BucketList1</h3>
        <div>
        {bucket1.map((item) => {
          return(
          <ul key={item}>
            <li>{item}</li>
          </ul>
          );
        })}
        
        </div>
      </section>
      <section>
        <h3>BucketList2</h3>
        <div>
        {bucket2.map((item) => {
          return(
          <ul key={item}>
            <li>{item}</li>
          </ul>
          );
        })}
        
        </div>
      </section>
    </main>
  );
}

export default App;
