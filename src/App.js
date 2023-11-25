
import React from "react";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewsLatter from "./components/NewsLatter";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLatter/>
      <Footer/>
    </div>
  );
}

export default App;
