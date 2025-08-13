import { useLocation, Link, useNavigate } from "react-router-dom";

function TriangleDisplay() {
  const navigate = useNavigate();
  // מאפשר חזרה לעמוד אחר אם אין נתונים

  const { state } = useLocation() || {};
  // קבלת ה־state שהועבר מ־CreateTriangle (כולל ערכי הנקודות)

  const A = state?.A;
  const B = state?.B;
  const C = state?.C;

  // אם לא הועברו נתונים (למשל רענון הדף), מבצעים ניווט חזרה לעמוד הקלט
  if (!A || !B || !C) {
    navigate("/Create-Triangle", { replace: true });
    return null; // עצירת הרינדור
  }

  return (
    <div className="container py-4">
      <h2 className="mb-3">תצוגת משולש</h2>
      {/* הצגת הקואורדינטות של שלושת הנקודות */}
      <p className="text-muted">
        A({A.x},{A.y}) • B({B.x},{B.y}) • C({C.x},{C.y})
      </p>

      {/* ציור משולש ב-SVG לפי הקואורדינטות שהוזנו */}
      <svg width="500" height="500" style={{ border: "1px solid #eee" }}>
        <polyline
          points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${A.x},${A.y}`}
          // מחבר בין הנקודות ויוצר קו סגור למשולש
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        {/* ציור נקודות עזר בכל קודקוד */}
        <circle cx={A.x} cy={A.y} r="3" />
        <circle cx={B.x} cy={B.y} r="3" />
        <circle cx={C.x} cy={C.y} r="3" />
      </svg>

      {/* קישור חזרה לעמוד הקלט */}
      <div className="mt-3">
        <Link className="btn btn-link px-0" to="/Create-Triangle">
          חזרה לקלט
        </Link>
      </div>
    </div>
  );
}

export default TriangleDisplay;
