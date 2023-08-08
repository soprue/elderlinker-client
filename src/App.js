import "./App.css";
import GlobalStyle from "./assets/GlobalStyle";
import routes from "./routes";

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App">{routes()}</div>
        </>
    );
}

export default App;
