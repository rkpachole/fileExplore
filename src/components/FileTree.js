import React, { useState } from 'react';

const FileTree = ({ fileSystem, onFolderSelect }) => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (name) => {
    setExpanded((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const handleFileSelect = (file) => {
    // Handle file selection logic if needed
  };

  const renderTree = (node) => (
    <li key={node.name}>
      <div className="flex items-center">
        {node.type === 'folder' && (
          <button onClick={() => handleToggle(node.name)}>
            {expanded[node.name] ? '▼' : '▶'}
          </button>
        )}
        <span onClick={() => node.type === 'folder' ? onFolderSelect(node) : handleFileSelect(node)} className="ml-2 cursor-pointer">
          {node.type === 'folder' ? '📁' : '📄'} {node.name}
        </span>
      </div>
      {node.children && expanded[node.name] && (
        <ul className="pl-4">
          {node.children.map((child) => renderTree(child))}
        </ul>
      )}
    </li>
  );

  return (
    <ul>
      {fileSystem.children.map((node) => renderTree(node))}
    </ul>
  );
};

export default FileTree;
