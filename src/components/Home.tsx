// import React from 'react';

// const Home: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to Fanush App</h1>
//       <p>This is the home page.</p>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Paper, Card, CardContent } from '@mui/material';
import { Home as HomeIcon, People as PeopleIcon, Work as WorkIcon } from '@mui/icons-material';

const Home: React.FC = () => {
  return (
    <Container component="main" maxWidth="md" style={{ marginTop: 50 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Fanush
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Manage your departments and employees with ease. Use the navigation below to access different sections.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <HomeIcon color="primary" fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Home
              </Typography>
              <Typography variant="body2">
                Navigate to the home page where you can overview your application.
              </Typography>
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 10 }}
              >
                Go to Home
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <PeopleIcon color="primary" fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Departments
              </Typography>
              <Typography variant="body2">
                View and manage your departments here. Add, update, or delete departments as needed.
              </Typography>
              <Button
                component={Link}
                to="/departments"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 10 }}
              >
                Manage Departments
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <WorkIcon color="primary" fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Employees
              </Typography>
              <Typography variant="body2">
                Manage employee records efficiently. Perform CRUD operations and view employee details.
              </Typography>
              <Button
                component={Link}
                to="/employees"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 10 }}
              >
                Manage Employees
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
