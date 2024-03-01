import ForestJPG from "@/assets/images/forest.jpg";

function App() {
  return (
    <>
      <section className="bg-green-dark text-white py-6 px-3">
        <h1 className="font-title text-2xl mb-5">Hello there</h1>
        <p className="font-body mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui pariatur quas explicabo placeat soluta quae
          temporibus tenetur, odit, repudiandae aperiam laudantium provident ratione molestiae. Deserunt voluptas
          officia amet itaque ullam!
        </p>
        <img src={ForestJPG} />
      </section>
    </>
  );
}

export default App;
