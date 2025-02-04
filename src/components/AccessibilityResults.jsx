import React from "react";

function AccessibilityResults({ data }) {
  return (
    <div className="mt-5 p-4 bg-white rounded border">
      <h2 className="text-dark">Accessibility Report</h2>
      <p className="text-muted">
        Compliance Score: <strong className="text-primary">{data.score}%</strong>
      </p>

      <div className="mt-4">
        <h3 className="text-danger">Issues Detected:</h3>

        {data.issues.length === 0 ? (
          <p className="text-success font-weight-bold mt-2">No issues found! 🎉</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped mt-3">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Issue</th>
                  <th>Affected Element</th>
                  <th className="text-center">Line</th>
                </tr>
              </thead>
              <tbody>
                {data.issues.map((issue, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{index + 1}</td>
                    <td>{issue.description}</td>
                    <td>
                      {issue.element
                        ? typeof issue.element === "object"
                          ? JSON.stringify(issue.element, null, 2) // Convert object to formatted string
                          : <code className="bg-light p-1 rounded">{issue.element}</code>
                        : "N/A"}
                    </td>
                    <td className="text-center">{issue.line !== "N/A" ? `Line ${issue.line}` : "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccessibilityResults;
