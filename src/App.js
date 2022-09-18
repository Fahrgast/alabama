import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Destination from "./routes/destination/destination.component";
import Crew from "./routes/crew/crew.component";
import Technology from "./routes/technology/technology.component";

import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
