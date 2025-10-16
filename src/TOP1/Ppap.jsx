// src/Ppap.jsx
import { useMeetings } from "../store/meetingsStore";
import "./Ppap.css";

export default function Ppap() {
  const { toRows } = useMeetings();
  const rows = toRows();

  return (
    <table className="borderrr">
      <thead>
        <tr>
          <th>會議/課程名稱</th>
          <th>主辦單位</th>
          <th>日期</th>
          <th>時間</th>
          <th>參加人員</th>
          <th>提報人</th>
          <th>地點</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((m) => (
          <tr key={m.id}>
            <td>{m.name}</td>
            <td>{m.unit}</td>
            <td>{m.date}</td>
            <td>{m.timeLabel}</td>
            <td>{m.people}</td>
            <td>{m.reporter}</td>
            <td>{m.place}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
