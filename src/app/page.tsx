import Header from "./components/Header";
import ImageCard from "./components/ImageCard";

const numberOfCards = 40;

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_1fr] sm:grid-cols-12 sm:grid-rows-[auto_1fr]">
      <div className="sticky top-0 z-50 col-span-12 bg-[#A3A3A3] shadow-xl">
        <Header />
      </div>
      <div className="col-span-12 row-span-2 bg-[#606060] p-4 shadow-lg sm:col-span-2">
        Sidebar
      </div>
      <main className="col-span-12 grid grid-cols-1 gap-x-4 gap-y-8 bg-[#D9D9D9] p-4 shadow-lg sm:col-span-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: numberOfCards }, (_, index) => (
          <div key={index} className="flex items-center justify-center">
            <ImageCard ImageUrl={`/github.jpeg`} />
          </div>
        ))}
      </main>
    </div>
  );
}
