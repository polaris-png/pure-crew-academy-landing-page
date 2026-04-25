import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Modalidades } from "@/components/Modalidades";
import { About } from "@/components/About";
import { Galeria } from "@/components/Galeria";
import { MerchTeaser } from "@/components/MerchTeaser";
import { Inscricao } from "@/components/Inscricao";
import { Footer } from "@/components/Footer";

const Landing = () => {
  return (
    <div className="App min-h-screen" data-testid="landing-root">
      <Header />
      <main>
        <Hero />
        <Modalidades />
        <About />
        <Galeria />
        <MerchTeaser />
        <Inscricao />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#0a0a0a",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            boxShadow: "0 8px 24px rgba(15,15,15,0.08)",
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
