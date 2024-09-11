import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
