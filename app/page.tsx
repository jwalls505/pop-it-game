import MainGame from "@/components/MainGame";
const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Play
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Pop it!</span>
    </h1>
    <p className="desc text-center">
      "Pop It! is a delightful and addictive game that brings fun and sensory play to the next level.
      The game consists of a board filled with rows of colorful circles, each containing a satisfying bubble wrap-like bubble.
      The objective is simple: pop as many bubbles as you can! Start by selecting a row, then press down on any bubble to pop it.
      The bubbles will make a satisfying popping sound and provide a satisfying tactile sensation. The game features six rows with varying numbers of bubbles, creating an exciting challenge.
      Can you pop them all? Challenge your friends, compete for the highest score, and enjoy the satisfying experience of popping bubbles in the Pop It! game!"
    </p>
    <MainGame />
  </section>
);

export default Home;