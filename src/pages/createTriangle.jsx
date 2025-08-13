import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTriangle() {
  // שימוש ב־useState לשמירת ערכי ברירת מחדל של כל קואורדינטה (X ו-Y) עבור שלוש נקודות
  const [ax, setAx] = useState("80");
  const [ay, setAy] = useState("420");
  const [bx, setBx] = useState("250");
  const [by, setBy] = useState("60");
  const [cx, setCx] = useState("440");
  const [cy, setCy] = useState("420");

  const navigate = useNavigate();
  // מאפשר לבצע ניווט לעמוד אחר בלחיצת כפתור

  const goDisplay = () => {
    // מעבר לעמוד התצוגה, עם העברת כל נקודה כאובייקט דרך state
    navigate("/Triangle-Display", {
      state: {
        A: { x: Number(ax), y: Number(ay) },
        B: { x: Number(bx), y: Number(by) },
        C: { x: Number(cx), y: Number(cy) },
      },
    });
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">צור משולש</h2>

      {/* טופס קלט – שדות להזנת ערכי X ו-Y עבור כל נקודה */}
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <div className="border rounded p-3">
            <h5 className="mb-3">נקודה A</h5>
            <input
              className="form-control mb-2"
              type="number"
              placeholder="Ax"
              value={ax}
              onChange={(e) => setAx(e.target.value)}
            />
            <input
              className="form-control"
              type="number"
              placeholder="Ay"
              value={ay}
              onChange={(e) => setAy(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="border rounded p-3">
            <h5 className="mb-3">נקודה B</h5>
            <input
              className="form-control mb-2"
              type="number"
              placeholder="Bx"
              value={bx}
              onChange={(e) => setBx(e.target.value)}
            />
            <input
              className="form-control"
              type="number"
              placeholder="By"
              value={by}
              onChange={(e) => setBy(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="border rounded p-3">
            <h5 className="mb-3">נקודה C</h5>
            <input
              className="form-control mb-2"
              type="number"
              placeholder="Cx"
              value={cx}
              onChange={(e) => setCx(e.target.value)}
            />
            <input
              className="form-control"
              type="number"
              placeholder="Cy"
              value={cy}
              onChange={(e) => setCy(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* כפתור שמפעיל את הפונקציה שמעבירה לעמוד התצוגה */}
      <button className="btn btn-primary mt-3" onClick={goDisplay}>
        הצג משולש
      </button>
    </div>
  );
}

export default CreateTriangle;
