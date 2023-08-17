import Navbar from "./memeGenerator/Navbar";
import Hero from "./air-bnb/Hero";
import Card from "./air-bnb/Card";
import AllCards from "./air-bnb/AllCards";
import AllJoke from "./joke/AllJoke";
import Main from "./mount-fiji/Main";
import Meme from "./memeGenerator/Meme";
import Item from "./memeGenerator/Item";
import Counter from "./memeGenerator/Counter";
import Going from "./memeGenerator/Going";
import Boxes from "./boxes/Boxes";
import Messages from "./joke/Messages";
import Form from "./forms/Form";
import Track from "./data/Track";
function App() {
  
  return (
    <>
      <Navbar />
      <Track/>
      {/* <Messages/> */}
      {/* <Boxes/> */}
      {/* <Going/> */}
      {/* <Main/> */}
      {/* <Hero /> */}
      {/* <AllCards /> */}
      {/* <AllJoke/> */}
      <Form/>
      <Meme />
      {/* <Counter/> */}
      {/* <Item/> */}
    </>
  );
}

export default App;
