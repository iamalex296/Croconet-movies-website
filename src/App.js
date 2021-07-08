import Header from "./components/Header/Header";

import "./App.css";
import ContentLayout from "./components/Layout/ContentLayout";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <ContentLayout />
      <Footer />
    </div>
  );
}

export default App;
