// import React, { useEffect, useState } from 'react';
// import { google } from 'googleapis';

// const CLIENT_ID = 'YOUR_CLIENT_ID';
// const API_KEY = 'YOUR_API_KEY';
// const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
// const SCOPES = 'https://www.googleapis.com/auth/drive.readonly';

// const GoogleDriveResourceFetcher = () => {
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [fileContent, setFileContent] = useState('');

//   useEffect(() => {
//     const loadGoogleAPI = async () => {
//       await new Promise((resolve) => {
//         const script = document.createElement('script');
//         script.src = 'https://apis.google.com/js/api.js';
//         script.onload = resolve;
//         document.body.appendChild(script);
//       });

//       await new Promise((resolve) => {
//         console.log('resolve', resolve, window);
        
//         window.gapi?.load('client:auth2', resolve);
//       });

//       await window.gapi?.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES,
//       });

//       const authInstance = window.gapi?.auth2.getAuthInstance();
//       console.log('authInstance', authInstance);
      
//       authInstance.isSignedIn.listen(updateSigninStatus);
//       updateSigninStatus(authInstance.isSignedIn.get());
//     };

//     const updateSigninStatus = (isSignedIn) => {
//       setIsAuthorized(isSignedIn);
//       if (isSignedIn) {
//         console.log('isSignedIn', isSignedIn);
//         // fetchFileContent();
//       }
//     };

//     const fetchFileContent = async () => {
//       try {
//         const drive = google.drive({ version: 'v3', auth: window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token });
//         const fileId = 'YOUR_FILE_ID'; // 替换为你要获取的文件的 ID
//         // 8998846555-m8k6cbkvifam9a729486bqjf32b6tl3g.apps.googleusercontent.com
//         // https://drive.google.com/file/d/1S0-GErFdQxaPClNlm7-9w_BmaHGshFJq/view?usp=drive_link
//         const response = await drive.files.get({ fileId, alt: 'media' });
//         setFileContent(response.data);
//       } catch (error) {
//         console.error('Error fetching file content:', error);
//       }
//     };

//     loadGoogleAPI();
//   }, []);

//   const handleSignIn = () => {
//     window.gapi.auth2.getAuthInstance().signIn();
//   };

//   const handleSignOut = () => {
//     window.gapi.auth2.getAuthInstance().signOut();
//   };

//   return (
//     <div>
//       {isAuthorized ? (
//         <div>
//           <button onClick={handleSignOut}>Sign Out</button>
//           <pre>{fileContent}</pre>
//         </div>
//       ) : (
//         <button onClick={handleSignIn}>Sign In with Google</button>
//       )}
//     </div>
//   );
// };

// export default GoogleDriveResourceFetcher;