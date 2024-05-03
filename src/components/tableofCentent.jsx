import React from 'react'

function TableofContent({ content }) {
  // Filter the content to get only the sections with type "header"
  const headers = JSON.parse(content).filter(section => section.type === 'header');

  return (
    <div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
      <div className="mx-auto text-xl font-semibold"><strong>Table of content</strong></div>
      <ul className="mt-2 list-disc px-2 pl-6">
        {headers.map((header, index) => {
          const headerClass = header.data.level === 2 ? " font-semibold" : "text-sm";
          return (
            <li key={index}>
              <a className={`block hover:bg-gray-200 px-2 py-1 rounded ${headerClass}`} href={`#${header.data.text.replace(/\s+/g, '-').toLowerCase()}`}>
                {header.data.text}
              </a>
            </li> 
          )
        })}
      </ul>
    </div>
  )
}

export default TableofContent