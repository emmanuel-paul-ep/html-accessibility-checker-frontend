import React, { useState } from "react";
import axios from "axios";

function FileUpload({ setAccessibilityData }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an HTML file first.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3001/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setAccessibilityData(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to analyze file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="file-upload">
      <label className="file-input">
        <span>{file ? file.name : "Choose an HTML file"}</span>
        <input type="file" accept=".html" onChange={handleFileChange} hidden />
      </label>

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Analyze File"}
      </button>
    </div>
  );
}

export default FileUpload;
