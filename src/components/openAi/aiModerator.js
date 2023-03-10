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

// This is the function that makes the API call to verify the prompt doesnt violate the policy
// The Img generator has and intermiedary moderator this is a fail safe
export async function ruleOneCheck(prompt){
  try{
      // API Call to Open AI
      const apiCall = await openAI.createModeration({
        input: prompt,
      })
      // if it doesnt get flag
      if(apiCall.data.results[0].categories['sexual/minors'] === false){
        // send a 200
        let response = {
          status:200, 
        }
        return response
      }else{
        // the prompt is flagged
        let response = {
          status:400, 
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
        error:err
      }
      return response
    }
}