// app/blog/[id]/SingleBlogContent.js
"use client";

import { FaCopy } from "react-icons/fa";

export default function SingleBlogContent({ description }) {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // Split the description into content and code segments
  const descriptionSegments = description.split(/(<pre><code>.*?<\/code><\/pre>)/g);

  return (
    <div className="prose dark:prose-dark max-w-3xl mx-auto text-lg">
      {descriptionSegments.map((segment, index) => {
        // If the segment is a code snippet, render it with a copy button
        if (segment.startsWith("<pre><code>")) {
          const code = segment.replace(/<pre><code>|<\/code><\/pre>/g, '');
          return (
            <div key={index} className="my-4 relative">
              <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <code>{code}</code>
              </pre>
              <button
                onClick={() => handleCopy(code)}
                className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded hover:bg-gray-600"
                title="Copy to clipboard"
              >
                <FaCopy />
              </button>
            </div>
          );
        }

        // If it's not a code snippet, render it as HTML
        return (
          <div key={index} dangerouslySetInnerHTML={{ __html: segment }} />
        );
      })}
    </div>
  );
}
