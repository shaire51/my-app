import "./Reserve.css";

export default function Reserve() {
  return (
    <div className="form-container">
      <h2>新增會議</h2>
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="meetingName">會議名稱：</label>
            <input type="text" id="meetingName" />
          </div>
          <div className="form-group">
            <label htmlFor="organizer">主辦單位：</label>
            <input type="text" id="organizer" />
          </div>

          <div className="form-group">
            <label htmlFor="date">會議日期：</label>
            <input type="date" id="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">會議時間：</label>
            <input type="time" id="time" />
          </div>

          <div className="form-group">
            <label htmlFor="reporter">提報人：</label>
            <input type="text" id="reporter" />
          </div>
          <div className="form-group">
            <label htmlFor="participants">參加人員：</label>
            <input type="text" id="participants" />
          </div>

          <div className="form-group">
            <label htmlFor="location">地點：</label>
            <input type="text" id="location" />
          </div>
          <div className="form-group">
            <label htmlFor="fileUpload">檔案上傳：</label>
            <input type="file" id="fileUpload" />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            送出
          </button>
          <button type="reset" className="btn-secondary">
            重設
          </button>
        </div>
      </form>
    </div>
  );
}
