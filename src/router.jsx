import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./layout/LayoutPrincipal";
import HomeView from "./pages/HomeView";
import GamesView from "./pages/GamesView";
import AnimalsView from "./pages/AnimalsView";
import ExperiencesView from "./pages/ExperiencesView";
import AboutUsView from "./pages/AboutUsView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<HomeView />} index />
          <Route path="/juegos" element={<GamesView />} />
          <Route path="/animales" element={<AnimalsView />} />
          <Route path="/experiencias" element={<ExperiencesView />} />
          <Route path="/sobrenosotros" element={<AboutUsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
