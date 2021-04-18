import ImageDisplay from "./components/ImageDisplay";
import ImageUpload from "./components/ImageUpload";

const App = () => {
  return (
    <div>
      <h1>PIXABOOK</h1>
      <ImageUpload />
      <ImageDisplay />
    </div>
  );
};

export default App;
