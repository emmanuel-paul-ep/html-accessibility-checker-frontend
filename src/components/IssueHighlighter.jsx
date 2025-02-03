import React from "react";

function IssueHighlighter({ htmlContent, issues }) {
  let highlightedHtml = htmlContent;

  issues.forEach(issue => {
    highlightedHtml = highlightedHtml.replace(issue.element, `<span style="background-color: yellow;">${issue.element}</span>`);
  });

  return (
    <div className="mt-6 border border-gray-300 p-3">
      <h3 className="font-semibold">Highlighted HTML:</h3>
      <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} className="border p-2 bg-gray-50"></div>
    </div>
  );
}

export default IssueHighlighter;
