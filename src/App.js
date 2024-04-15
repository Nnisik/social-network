import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import PostsFeed from "./components/PostsFeed/PostsFeed"

function App() {
  return (
    <>
      <Header />
      <main>
        <Filters />
        <PostsFeed />
      </main>
    </>
  );
}

export default App;
