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
        זהו יישום אינטראקטיבי שבו תוכלו להזין שלוש נקודות במערכת צירים (ערכי X
        ו־Y) ולראות מיד איך נוצר מהן משולש על המסך. האפליקציה כוללת שני מסכים:
      </p>

      <ul>
        <li>מסך קלט – שבו מזינים את הקואורדינטות של שלושת הקודקודים.</li>
        <li>מסך תצוגה – שבו מוצג המשולש עם סימון הזוויות והערכים שלהן.</li>
      </ul>
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
