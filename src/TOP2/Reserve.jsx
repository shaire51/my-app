// src/Reserve.jsx
import { useState } from "react";
import { useMeetings } from "../store/meetingsStore";
import "./Reserve.css";

export default function Reserve() {
  const { addMeeting } = useMeetings();

  const [form, setForm] = useState({
    name: "",
    unit: "",
    date: "",
    start: "",
    end: "",
    reporter: "",
    people: "",
    place: "",
    file: null, // 這裡只留著欄位，若要上傳/預覽可再做
  });
  const [msg, setMsg] = useState(null); // { type: 'ok'|'error', text: string }

  const onChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "fileUpload") {
      setForm((p) => ({ ...p, file: files?.[0] ?? null }));
    } else {
      setForm((p) => ({ ...p, [id]: value }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg(null);

    // 簡單必填
    if (!form.name || !form.date || !form.start || !form.end || !form.place) {
      setMsg({
        type: "error",
        text: "請填寫必填欄位（名稱、日期、開始/結束時間、地點）",
      });
      return;
    }

    const { ok, error } = addMeeting({
      name: form.name.trim(),
      unit: form.unit.trim(),
      date: form.date,
      start: form.start, // "HH:MM"
      end: form.end, // "HH:MM"
      people: form.people.trim(),
      reporter: form.reporter.trim(),
      place: form.place.trim(),
      // file: form.file, // 如需一併存檔可擴充 store
    });

    if (!ok) {
      setMsg({ type: "error", text: error || "新增失敗" });
      return;
    }

    setMsg({ type: "ok", text: "預約成功，已加入清單！" });
    // 清表單（也可保留）
    setForm({
      name: "",
      unit: "",
      date: "",
      start: "",
      end: "",
      reporter: "",
      people: "",
      place: "",
      file: null,
    });
  };

  return (
    <div className="form-container">
      <h2>新增會議</h2>
      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">會議名稱：</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="unit">主辦單位：</label>
            <input
              type="text"
              id="unit"
              value={form.unit}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">會議日期：</label>
            <input
              type="date"
              id="date"
              value={form.date}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label>會議時間：</label>
            <div className="time-row">
              <input
                type="time"
                id="start"
                value={form.start}
                onChange={onChange}
                aria-label="開始時間"
              />
              <span className="time-sep">~</span>
              <input
                type="time"
                id="end"
                value={form.end}
                onChange={onChange}
                aria-label="結束時間"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="reporter">提報人：</label>
            <input
              type="text"
              id="reporter"
              value={form.reporter}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="people">參加人員：</label>
            <input
              type="text"
              id="people"
              value={form.people}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="place">地點：</label>
            <input
              type="text"
              id="place"
              value={form.place}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fileUpload">檔案上傳：</label>
            <input type="file" id="fileUpload" onChange={onChange} />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            送出
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              setForm({
                name: "",
                unit: "",
                date: "",
                start: "",
                end: "",
                reporter: "",
                people: "",
                place: "",
                file: null,
              })
            }
          >
            重設
          </button>
        </div>

        {msg && (
          <div className={`banner ${msg.type === "ok" ? "ok" : "error"}`}>
            {msg.text}
          </div>
        )}
      </form>
    </div>
  );
}
