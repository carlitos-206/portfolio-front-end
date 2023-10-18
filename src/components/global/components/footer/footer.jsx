// This file holds the footer for the site

import React from "react";
// BootStrap Imports
import Carousel from 'react-bootstrap/Carousel';

export default function Footer(){
  // This is the array that holds the all the thank you in different languages
  const thank_you_array = [
    "धन्यवाद!", // Hindi
    "Merci!", // French
    "Gracias!", // Spanish
    "Danke!", // German
    "Grazie!", // Italian
    "Obrigado!", // Portuguese
    "Dziękuję!", // Polish
    "Takk!", // Norwegian
    "Tack!", // Swedish
    "Kiitos!", // Finnish
    "Спасибо!", // Russian
    "感谢!", // Chinese
    "ありがとう!", // Japanese
    "감사합니다!", // Korean
    "Cảm ơn!", // Vietnamese
    "Dhanyavad!", // Hindi
    "Terima kasih!", // Malay
    "Mersi!", // Creole
    "Dank u wel!", // Dutch
    "Děkuji!", // Czech
    "Köszönöm!", // Hungarian
    "Tack så mycket!", // Swedish
    "Dziękuję Ci!", // Polish
    "Ευχαριστώ!", // Greek
    "تشکر می کنم!", // Persian
    "Muito obrigado!", // Portuguese
    "धन्यवाद!", // Hindi
    "شكرا!", // Arabic
    "Дякую!", // Ukrainian
    "Благодаря!", // Bulgarian
    "Hvala!", // Croatian
    "Salamat", //Filipino
    "Ačiū!", // Lithuanian
    "Paldies!", // Latvian
    "Tesekkur ederim!", // Turkish
    "Köszönöm szépen!", // Hungarian
    "Efharisto!", // Greek
    "Tack så mycket!", // Swedish
    "Dhanyabaad!", // Nepali
    "Blagodarya!", // Bulgarian
    "Kiitos paljon!", // Finnish
    "Dziękuję bardzo!", // Polish
    "Danke schön!", // German
    "شكرا جزيلا!", // Arabic
    "ધન્યવાદ!", // Gujarati
    "Dziękuję Ci bardzo!", // Polish
    "நன்றி!", // Tamil
    "ధన్యవాదాలు!", // Telugu
    "ขอบคุณ!", // Thai
    "Рахмет!", // Kazakh
    "Tack så mycket!", // Swedish
    "Cảm ơn nhiều!", // Vietnamese
    "Дякую багато!", // Ukrainian
    "Salamat!", // Tagalog
  ]
  return(
    <footer className="footer" >
          <span id="merci-text">
          <Carousel fade interval={900}>
              {thank_you_array.map((item, idx)=>{
                return(
                  <Carousel.Item key={idx}>
                    Thank You! | {item}
                  </Carousel.Item>
                )
              })}
          </Carousel>
          </span>
    </footer>
  )
}