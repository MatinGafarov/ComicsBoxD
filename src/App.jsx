// Css
import "../src/App.css";
// Router
import { AppRouter } from "./routes/AppRouter.jsx";
export const App = () => {
  return (
    <div className="appContainer">
      <AppRouter />
    </div>
  );
};
