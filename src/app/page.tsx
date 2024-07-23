import Header from "./components/Header";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_1fr] sm:grid-cols-12 sm:grid-rows-[auto_1fr]">
      <div className="col-span-12 shadow-lg">
        <Header />
      </div>
      <div className="col-span-12 bg-red-500 p-4 shadow-lg sm:col-span-2">
        Sidebar
      </div>
      <main className="col-span-12 bg-yellow-500 p-4 shadow-lg sm:col-span-10">
        Main Content
      </main>
    </div>
  );
}
