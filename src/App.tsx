// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import DepartmentList from './components/DepartmentList';
// import Home from './components/Home';
// import EmployeeList from './components/EmployeeList';


// const App: React.FC = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/departments">Departments</Link></li>
//           <li><Link to="/employees">Employees</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/departments" element={<DepartmentList />} />
//         <Route path="/employees" element={<EmployeeList />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Home as HomeIcon, People as PeopleIcon, Work as WorkIcon } from '@mui/icons-material';
import Home from './components/Home';
import DepartmentList from './components/DepartmentList';
import EmployeeList from './components/EmployeeList';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Fanush
          </Typography>
          <Button color="inherit" component="a" href="/">
            <HomeIcon sx={{ mr: 1 }} />
            Home
          </Button>
          <Button color="inherit" component="a" href="/departments">
            <PeopleIcon sx={{ mr: 1 }} />
            Departments
          </Button>
          <Button color="inherit" component="a" href="/employees">
            <WorkIcon sx={{ mr: 1 }} />
            Employees
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
