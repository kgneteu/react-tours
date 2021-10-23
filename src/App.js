import './App.css';
import Header from "./components/header/header";
import About from "./components/about/about";
import Features from "./components/features/features";
import Tours from "./components/tours/tours";
import Stories from "./components/stories/stories";
import Book from "./components/book/book";
import Footer from "./components/footer/footer";
import Popup from "./components/popup/popup";

import './sass/main.scss'
import './css/icon-font.css'

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <About/>
                <Features/>
                <Tours/>
                {/*<Stories/>*/}
                {/*<Book/>*/}
            </main>
            {/*<Footer/>*/}
            {/*<Popup/>*/}
        </div>
    );
}

export default App;
