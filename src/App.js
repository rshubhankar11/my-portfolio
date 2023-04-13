import React from "react";
import BlogPost from "./components/BlogPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/nav/MyNavbar";
import About from "./pages/about";
import MyCard from "./components/cards/MyCard";
import Profile from "./pages/profile";

const App = () => {
  const post1 = {
    title: "MY Input",
    content:
      "This is to store my project deatils ther will be lots fo details comming up on this tab",
    photoUrl:
      "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg",
  };
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/cards" element={<MyCard />} />
        <Route path="/card" element={<BlogPost {...post1} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
