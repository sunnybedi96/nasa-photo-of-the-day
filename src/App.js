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


return (
  <StyledFriend>
  <div className="App">
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  <h1>{nasaData.title}</h1>
  <p>{nasaData.date}</p>
  <div className='body'>
    <img src={nasaData.url} alt={'Nebula'}/>
  </div>
  <p>{nasaData.explanation}</p>
  </div>
  </StyledFriend>
);


export default App;
