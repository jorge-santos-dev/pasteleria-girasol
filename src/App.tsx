import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import MyRoutes from "./routes/Routes";

function App() {
  return (
    <main className="main">
      <Header />
      <MyRoutes />
      <Footer />
    </main>
  );
}

export default App;
