import Header from "./components/Header/Header";
import ContentContainer from "./UI/ContentContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentContainer>
        <p>Alex</p>Hello Alex
      </ContentContainer>
      <ContentContainer />
      <ContentContainer />
      <ContentContainer />
    </div>
  );
}

export default App;
