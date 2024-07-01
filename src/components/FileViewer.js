import React, { useState } from 'react';

const FileViewer = ({ folder, onDeleteFile }) => {
    const [expandedFolders, setExpandedFolders] = useState([]);

    const handleToggle = (folderName) => {
        if (expandedFolders.includes(folderName)) {
            setExpandedFolders(expandedFolders.filter(name => name !== folderName));
        } else {
            setExpandedFolders([...expandedFolders, folderName]);
        }
    };

    const handleDelete = (item) => {
        onDeleteFile(item); 
        console.log(item)// Call the onDeleteFile function passed from parent component
    };

    return (
        <div>
            <h2 className="text-xl font-bold">{folder ? folder.name : 'Select a folder to view its contents.'}</h2>
            {folder && folder.children && (
                <ul>
                    {folder.children.map((item) => (
                        <li key={item.name}>
                            {item.type === 'folder' ? (
                                <div>
                                    <span onClick={() => handleToggle(item.name)} className="cursor-pointer">
                                        📁 {item.name} 
                                    </span>
                                    
                                    {expandedFolders.includes(item.name) && (
                                        <ul>
                                            {item.children.map((childItem) => (
                                                <li key={childItem.name}>
                                                    {childItem.type === 'folder' ? (
                                                        <div>
                                                            <span onClick={() => handleToggle(childItem.name)} className="cursor-pointer">
                                                                📁 {childItem.name} 
                                                            </span>
                                                            
                                                        </div>
                                                    ) : (
                                                        <span> 📄 {childItem.name} </span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <span> 📄 {item.name} </span>
                                    
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileViewer;
