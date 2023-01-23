// OPEN AI API imports
import { Configuration, OpenAIApi } from 'openai';

// Other NPM imports
// import { writeFileSync } from 'fs';
// import inquirer from 'inquirer'

// Auth for Node Api Calls
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_AI_KEY,
})

// API SDK Function call
const openAI =  new OpenAIApi(configuration);


export async function pedoCheck(prompt){
  try{
      // API Call to Open AI
      const apiCall = await openAI.createModeration({
        input: prompt
      })
      if(apiCall.data.results[0].categories['sexual/minors'] === false){
        return false
      }else{
        return apiCall
      }
    }
    // If the call fails this is a fail safe so the app doesnt break
    catch(err){
      
      let response = {
        status:500, 
        prompt: prompt,
        type: 'Error',
        error:err
      }
      return response
    }
}