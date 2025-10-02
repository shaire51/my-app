// TOP1/Nav.jsx
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Top() {
  return (
    <div className="top-container">
      <div className="start">
        <nav className="nav">
          <NavLink to="/body">
            <img src="/AA.png" alt="回首頁" />
          </NavLink>

          <div className="nav-item dropdown">
            <span className="meeting">會議功能</span>
            <div className="submenu">
              <NavLink to="/body">本日會議</NavLink>
              <NavLink to="/reserve">新增會議</NavLink>
              <NavLink to="/">查詢會議</NavLink>
            </div>
          </div>

          <div className="nav-item dropdown">
            <span className="meeting">其他</span>
            <div className="submenu">
              <NavLink to="/todo1">待新增</NavLink>
              <NavLink to="/todo2">待新增</NavLink>
              <NavLink to="/todo3">待新增</NavLink>
            </div>
          </div>
        </nav>
      </div>

      <div className="end">日期 2025/9/9 12:00</div>
    </div>
  );
}
