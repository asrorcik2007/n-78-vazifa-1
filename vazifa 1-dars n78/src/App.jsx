
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;
