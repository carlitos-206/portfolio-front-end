import React from "react";
import "./index-section-1.css";

const LandingSection1 = () => {

  return (
    <div id="section-1" className="landing_section_1_container">
      <div className="landing_section_1_title_container">
        <p>&nbsp;&nbsp;&nbsp;1|section .data</p>
        <p>&nbsp;&nbsp;&nbsp;2|&nbsp;hello db 'Hello, world!',0    ; Null-terminated string</p>
        <p>&nbsp;&nbsp;&nbsp;3|section .text</p>
        <p>&nbsp;&nbsp;&nbsp;4|&nbsp;global _start</p>
        <p>&nbsp;&nbsp;&nbsp;5|_start:</p>
        <p>&nbsp;&nbsp;&nbsp;6|&nbsp;; write the string to stdout</p>
        <p>&nbsp;&nbsp;&nbsp;7|&nbsp;mov eax, 4</p>
        <p>&nbsp;&nbsp;&nbsp;9|&nbsp;mov ebx, 1</p>
        <p>&nbsp;&nbsp;10|&nbsp;mov ecx, hello</p>
        <p>&nbsp;&nbsp;11|&nbsp;mov edx, 13</p>
        <p>&nbsp;&nbsp;12|&nbsp;int 80h</p>
        <p>&nbsp;&nbsp;13|&nbsp;mov eax, 1</p>
        <p>&nbsp;&nbsp;14|&nbsp;mov ebx, 0</p>
        <p>&nbsp;&nbsp;15|&nbsp;int 80h</p>
        <p>&nbsp;&nbsp;16|&nbsp;; exit </p>
        <p>&nbsp;&nbsp;17|&nbsp;mov eax, 1</p>
        <p>&nbsp;&nbsp;18|&nbsp;xor ebx, ebx</p>
        <p>&nbsp;&nbsp;19|&nbsp;int 0x80</p>
      </div>
      <div className="landing_section_1_vid">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TP2QHngWIzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: fullscreen;" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default LandingSection1;