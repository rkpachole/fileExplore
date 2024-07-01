import { createSlice } from '@reduxjs/toolkit';
import fileSystemData from '../Data/fileSystem.json';

const findNode = (node, name) => {
  if (node.name === name) return node;
  if (node.children) {
    for (let child of node.children) {
      const result = findNode(child, name);
      if (result) return result;
    }
  }
  return null;
};

const fileSystemSlice = createSlice({
  name: 'fileSystem',
  initialState: fileSystemData,
  reducers: {
    createFile: (state, action) => {
      const { name, type } = action.payload;
      const newNode = { name, type, children: type === 'folder' ? [] : undefined };
      state.children.push(newNode);
    },
    deleteFile: (state, action) => {
      const { name } = action.payload;
      console.log(action)
      const deleteNode = (node) => {
        if (node.children) {
          node.children = node.children.filter(child => child.name !== name);
          node.children.forEach(child => deleteNode(child));
        }
      };

      deleteNode(state.fileSystem);
     
    },
    renameFile: (state, action) => {
      const { oldName, newName } = action.payload;
      const node = findNode(state, oldName);
      if (node) node.name = newName;
    }
  }
});

export const { createFile, deleteFile, renameFile } = fileSystemSlice.actions;
export default fileSystemSlice.reducer;
