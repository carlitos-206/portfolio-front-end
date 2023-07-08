import { Configuration, OpenAIApi } from 'openai';

export async function chatConnect(prompt){
  const instructions = prompt;
  
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_AI_KEY
  })
  const openAI =  new OpenAIApi(configuration);
  
  const response = await openAI.createCompletion({
          model: "gpt-3.5-turbo",
          temperature: 0.888,
          max_tokens: 2048,
          frequency_penalty: 0,
          presence_penalty: 0,
          top_p: 1,
          messages: [{role: "system", content: instructions}, {role: "user", content: instructions}], // {role: "assistant", content: ''}
      }, { timeout: 60000 });
  
  // const response_text = response.data.choices[0].message.content.trim();
  console.log(response)
}

export const callPythonLambda = async (option, prompt) =>{
const rawResponse = await fetch(`` , {
method: 'POST',
// mode: 'no-cors',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',  
// 'Prompt': prompt
},
});
const content = await rawResponse.json();
console.log(content);
}
