const callPythonLambda = async (option, prompt) =>{
 const rawResponse = await fetch(`https://2jh3oz01gh.execute-api.us-west-2.amazonaws.com/default` , {
 method: 'POST',
 headers: {
 'Accept': 'application/json',
 'Content-Type': 'application/json',
 'Prompt': prompt
 },
 });
 const content = await rawResponse.json();
 console.log(content);
}
callPythonLambda(2, 'hello world')
