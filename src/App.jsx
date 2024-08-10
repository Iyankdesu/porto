import "./index.css";
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={16}
        outerSize={12}
        color="220, 53, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
