import "./Ppap.css";
const ppap = [
  {
    id: 1,
    name: "新人培訓",
    unit: "資訊課",
    date: "2025-09-23",
    time: "09:30~12:00",
    people: "新進人員",
    place: "五樓會議室",
  },
  {
    id: 2,
    name: "test",
    unit: "test",
    date: "2025-09-24",
    time: "13:30~14:30",
    people: "test / test / test",
    place: "test",
  },
  {
    id: 3,
    name: "teast",
    unit: "tesat",
    date: "2025a-09-24",
    time: "13:30a~14:30",
    people: "testa / test / test",
    place: "testa",
  },
];

export default function Ppap() {
  return (
    <table border="2" className="borderrr">
      <thead>
        <tr>
          <th>會議/課程名稱</th>
          <th>主辦單位</th>
          <th>日期</th>
          <th>時間</th>
          <th>參加人員</th>
          <th>地點</th>
        </tr>
      </thead>
      <tbody>
        {ppap.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.unit}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.people}</td>
            <td>{item.place}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
