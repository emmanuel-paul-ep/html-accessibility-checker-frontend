import React from "react";

function AccessibilityResults({ data }) {
  return (
    <div className="mt-6 text-left">
      <h2 className="text-xl font-semibold text-gray-800">Accessibility Report</h2>
      <p className="text-gray-600">
        Compliance Score: <strong className="text-blue-600">{data.score}%</strong>
      </p>

      <div className="mt-4">
        <h3 className="font-semibold text-red-600">Issues Detected:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
        {data.issues.length === 0 ? (
          <li className="text-green-600 font-semibold">No issues found! 🎉</li>
        ) : (
          data.issues.map((issue, index) => (
            <li key={index} className="bg-red-100 p-3 rounded-lg shadow-md text-left border-l-4 border-red-500">
              {issue.description}
      </li>
    ))
  )}
</ul>

      </div>
    </div>
  );
}

export default AccessibilityResults;
