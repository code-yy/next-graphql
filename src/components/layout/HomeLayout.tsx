import { VFC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const HomeLayout: VFC = (page) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1 bg-red-300">{page}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
