import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import AccessibilityResults from "./components/AccessibilityResults";
import "./assets/styles.css"; // Import global styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [accessibilityData, setAccessibilityData] = useState(null);

  return (
    <div className="app-container">
      <h1>HTML Accessibility Checker</h1>
      <FileUpload setAccessibilityData={setAccessibilityData} />
      {accessibilityData && <AccessibilityResults data={accessibilityData} />}
    </div>
  );
}

export default App;
