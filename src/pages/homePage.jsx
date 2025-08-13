import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  // ייבוא הפונקציה של React Router המאפשרת מעבר דפים בתכנות (Programmatic Navigation).

  const handleCreateTriangle = () => {
    navigate("/Create-Triangle");
    // מעבר לעמוד יצירת המשולש כאשר המשתמש לוחץ על הכפתור.
  };

  return (
    // מבנה הדף הראשי – מציג כותרת, תיאור קצר, וכפתור מעבר לעמוד הקלט.
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>🎯 הקדמה – ממשק ציור משולש וחישוב זוויות</h1>
      <p>
        במשימה זו המשתמש מתבקש לפתח יישום אינטראקטיבי המאפשר להזין שלוש נקודות
        במערכת צירים (ערכי X ו־Y) ולצייר מהן משולש על גבי המסך. היישום כולל שני
        מסכים: מסך קלט, בו המשתמש מזין את הקואורדינטות של הקודקודים, ומסך תצוגה,
        בו מוצג המשולש עצמו עם סימון זוויותיו והצגת הערכים שלהן. מטרת המשימה היא
        לבדוק את יכולות הפיתוח, החשיבה הוויזואלית, והיכולת לשלב בין ממשק משתמש
        ברור לבין לוגיקה מתמטית לחישוב זוויות – כל זאת בזמן מוגבל.
      </p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => handleCreateTriangle()}
      >
        {/* כפתור שמעביר את המשתמש לעמוד יצירת המשולש */}
        הכן משולש
      </button>
    </div>
  );
}

export default HomePage;
