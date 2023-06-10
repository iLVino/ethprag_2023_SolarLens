// import React, { useEffect, useState } from 'react';
// import { client, recommendProfiles } from '../api';
// import { feedPosts } from '../pages/api/allApis';
// import ProfileStyles from '../styles/Profile.module.css';
// import Link from 'next/link';


// const profiles = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const fetchProfiles = async () => {
//     try {
//       const response = await client.query(recommendProfiles).toPromise();
//       console.log( response );
//       setProfiles(response.data.recommendProfiles);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// //   return (
   
// //   );

// };

// export default Feed;
