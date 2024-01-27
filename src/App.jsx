import React from "react";
import axios from 'axios';

function App(){
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn")
const memeImage = document.querySelector(".meme-generator .meme-img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, cap, name) =>{
   memeImage.setAttribute("src", name);
   memeTitle.innerHTML = cap;
   memeAuthor.innerHTML = `${url} memes`;

}


const generateMeme = ()=>{
const memeUrl  = "https://api.imgflip.com/get_memes";
  axios.get(memeUrl)
  .then((res) =>{
   const actualData = res.data.data;
   const actualMemes = actualData.memes;
  // console.log(actualMemes)

actualMemes.map(id =>{
//  console.log(id)
const caps = id.captions;
caps.map(caption =>{
 const cap = caption;
})

 updateDetails(id.name, id.cap, id.url)
   }) 
})
   
  
}

generateMemeBtn.addEventListener("click", generateMeme)

generateMeme();
}

export default App;