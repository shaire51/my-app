import { Routes, Route } from "react-router-dom";
import Nav from "./TOP1/Nav";
import Body from "./TOP1/Body";
import Reserver from "./TOP2/Reserve";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/body" element={<Body />} />
        <Route path="" element={<Body />} />
        <Route path="/reserve" element={<Reserver />} />
      </Routes>
    </div>
  );
}
