import Discounted from "../Discounted";
import Explore from "../Explore";
import Featured from "../Featured";
import Highlights from "../Highlights";
import Landing from "../Landing";

function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
