import Header from "./components/Header";
import ImageCard from "./components/ImageCard";

const numberOfCards = 40;

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_1fr] sm:grid-cols-12 sm:grid-rows-[auto_1fr]">
      <div className="col-span-12 shadow-lg">
        <Header />
      </div>
      <div className="row-span-2 col-span-12 bg-red-500 p-4 shadow-lg sm:col-span-2">
        Sidebar
      </div>
      <main className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-slate-200 p-4 shadow-lg sm:col-span-10 gap-4">
      {Array.from({ length: numberOfCards }, (_, index) => (
        <div key={index} className="flex items-center justify-center">
          <ImageCard ImageUrl={`/github.jpeg`} />
        </div>
      ))}
      </main>
    </div>
  );
}
