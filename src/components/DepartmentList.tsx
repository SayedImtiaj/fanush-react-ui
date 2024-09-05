// import React, { useEffect, useState } from 'react';
// import { Department } from '../types/Department';
// import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from '../services/DepartmentService';

// const DepartmentList: React.FC = () => {
//   const [departments, setDepartments] = useState<Department[]>([]);
//   const [newDepartment, setNewDepartment] = useState<Partial<Department>>({
//     departmentName: '',
//     isActive: true,
//   });
//   const [editMode, setEditMode] = useState<number | null>(null);

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = async () => {
//     const data = await getDepartments();
//     setDepartments(data);
//   };

//   const handleCreate = async () => {
//     await createDepartment(newDepartment as Department);
//     setNewDepartment({ departmentName: '', isActive: true });
//     fetchDepartments();
//   };

//   const handleUpdate = async (id: number) => {
//     await updateDepartment(id, newDepartment as Department);
//     setEditMode(null);
//     fetchDepartments();
//   };

//   const handleDelete = async (id: number) => {
//     await deleteDepartment(id);
//     fetchDepartments();
//   };

//   return (
//     <div>
//       <h2>Departments</h2>
//       <ul>
//         {departments.map((department) => (
//           <li key={department.departmentId}>
//             {editMode === department.departmentId ? (
//               <>
//                 <input
//                   type="text"
//                   value={newDepartment.departmentName}
//                   onChange={(e) => setNewDepartment({ ...newDepartment, departmentName: e.target.value })}
//                 />
//                 <button onClick={() => handleUpdate(department.departmentId)}>Save</button>
//               </>
//             ) : (
//               <>
//                 {department.departmentName} - {department.isActive ? 'Active' : 'Inactive'}
//                 <button onClick={() => { setEditMode(department.departmentId); setNewDepartment(department); }}>Edit</button>
//                 <button onClick={() => handleDelete(department.departmentId)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       <h3>Create New Department</h3>
//       <input
//         type="text"
//         value={newDepartment.departmentName}
//         placeholder="Department Name"
//         onChange={(e) => setNewDepartment({ ...newDepartment, departmentName: e.target.value })}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={newDepartment.isActive}
//           onChange={(e) => setNewDepartment({ ...newDepartment, isActive: e.target.checked })}
//         />
//         Active
//       </label>
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default DepartmentList;



// import React, { useEffect, useState } from 'react';
// import { Department } from '../types/Department';
// import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from '../services/DepartmentService';

// const DepartmentList: React.FC = () => {
//   const [departments, setDepartments] = useState<Department[]>([]);
//   const [newDepartment, setNewDepartment] = useState<Partial<Department>>({
//     departmentName: '',
//     isActive: true,
//   });
//   const [editMode, setEditMode] = useState<number | null>(null);
//   const [editDepartment, setEditDepartment] = useState<Partial<Department>>({
//     departmentName: '',
//     isActive: true,
//   });

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   // Fetch all departments
//   const fetchDepartments = async () => {
//     const data = await getDepartments();
//     setDepartments(data);
//   };

//   // Handle creating a new department
//   const handleCreate = async () => {
//     if (newDepartment.departmentName?.trim() === '') {
//       alert("Department name cannot be empty.");
//       return;
//     }
//     await createDepartment(newDepartment as Department);
//     setNewDepartment({ departmentName: '', isActive: true });
//     fetchDepartments();
//   };

//   // Handle updating an existing department
//   const handleUpdate = async (id: number) => {
//     if (editDepartment.departmentName?.trim() === '') {
//       alert("Department name cannot be empty.");
//       return;
//     }
//     await updateDepartment(id, editDepartment as Department);
//     setEditMode(null);
//     fetchDepartments();
//   };

//   // Handle deleting a department
//   const handleDelete = async (id: number) => {
//     await deleteDepartment(id);
//     fetchDepartments();
//   };

//   return (
//     <div>
//       <h2>Departments</h2>
//       <ul>
//         {departments.map((department) => (
//           <li key={department.departmentId}>
//             {editMode === department.departmentId ? (
//               <>
//                 <input
//                   type="text"
//                   value={editDepartment.departmentName}
//                   onChange={(e) => setEditDepartment({ ...editDepartment, departmentName: e.target.value })}
//                 />
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={editDepartment.isActive}
//                     onChange={(e) => setEditDepartment({ ...editDepartment, isActive: e.target.checked })}
//                   />
//                   Active
//                 </label>
//                 <button onClick={() => handleUpdate(department.departmentId)}>Save</button>
//                 <button onClick={() => setEditMode(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 {department.departmentName} - {department.isActive ? 'Active' : 'Inactive'}
//                 <button
//                   onClick={() => {
//                     setEditMode(department.departmentId);
//                     setEditDepartment(department);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(department.departmentId)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       <h3>Create New Department</h3>
//       <input
//         type="text"
//         value={newDepartment.departmentName}
//         placeholder="Department Name"
//         onChange={(e) => setNewDepartment({ ...newDepartment, departmentName: e.target.value })}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={newDepartment.isActive}
//           onChange={(e) => setNewDepartment({ ...newDepartment, isActive: e.target.checked })}
//         />
//         Active
//       </label>
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default DepartmentList;





// import React, { useEffect, useState } from 'react';
// import { Department } from '../types/Department';
// import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from '../services/DepartmentService';
// import { Button, Checkbox, FormControlLabel, TextField, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Cancel';

// const DepartmentList: React.FC = () => {
//   const [departments, setDepartments] = useState<Department[]>([]);
//   const [newDepartment, setNewDepartment] = useState<Partial<Department>>({
//     departmentName: '',
//     isActive: true,
//   });
//   const [editMode, setEditMode] = useState<number | null>(null);
//   const [editDepartment, setEditDepartment] = useState<Partial<Department>>({
//     departmentName: '',
//     isActive: true,
//   });

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = async () => {
//     const data = await getDepartments();
//     setDepartments(data);
//   };

//   const handleCreate = async () => {
//     if (newDepartment.departmentName?.trim() === '') {
//       alert("Department name cannot be empty.");
//       return;
//     }
//     await createDepartment(newDepartment as Department);
//     setNewDepartment({ departmentName: '', isActive: true });
//     fetchDepartments();
//   };

//   const handleUpdate = async (id: number) => {
//     if (editDepartment.departmentName?.trim() === '') {
//       alert("Department name cannot be empty.");
//       return;
//     }
//     await updateDepartment(id, editDepartment as Department);
//     setEditMode(null);
//     fetchDepartments();
//   };

//   const handleDelete = async (id: number) => {
//     await deleteDepartment(id);
//     fetchDepartments();
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
//       <Typography variant="h4" gutterBottom align="center">
//         Departments
//       </Typography>
//       <List>
//         {departments.map((department) => (
//           <ListItem key={department.departmentId} secondaryAction={
//             editMode === department.departmentId ? (
//               <>
//                 <IconButton edge="end" aria-label="save" onClick={() => handleUpdate(department.departmentId)}>
//                   <SaveIcon />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="cancel" onClick={() => setEditMode(null)}>
//                   <CancelIcon />
//                 </IconButton>
//               </>
//             ) : (
//               <>
//                 <IconButton edge="end" aria-label="edit" onClick={() => { setEditMode(department.departmentId); setEditDepartment(department); }}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(department.departmentId)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </>
//             )
//           }>
//             {editMode === department.departmentId ? (
//               <div style={{ width: '100%' }}>
//                 <TextField
//                   label="Department Name"
//                   variant="outlined"
//                   fullWidth
//                   value={editDepartment.departmentName}
//                   onChange={(e) => setEditDepartment({ ...editDepartment, departmentName: e.target.value })}
//                   style={{ marginBottom: 16 }}
//                 />
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={editDepartment.isActive}
//                       onChange={(e) => setEditDepartment({ ...editDepartment, isActive: e.target.checked })}
//                     />
//                   }
//                   label="Active"
//                 />
//               </div>
//             ) : (
//               <ListItemText
//                 primary={department.departmentName}
//                 secondary={department.isActive ? 'Active' : 'Inactive'}
//               />
//             )}
//           </ListItem>
//         ))}
//       </List>

//       <Typography variant="h6" gutterBottom align="center">
//         Create New Department
//       </Typography>
//       <TextField
//         label="Department Name"
//         variant="outlined"
//         fullWidth
//         value={newDepartment.departmentName}
//         onChange={(e) => setNewDepartment({ ...newDepartment, departmentName: e.target.value })}
//         style={{ marginBottom: 16 }}
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={newDepartment.isActive}
//             onChange={(e) => setNewDepartment({ ...newDepartment, isActive: e.target.checked })}
//           />
//         }
//         label="Active"
//       />
//       <Button variant="contained" color="primary" onClick={handleCreate}>
//         Create
//       </Button>
//     </div>
//   );
// };

// export default DepartmentList;


import React, { useEffect, useState } from 'react';
import { Department } from '../types/Department';
import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from '../services/DepartmentService';
import { Button, TextField, Checkbox, FormControlLabel, List, ListItem, ListItemText, IconButton, Typography, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const DepartmentList: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDepartment, setNewDepartment] = useState<Partial<Department>>({
    departmentName: '',
    isActive: true,
  });
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editDepartment, setEditDepartment] = useState<Partial<Department>>({
    departmentName: '',
    isActive: true,
  });

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data);
  };

  const handleCreate = async () => {
    if (newDepartment.departmentName?.trim() === '') {
      alert("Department name cannot be empty.");
      return;
    }
    await createDepartment(newDepartment as Department);
    setNewDepartment({ departmentName: '', isActive: true });
    fetchDepartments();
  };

  const handleUpdate = async (id: number) => {
    if (editDepartment.departmentName?.trim() === '') {
      alert("Department name cannot be empty.");
      return;
    }
    await updateDepartment(id, editDepartment as Department);
    setEditMode(null);
    fetchDepartments();
  };

  const handleDelete = async (id: number) => {
    await deleteDepartment(id);
    fetchDepartments();
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center">Departments</Typography>
      
      <List>
        {departments.map((department) => (
          <ListItem key={department.departmentId} style={{ marginBottom: 10, backgroundColor: '#f5f5f5', borderRadius: 4 }}>
            {editMode === department.departmentId ? (
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <TextField
                  label="Department Name"
                  variant="outlined"
                  value={editDepartment.departmentName}
                  onChange={(e) => setEditDepartment({ ...editDepartment, departmentName: e.target.value })}
                  fullWidth
                  style={{ marginBottom: 10 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={editDepartment.isActive}
                      onChange={(e) => setEditDepartment({ ...editDepartment, isActive: e.target.checked })}
                    />
                  }
                  label="Active"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={() => handleUpdate(department.departmentId)}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<CancelIcon />}
                    onClick={() => setEditMode(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <ListItemText
                primary={department.departmentName}
                secondary={department.isActive ? 'Active' : 'Inactive'}
                style={{ flexGrow: 1 }}
              />
            )}
            {editMode !== department.departmentId && (
              <div>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => { setEditMode(department.departmentId); setEditDepartment(department); }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(department.departmentId)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            )}
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom>Create New Department</Typography>
      <div style={{ marginBottom: 20 }}>
        <TextField
          label="Department Name"
          variant="outlined"
          value={newDepartment.departmentName}
          onChange={(e) => setNewDepartment({ ...newDepartment, departmentName: e.target.value })}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={newDepartment.isActive}
              onChange={(e) => setNewDepartment({ ...newDepartment, isActive: e.target.checked })}
            />
          }
          label="Active"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreate}
        >
          Create
        </Button>
      </div>
    </Paper>
  );
};

export default DepartmentList;
