import React from "react";
import { ThemeProvider } from "./components/theme-provider";

// ✅ Navbar and Hero import
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/companies";
import Features from "./components/Features";
import Course from "./components/Course";
import Recipe from "./components/Recipie";
import Faculty from "./components/Faculty";
import Alumini from "./components/Alumini";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import PromoSection from "./components/PromoSection";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen  bg-background text-foreground">
        <Navbar />
        <Hero />
        <Companies />
        <Features />
        <Course />
        <Recipe />
        <Faculty />
        <Alumini />
        <NewsSection />
        <PromoSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
