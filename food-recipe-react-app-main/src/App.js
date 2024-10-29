import React,{useState} from 'react'
import Products from './Products';

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]); // initialising the data in an empty array
  const YOUR_APP_ID = "303a451b";
  const YOUR_APP_KEY ="f32753c3a45ed747544a321014779ebe";
  const submitHandler = e =>{
    e.preventDefault(); // this will stop the page to reload as soon as we hit submit button
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null} // we want the Products component to be called only when the data is loaded
      </center>
    </div>
  )
}

export default App
