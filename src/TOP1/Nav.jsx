import "./Nav.css";

export default function Top() {
  return (
    <div className="top-container">
      <div className="start">
        <img src="/AA.png" alt="回首頁" />
        <nav className="nav">
          <div className="nav-item dropdown">
            <span className="meeting">會議功能</span>
            <div className="submenu">
              <a href="#">本日會議</a>
              <a href="my-app\src\TOP2\Reserve.jsx">新增會議</a>
              <a href="#">查詢會議</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <span className="meeting">其他</span>
            <div className="submenu">
              <a href="#">待新增</a>
              <a href="#">待新增</a>
              <a href="#">待新增</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="end">日期 2025/9/9 12:00</div>
    </div>
  );
}
