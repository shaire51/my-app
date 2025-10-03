import { useState, useEffect } from "react";
import "./Ppap.css";

const ppap = [
  {
    id: 1,
    name: "新人培訓",
    unit: "資訊課",
    date: "2025-09-23",
    time: "09:30~12:00",
    people: "新進人員",
    where: "文川",
    place: "五樓會議室",
  },
  {
    id: 2,
    name: "test",
    unit: "test",
    date: "2025-09-24",
    time: "13:30~14:30",
    people: "test / test / test",
    where: "文川",
    place: "test",
  },
  // 這筆日期/時間有非數字字元，之後要進一步使用前可先清理或驗證
  {
    id: 3,
    name: "teast",
    unit: "tesat",
    date: "2025a-09-24",
    time: "13:30a~14:30",
    people: "testa / test / test",
    where: "文川",
    place: "testa",
  },
];

export default function Ppap() {
  const [uploads, setUploads] = useState({});

  useEffect(() => {
    return () => {
      Object.values(uploads).forEach(
        (u) => u?.url && URL.revokeObjectURL(u.url)
      );
    };
  }, [uploads]);

  const handleFile = (id) => (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 副檔名 + 檔案大小
    const allowed = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/webp",
    ];
    const maxMB = 5;
    const tooBig = file.size > maxMB * 1024 * 1024;
    const badType = !allowed.includes(file.type);

    if (badType || tooBig) {
      setUploads((prev) => ({
        ...prev,
        [id]: {
          file: null,
          url: null,
          error: badType
            ? "僅允許 PDF / PNG / JPG / GIF / WEBP"
            : `檔案需小於 ${maxMB} MB`,
        },
      }));
      return;
    }

    const isImage = file.type.startsWith("image/");
    const url = isImage ? URL.createObjectURL(file) : null;

    // 先清掉舊的 URL
    const oldUrl = uploads[id]?.url;
    if (oldUrl) URL.revokeObjectURL(oldUrl);

    setUploads((prev) => ({ ...prev, [id]: { file, url, error: null } }));
  };

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
          <th>檔案上傳</th>
        </tr>
      </thead>
      <tbody>
        {ppap.map((item) => {
          const up = uploads[item.id];
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.unit}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.people}</td>
              <td>{item.where}</td>
              <td>{item.place}</td>
              <td>
                <div className="upload-cell">
                  {/* 隱藏 input，統一樣式 */}
                  <input
                    id={`file-${item.id}`}
                    className="input-file"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFile(item.id)}
                  />
                  <label className="btn-upload" htmlFor={`file-${item.id}`}>
                    選擇檔案
                  </label>

                  {/* 顯示檔名／錯誤 */}
                  {up?.error && <span className="hint error">{up.error}</span>}
                  {up?.file && !up.error && (
                    <>
                      {up.url ? (
                        <img className="thumb" src={up.url} alt="預覽" />
                      ) : (
                        <span className="file-name">{up.file.name}</span>
                      )}
                    </>
                  )}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
