import "./App.css";
import HomePage from "./pages/homePage";
import { Route, Routes } from "react-router-dom";
import TriangleDisplay from "./pages/triangleDisplay";
import CreateTriangle from "./pages/createTriangle";

function App() {
  return (
    // עטיפה כללית לאפליקציה. כאן הוספת מחלקות Bootstrap לפריסה מלאה אנכית.
    // הערה: ודא שב-index/main הוספת <BrowserRouter> מסביב ל-<App/>, אחרת ה-Routes לא יעבדו.
    <div className="app min-vh-100 d-flex flex-column">
      {/* הגדרת הראוטים הראשיים של האפליקציה */}
      <Routes>
        {/* דף הבית – ניווט ראשוני/הסבר וכפתור להתחלת יצירת משולש */}
        <Route path="/" element={<HomePage />} />
        {/* עמוד קלט – המשתמש מזין Ax,Ay,Bx,By,Cx,Cy ולוחץ "הצג משולש" */}
        <Route path="/Create-Triangle" element={<CreateTriangle />} />
        {/* עמוד תצוגה – מצייר SVG של המשולש (ובהמשך גם זוויות) */}
        <Route path="/Triangle-Display" element={<TriangleDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
