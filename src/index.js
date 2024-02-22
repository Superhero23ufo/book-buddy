import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.";
import "./index.css";
import Home from "./pages/Home/Home";

import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import RecoList from "./components/RecoList/RecoList";
import ReadList from "./components/ReadList/ReadList";
import RatedList from "./components/RatedList/RatedList";
import Login from "./components/Navbar/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/recommendations" element={<RecoList />} />
          <Route path="/readlist" element={<ReadList />} />
          <Route path="/ratedlist" element={<RatedList />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
