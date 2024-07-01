import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createFile, deleteFile, renameFile } from '../store/fileSystemSlice';
import FileTree from './FileTree';
import FileViewer from './FileViewer';
import FileOperations from './FileOperations';


const FileExplorer = () => {
  const fileSystem = useSelector((state) => state.fileSystem);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const dispatch = useDispatch();

 const handleFolderSelect = (folder) => {
    setSelectedFolder(folder);
  };

  const handleCreateFile = (name, type) => {
    dispatch(createFile({ name, type }));
  };

  const handleDeleteFile = (name) => {
    dispatch(deleteFile({ name }));
  };

  const handleRenameFile = (oldName, newName) => {
    dispatch(renameFile({ oldName, newName }));
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4">
        <FileTree fileSystem={fileSystem} onFolderSelect={handleFolderSelect} />
      </div>
      <div className="w-3/4 p-4">
        <FileViewer folder={selectedFolder}  onDeleteFile={handleDeleteFile} />
      </div>
      <FileOperations 
        onCreateFile={handleCreateFile} 
        onDeleteFile={handleDeleteFile} 
        onRenameFile={handleRenameFile} 
      />
    </div>
  );
};

export default FileExplorer;
