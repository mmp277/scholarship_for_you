// import React, { useState, useEffect } from 'react';
// import {
//   Card,
//   Grid,
//   Typography,
//   Button,
//   CircularProgress,
//   useTheme,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from '../utils/axiosInstance';

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const theme = useTheme();

//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/users/me');
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const calculateProfileCompletion = () => {
//     const requiredFields = [
//       'firstName',
//       'lastName',
//       'email',
//       'educationLevel',
//       'currentInstitution',
//       'GPA',
//       'dateOfBirth',
//       'location.country',
//       'income',
//       'casteCategory',
//       'gender',
//       'major',
//     ];

//     const filled = requiredFields.filter((field) => {
//       const [main, sub] = field.split('.');
//       return sub ? !!userData[main]?.[sub] : !!userData[main];
//     });

//     return (filled.length / requiredFields.length) * 100;
//   };

//   const handleEditProfile = () => {
//     navigate('/edit-profile');
//   };

//   if (loading) {
//     return (
//       <div style={{ padding: 24, textAlign: 'center', marginTop: 50 }}>
//         <CircularProgress />
//       </div>
//     );
//   }

//   const {
//     firstName,
//     email,
//     educationLevel,
//     GPA,
//     major,
//     dateOfBirth,
//     gender,
//     location,
//     income,
//     casteCategory,
//   } = userData;

//   return (
//     <div style={{ padding: 24 }}>
//       <Grid container spacing={2} style={{justifyContent:'center'}}>
//         <Grid item xs={12}>
//           <Card sx={{ padding: 3 }}>
//             <Typography variant="h4" gutterBottom>
//               Welcome, {firstName || 'User'}!
//             </Typography>

//             <div style={{ marginTop: 16, marginBottom: 16 }}>
//               <div
//                 style={{
//                   height: 10,
//                   backgroundColor: '#e0e0e0',
//                   borderRadius: 5,
//                   overflow: 'hidden',
//                 }}
//               >
//                 <div
//                   style={{
//                     height: '100%',
//                     width: `${calculateProfileCompletion()}%`,
//                     backgroundColor: theme.palette.primary.main,
//                     transition: 'width 0.3s ease-in-out',
//                   }}
//                 />
//               </div>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 Profile Completion: {calculateProfileCompletion().toFixed(0)}%
//               </Typography>
//             </div>

//             <Typography variant="body1" gutterBottom>Email: {email}</Typography>
//             <Typography variant="body1" gutterBottom>
//               Education: {educationLevel}
//             </Typography>
//             {GPA && (
//               <Typography variant="body1" gutterBottom>
//                 GPA: {GPA}
//               </Typography>
//             )}
//             {major && (
//               <Typography variant="body1" gutterBottom>
//                 Major: {major}
//               </Typography>
//             )}
//             {dateOfBirth && (
//               <Typography variant="body1" gutterBottom>
//                 DOB: {dateOfBirth}
//               </Typography>
//             )}
//             {gender && (
//               <Typography variant="body1" gutterBottom>
//                 Gender: {gender}
//               </Typography>
//             )}
//             {location?.country && (
//               <Typography variant="body1" gutterBottom>
//                 Location: {location.city}, {location.state}, {location.country}
//               </Typography>
//             )}
//             {income && (
//               <Typography variant="body1" gutterBottom>
//                 Income: ₹{income}
//               </Typography>
//             )}
//             {casteCategory && (
//               <Typography variant="body1" gutterBottom>
//                 Caste Category: {casteCategory}
//               </Typography>
//             )}

//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleEditProfile}
//               fullWidth
//               sx={{ mt: 2 }}
//             >
//               Edit Profile
//             </Button>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default UserDashboard;


import React, { useState, useEffect } from 'react';
import {
  Card,
  Grid,
  Typography,
  Button,
  CircularProgress,
  useTheme,
  Container,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance';

const UserDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/users/me');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const calculateProfileCompletion = () => {
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'educationLevel',
      'currentInstitution',
      'GPA',
      'dateOfBirth',
      'location.country',
      'income',
      'casteCategory',
      'gender',
      'major',
    ];

    const filled = requiredFields.filter((field) => {
      const [main, sub] = field.split('.');
      return sub ? !!userData[main]?.[sub] : !!userData[main];
    });

    return (filled.length / requiredFields.length) * 100;
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress size={80} />
      </Box>
    );
  }

  const {
    firstName,
    email,
    educationLevel,
    GPA,
    major,
    dateOfBirth,
    gender,
    location,
    income,
    casteCategory,
  } = userData;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} md={10} lg={8}>
          <Card 
            sx={{ 
              p: 6,
              borderRadius: 4,
              boxShadow: 10,
              background: theme.palette.mode === 'dark' ? 
                'linear-gradient(rgba(30, 30, 30, 0.98), rgba(40, 40, 40, 0.98))' : 
                'linear-gradient(rgba(245, 245, 245, 0.98), rgba(255, 255, 255, 0.98))',
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: theme.palette.primary.main }}>
              Welcome, {firstName || 'User'}!
            </Typography>

            <Box sx={{ mb: 6 }}>
              <Box sx={{ 
                height: 16, 
                backgroundColor: '#e0e0e0', 
                borderRadius: 8, 
                overflow: 'hidden',
                mb: 2
              }}>
                <Box
                  sx={{
                    height: '100%',
                    width: `${calculateProfileCompletion()}%`,
                    backgroundColor: theme.palette.primary.main,
                    transition: 'width 0.5s ease-in-out',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                Profile Completion: {calculateProfileCompletion().toFixed(0)}%
              </Typography>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Personal Information
                </Typography>
                <Typography variant="h6" gutterBottom>Email: {email}</Typography>
                {dateOfBirth && (
                  <Typography variant="h6" gutterBottom>
                    Date of Birth: {dateOfBirth}
                  </Typography>
                )}
                {gender && (
                  <Typography variant="h6" gutterBottom>
                    Gender: {gender}
                  </Typography>
                )}
                {location?.country && (
                  <Typography variant="h6" gutterBottom>
                    Location: {location.city}, {location.state}, {location.country}
                  </Typography>
                )}
                {income && (
                  <Typography variant="h6" gutterBottom>
                    Income: ₹{income}
                  </Typography>
                )}
                {casteCategory && (
                  <Typography variant="h6" gutterBottom>
                    Caste Category: {casteCategory}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Academic Information
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Education: {educationLevel}
                </Typography>
                {GPA && (
                  <Typography variant="h6" gutterBottom>
                    GPA: {GPA}
                  </Typography>
                )}
                {major && (
                  <Typography variant="h6" gutterBottom>
                    Major: {major}
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              onClick={handleEditProfile}
              fullWidth
              sx={{ mt: 6, py: 2, fontSize: '1.2rem' }}
            >
              Edit Profile
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
