import React from "react";
import React, {useState, useEffect} from "react";
import "./App.css";

const StyledFriend = styled.div`
  width: 60%
  display: flex;
  justify-content: space-between;
  padding: 8px
  border-bottom: 2px solid white;
  line-height: 1.6;
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white}
`


function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      // console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        {nasaData && <Photo data = {nasaData} /> }
      </p>
    </div>
  );
}

export default App;