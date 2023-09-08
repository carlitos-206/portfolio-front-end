import React from "react";
import apiGatewayLogo from "../../../images/tech/awsAPIGateway.png"
import axios from "axios";
export default function OpenAIArticle(){

    // const[chatInput, setChatInput] = useState(null);
  
    let btn = document.getElementById('send-btn')
  
    document.addEventListener('keypress', (event)=>{
      // event.keyCode or event.which  property will have the code of the pressed key
      let keyCode = event.keyCode ? event.keyCode : event.which;
      // 13 points the enter key
      if(keyCode === 13) {
        // call click function of the buttonn 
        btn.click();
      }
        
    })
  
    async function callLambda(userMessage) {
  
      const api = 'https://953lslq8ia.execute-api.us-west-2.amazonaws.com/Active';
      const data = { "prompt" : userMessage };
      console.log('data', data);
      let response = await axios
        .post(api, data)
        .then((response) => {
          console.log(response);
          return response.data.body;
        })
        .catch((error) => {
          console.log(error);
          if (error.message ==='Network Error'){
            return `Due to AWS timeout limitation I can't answer that right now, ask a different way`
          }
          return error.message;
        });
      return await response;
   }
    
  
  
  
    const aiSendOff = async (e) => {
      e.preventDefault();
      let chatLog = document.getElementById('chat-log');
      let userInput = document.getElementById('user-input');
      let userMessage = userInput.value;
      let userMessageContainer = document.createElement('div');
      let userMessageBlob = document.createElement('div');
      userMessageBlob.className = 'user-message-blob';
      userMessageContainer.className = 'user-message-container';
      let userMessageText = document.createElement('p');
      userMessageText.className = 'user-message-text';
      userMessageText.innerHTML = userMessage;
      userMessageBlob.appendChild(userMessageText);
      userMessageContainer.appendChild(userMessageBlob);
      
      // The user sent a blank prompt
      if(userMessage === ""){
        chatLog.appendChild(userMessageContainer);
        userInput.value = '';
        console.log(userMessage);    
        // Show the loading message while waiting for the AI response
        let loadingMessageContainer = document.createElement('div');
        loadingMessageContainer.className = 'loading-message-container';
        let loadingMessageBlob = document.createElement('div');
        loadingMessageBlob.className = 'loading-message-blob';
        let loadingMessageText = document.createElement('p');
        loadingMessageText.className = 'loading-message-text';
        loadingMessageText.innerHTML = '⚪ ⚪ ⚪';
        loadingMessageBlob.appendChild(loadingMessageText);
        loadingMessageContainer.appendChild(loadingMessageBlob);
        chatLog.appendChild(loadingMessageContainer);
        chatLog.scrollTop = chatLog.scrollHeight
        chatLog.removeChild(loadingMessageContainer);
        let aiMessageContainer = document.createElement('div');
        let aiMessageBlob = document.createElement('div');
        aiMessageBlob.className = 'ai-message-blob';
        aiMessageContainer.className = 'ai-message-container';
        let aiMessageText = document.createElement('p');
        aiMessageText.className = 'ai-message-text';
        aiMessageText.innerHTML = 'You sent a blank message, please try again';
        aiMessageBlob.appendChild(aiMessageText);
        aiMessageContainer.appendChild(aiMessageBlob);
        chatLog.appendChild(aiMessageContainer);
        chatLog.scrollTop = chatLog.scrollHeight
        return
      }else{
        chatLog.appendChild(userMessageContainer);
        userInput.value = '';
        console.log(userMessage);    
        // Show the loading message while waiting for the AI response
        let loadingMessageContainer = document.createElement('div');
        loadingMessageContainer.className = 'loading-message-container';
        let loadingMessageBlob = document.createElement('div');
        loadingMessageBlob.className = 'loading-message-blob';
        let loadingMessageText = document.createElement('p');
        loadingMessageText.className = 'loading-message-text';
        loadingMessageText.innerHTML = '⚪ ⚪ ⚪';
        loadingMessageBlob.appendChild(loadingMessageText);
        loadingMessageContainer.appendChild(loadingMessageBlob);
        chatLog.appendChild(loadingMessageContainer);
        chatLog.scrollTop = chatLog.scrollHeight
        let apiCall = await callLambda(userMessage);
  
        // Remove the loading message after receiving the AI response
    
        chatLog.removeChild(loadingMessageContainer);
        let aiMessageContainer = document.createElement('div');
        let aiMessageBlob = document.createElement('div');
        aiMessageBlob.className = 'ai-message-blob';
        aiMessageContainer.className = 'ai-message-container';
        let aiMessageText = document.createElement('p');
        aiMessageText.className = 'ai-message-text';
        aiMessageText.innerHTML = apiCall;
        aiMessageBlob.appendChild(aiMessageText);
        aiMessageContainer.appendChild(aiMessageBlob);
        chatLog.appendChild(aiMessageContainer);
        chatLog.scrollTop = chatLog.scrollHeight
      }
      
  
    }

    const openPopUp = (e) => {
      e.preventDefault();
      window.open('https://github.com/carlitos-206/OpenAiCollection/tree/main/img_generator_script', 'popup', 'width=600,height=600');
  }
  const openPopUpWhisper = (e) => {
    e.preventDefault();
    window.open('https://github.com/carlitos-206/translatorAi', 'popup', 'width=600,height=600');
}

const openPopUpDjango = (e) => {
  e.preventDefault();
  window.open('https://github.com/carlitos-206/django_ai_api/blob/main/ai_api/app/views.py', 'popup', 'width=600,height=600');
}

  return(
    <div className="openAiArticleContainer">
      <div className="openAiArticle_title_container">
        <div className="openAirticle_title_text">
          <p>Embarking on the Grand Adventure of Artificial Intelligence</p>
          <p id="projects_openAi_outline_text">Projects Outlined in Article: <a title="Read code from GitHub" className="repoOpenAi" href="https://github.com/carlitos-206/OpenAiCollection/tree/main/img_generator_script" target="popup" onClick={openPopUp}>Dall-e tool in Node</a>, <a title="Read code from GitHub" className="repoOpenAi" href="https://github.com/carlitos-206/django_ai_api/blob/main/ai_api/app/views.py" target="popup" onClick={openPopUpDjango}> Dall-e Tool as a Python Django API</a>, <a title="Read code from GitHub" className="repoOpenAi" href="https://github.com/carlitos-206/translatorAi" target="popup" onClick={openPopUpWhisper}>Whisper Ai Implementation</a>, and a <a title="Read the technical document" href="#missingAction">Context Trained Chat GPT</a> </p>
        </div>
      </div>
      <div className="openAiArticle_body">
        <div className="openAiArticle_text">
          <p className=" indent">Navigating the nuanced realm of programming, my attention was swiftly captivated by the formidable capabilities of the OpenAI API. Specifically, the Dall-e API has emerged as an emblematic representation of modern generative models, adeptly translating textual instructions into intricate visual representations. Such innovations symbolize the harmonious marriage of computational rigor with creative endeavor.</p>
          <p className=" indent">Historical narratives often frame bygone eras as periods of terrestrial discovery or the longing for cosmic conquests. Today, however, our epoch is indelibly marked by the rapid advancements and explorations within Artificial Intelligence. This digital frontier, replete with untapped potential and complex challenges, is our generation's domain of exploration.</p>
          <p className=" indent">Deepening my technical expertise, I have embarked on a meticulous study of TensorFlow, Google's renowned open-source platform tailored for machine learning. Although I am in the preliminary stages of mastering this tool, its potential for sculpting and deploying ML models presents a compelling avenue for innovation.</p>
          <p className=" indent">In a bid to showcase the practical applications of these cutting-edge technologies, I've developed an array of tools leveraging the intelligence of ChatGPT 4, the synergy of Dall-E capabilities as well as enjoy a small video demo of using Whisper Ai. These are not mere academic exercises but functional utilities designed for pragmatic implementation. I extend an invitation for you to experience these tools firsthand on this platform. For the more technically inclined, a detailed link to the <a title="Read code from GitHub" className="repoOpenAi" href="https://github.com/carlitos-206/OpenAiCollection/tree/main/img_generator_script" target="popup" onClick={openPopUp}>Dall-e tool in Node</a> as well as a <a title="Read code from GitHub" className="repoOpenAi" href="https://github.com/carlitos-206/django_ai_api/blob/main/ai_api/app/views.py" target="popup" onClick={openPopUpDjango}> Python Django API </a> is available on my GitHub repository as well as my implementation of <a title="Read code from GitHub" className="repoOpenAi" href="https://github.com/carlitos-206/translatorAi" target="popup" onClick={openPopUpWhisper}>Whisper Ai.</a> </p>          
          <p className=" indent">Furthermore, I'm pleased to highlight that my proficiency extends to having trained a variant of GPT, a testament to which can be found delineated in <a title="View resume page"href="/resume">my resume page</a> or in <a title="Read the technical document" href="#missingAction">the technical article</a> where I also explain how I implement serverless functions with AWS Lambda and AWS API Gateway and harness the power of OpenAi.</p>
          <p className=" indent">In summation, as we stand on the threshold of a transformative era in technological exploration, the intricate algorithms and systems that underpin our tools need not be obfuscated mysteries. They are beacons of progress and innovation. I am wholeheartedly invested in this AI odyssey and welcome you to join this collaborative journey. In this confluence of technical acumen and shared exploration, we are poised to shape the evolving tapestry of AI.</p>
        </div>

      <div className="OpenAi_tools_containter">
          <div className="project_magic_header">
              <p>Explore the magic like I did below</p>
          </div>
          <div className="project_chatHeader">
            <p>Powered by <svg width="20px" height="40px" viewBox="140 140 520 520"><path d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z" fill="var(--gray-900)"></path></svg>Open AI with <img width="25" height="25" alt="Amazon Lambda architecture logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/256px-Amazon_Lambda_architecture_logo.svg.png"/> AWS Lambda and AWS API Gateway <img width='25' height='25' src={apiGatewayLogo} alt="API Gateway Logo" /></p>      
          </div>
        <div className="projectMagicContainer">

          <div className="project_chatContainer">
            <div className="chat-container">
              <div className="chat-log" id="chat-log"></div>
                <div className="project_input-container">
                <input type="text" id="user-input" 
                placeholder="Free* to use ChatGPT - 4 *Disabled*" />
                <button id="send-btn" onClick={(e)=>{aiSendOff(e)}} disabled>Send</button>
                </div>
            </div>
          </div>

          <div className="project_chatContainer">
            <div className="chat-container">
              <div className="chat-log" id="chat-log"></div>
                <div className="project_input-container">
                  <input type="text" id="user-input" 
                    placeholder="Send a prompt to Dall-e *Disabled*" />
                  <button id="send-btn" onClick={(e)=>{aiSendOff(e)}} disabled>Send</button>
                </div>
            </div>
          </div>
          <div className="project_vid">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TP2QHngWIzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: fullscreen;" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}