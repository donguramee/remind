// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <div className="App">
//       <div
//         className={isClicked ? "secondary" : "primary"}
//         onClick={handleClick}
//       >
//         Click me to change font color!
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  cursor: pointer;
  font-size: 50px;
  font-weight: 800;
  text-align: center;
  color: ${(props) => (props.isClicked ? "red" : "blue")};
  cursor: pointer;
`;

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="App">
      <StyledHeader isClicked={isClicked} onClick={handleClick}>
        Click me to change font color!
      </StyledHeader>
    </div>
  );
}

export default App;
