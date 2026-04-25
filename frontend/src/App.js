import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Modalidades } from "@/components/Modalidades";
import { Galeria } from "@/components/Galeria";
import { MerchTeaser } from "@/components/MerchTeaser";
import { Inscricao } from "@/components/Inscricao";
import { Footer } from "@/components/Footer";

const Landing = () => {
  return (
    <div className="App relative bg-white text-black overflow-x-clip" data-testid="landing-root">
      <div className="grain-overlay" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Marquee
          items={["SURFSKATE", "SURF", "JIU-JITSU", "PURE CREW"]}
          dark
          testId="marquee-disciplines"
        />
        <About />
        <Modalidades />
        <Marquee
          items={["ONDA", "CONCRETO", "TATAMI", "MOVIMENTO PURO"]}
          dark={false}
          testId="marquee-words"
        />
        <Galeria />
        <MerchTeaser />
        <Inscricao />
        <Footer />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: 0,
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontSize: "11px",
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
