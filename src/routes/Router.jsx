import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import NotFoundPage from "../pages/ErrorPage/NotFoundPage";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/Pokedex/PokedexPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/pokedex' element={<PokedexPage />}/>
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
