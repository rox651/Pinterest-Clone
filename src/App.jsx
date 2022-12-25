import { Header } from "./components";
import { AppRouter } from "./router";

function App() {
   return (
      <div className=" bg-black min-h-screen text-white">
         <Header />
         <AppRouter />
      </div>
   );
}

export default App;
