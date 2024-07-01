import React, { useState } from 'react';

const FileOperations = ({ onCreateFile, onDeleteFile, onRenameFile }) => {
  const [newFileName, setNewFileName] = useState('');
  const [renameFileName, setRenameFileName] = useState({ oldName: '', newName: '' });

  const handleCreateFile = () => {
    onCreateFile(newFileName, 'file');
    setNewFileName('');
  };

  const handleCreateFolder = () => {
    onCreateFile(newFileName, 'folder');
    setNewFileName('');
  };

  const handleDeleteFile = () => {
    onDeleteFile(newFileName);
    setNewFileName('');
  };

  const handleRenameFile = () => {
    onRenameFile(renameFileName.oldName, renameFileName.newName);
    setRenameFileName({ oldName: '', newName: '' });
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-200">
      <input
        type="text"
        value={newFileName}
        onChange={(e) => setNewFileName(e.target.value)}
        placeholder="New file/folder name"
        className="border p-1"
      />
      <button onClick={handleCreateFile} className="ml-2 bg-blue-500 text-white p-1">Create File</button>
      <button onClick={handleCreateFolder} className="ml-2 bg-blue-500 text-white p-1">Create Folder</button>
      <button onClick={handleDeleteFile} className="ml-2 bg-red-500 text-white p-1">Delete</button>
      
      <div className="mt-4">
        <input
          type="text"
          value={renameFileName.oldName}
          onChange={(e) => setRenameFileName({ ...renameFileName, oldName: e.target.value })}
          placeholder="Old file/folder name"
          className="border p-1"
        />
        <input
          type="text"
          value={renameFileName.newName}
          onChange={(e) => setRenameFileName({ ...renameFileName, newName: e.target.value })}
          placeholder="New file/folder name"
          className="border p-1 ml-2" />
          <button onClick={handleRenameFile} className="ml-2 bg-yellow-500 text-white p-1">Rename</button>
</div>
</div>
);
};

export default FileOperations;
