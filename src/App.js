import './App.css';
import { useState} from "react";

function App() {
  const bucket1 = ["hi", "hello", "testing"];
  const bucket2 = ["hi there", "hello there", "testing there"];
  const [bucketList1, setBucketList1] = useState(bucket1.map((item) => ({value: item, checked: false})));
  const [bucketList2, setBucketList2] = useState(bucket2.map((item) => ({value:item, checked: false})));

  const bucketList1Handler = (index) => {
    const newBucketList = [...bucketList1];
    newBucketList[index].checked = !newBucketList[index].checked;
    console.log("newBuckerList", newBucketList);
    setBucketList1(newBucketList);
  };

  const bucketList2Handler = (index) => {
    const newBucketList = [...bucketList2];
    newBucketList[index].checked = !newBucketList[index].checked;
    setBucketList2(newBucketList);
  };

  const moveHandler = (direction) => {
    const checkedItemsBucketList1 = bucketList1.filter((item) => item.checked);
    const uncheckedItemsBucketList1 = bucketList1.filter((item) => !item.checked);
    
    const checkedItemsBucketList2 = bucketList2.filter((item) => item.checked);
    const uncheckedItemsBucketList2 = bucketList2.filter((item) => !item.checked);
    
    let newBucketList;
    if(direction === "Down"){
      checkedItemsBucketList1.forEach((item) => {
        item.checked = false;
      });
      newBucketList = [...bucketList2, ...checkedItemsBucketList1];
      setBucketList2(newBucketList);
      setBucketList1([...uncheckedItemsBucketList1]);
    }else{
      checkedItemsBucketList2.forEach((item) => {
        item.checked = false;
      });
      console.log("checkedItemsBucketList2", checkedItemsBucketList2);
      newBucketList = [...bucketList1, ...checkedItemsBucketList2];
      setBucketList1(newBucketList);
      setBucketList2(uncheckedItemsBucketList2);
    }
  }

  console.log(bucketList1);

  return (
    <main className="">
        <button onClick={() => moveHandler("Up")}>Up</button>
        <button onClick={() => moveHandler('Down')}>Down</button>
      <section>
        <h3>BucketList1</h3>
        <div>
        {bucketList1.map((item, index) => {
          return(
          <ul key={item.value}>
            <input type='checkbox' onChange={() => bucketList1Handler(index)}/><span>{item.value}</span>
          </ul>
          );
        })}
        
        </div>
      </section>
      <section>
        <h3>BucketList2</h3>
        <div>
        {bucketList2.map((item, index) => {
          return(
          <ul key={item.value}>
            <input type='checkbox' onChange={() => bucketList2Handler(index)}/><span>{item.value}</span>
          </ul>
          );
        })}
        
        </div>
      </section>

    </main>
  );
}

export default App;
