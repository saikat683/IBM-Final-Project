// const { countDocuments } = require("../backend/models/User");

let content=document.getElementById("expolrePageContent");
const getData=async()=>{
  const res = await fetch("https://ibm-final-project.onrender.com/all/api/auth/explore", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data= await res.json();
  let data2=data.projects;
  
  let content=document.getElementById("explorePageContent");
  data2.forEach((el,index)=>{
    let div=document.createElement("div");
    div.className="container";

    let name=document.createElement("h3");
    name.innerText=`Name: ${el.name}`;
    let image=document.createElement("img");
    image.src=el.image;
    let category=document.createElement("h3");
    category.innerText=`Category: ${el.category}`;
    let difficulty=document.createElement("h3");
    difficulty.innerText=`Difficulty: ${el.difficultyLevel}`;
    let time=document.createElement("h3");
    time.innerText=`Time: ${el.time}`;
    let likes=document.createElement("h3");
    likes.innerText=`Likes:❤️${el.likes}`;

    let button=document.createElement("button")
    button.innerText="View Details";
    button.addEventListener("click",()=>{
      localStorage.setItem("element",JSON.stringify(el));
      setTimeout(()=>{
        window.location.href="details.html";
      },1000);
    })
    

    div.append(image,name,category,difficulty,time,likes,button);
    content.append(div);  
  })
}
getData();