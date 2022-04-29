import Header from "./components/Header"
import Pages from "./components/Pages"
import Footer from "./components/Footer"




function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Pages />
        <Footer />
      </div>
    </>
  );
}

export default App;
