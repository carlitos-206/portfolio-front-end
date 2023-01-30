// NOTE FOR FUTURE EMPLOYER: 
//    I TEND TO LIKE FIREBASE TO BE SEPERATE FOR MANAGEMENT 
//    BUT TO ENSURE THE IMAGE DOESNT CORRUPT ILL HANDLE THE UPDLOAD HERE

// Firbase Imports
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from 'firebase/storage';
// import { imgDB } from '../firebaseDb/firebaseAuth';

// OPEN AI API imports
import { Configuration, OpenAIApi } from 'openai';
// import axios from 'axios';
// Hides the API KEY -- DO NOT REMOVE
// require('dotenv').config()


import { ruleOneCheck } from './aiModerator';
// Other NPM imports
// import { writeFileSync } from 'fs';
// import inquirer from 'inquirer'

// Auth for Node Api Calls
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_AI_KEY
})

// API SDK Function call
const openAI =  new OpenAIApi(configuration);











// // This function Creates the img file and sends it to firebase storage
// async function img_builder_and_firebase_storage_send_off(url, prompt){
//   // Img is being created here
//   console.log(url)
//   try{
//     const img_fetch_response = await axios.get(url, { mode: 'no-cors'})
//     console.log(img_fetch_response)
//     const blob = await img_fetch_response.blob()
//     const img = new File([blob], 'test.png', {type: 'image/jpg'} )
    
//     // Firebase Send Off
//     function uploadFileToStorage() {
//       return new Promise((resolve, reject) => {
//         if (img !== null || img !== '') {
//           let time= new Date()
//           let stamp = time.getMilliseconds()
//           const imageRef = ref(imgDB, `img/${prompt.split(' ').join('')}_img____${stamp}`);
//           uploadBytes(imageRef, img).then((snapshot) => {
//             getDownloadURL(snapshot.ref).then((url) => {
//               resolve(url.toString());
//             });
//           });
//         } else {
//           reject(new Error('file missing'));
//         }
//       });
//     }
  
//     let storageResponse = await uploadFileToStorage()
//     if(storageResponse){
//       console.log(storageResponse)
//     }
//   }catch(err){
//     return {
//       error: err,
//       url: url
//     }
//   }
// }















export async function userAiArtRequest(prompt){
  let img_url;
  let apiCall;
  const moderationCheck = await ruleOneCheck(prompt)
  try{
      if(moderationCheck === false){
        // API Call to Open AI
        apiCall = await openAI.createImage({
          prompt,
          n:1,
          size: '1024x1024'
        })
        img_url = apiCall.data.data[0].url
        // The Img builder function also sends it to Google Firebase Storage
        // let storageResponse = await img_builder_and_firebase_storage_send_off(img_url, prompt)
        // if(storageResponse.status === 200){
          let response = {
          status: 200,
          url: img_url,
          full_data:apiCall,
          prompt: prompt,
          moderationCheck: moderationCheck
          }
          return response
        }else if(moderationCheck.status === 400){
          let response = {
            status: 400,
            prompt: prompt,
            type: "Error",
            error: "Violation of rule 1"
          }
          return response
        }
        else{
        let response = {
          status: 400,
          prompt: `User Searched: ${prompt}`,
          type: 'Error',
          moderationCheck: moderationCheck
        }
        return response
      }
    }
    // If the call fails this is a fail safe so the app doesnt break
    catch(err){
      
      let response = {
        status:500, 
        prompt: prompt,
        type: 'Error', 
        error:JSON.parse(err.response.request.response).error.message,
        moderationCheck:moderationCheck,
        url: img_url ?? 'n/a'
      }
      return response
    }
}