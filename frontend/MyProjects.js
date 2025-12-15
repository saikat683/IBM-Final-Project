let titleBox=document.getElementById("titleBox");
let name=localStorage.getItem("name");
let message=document.createElement("h1");
message.innerText=`${name} your all uploaded projects are listed below: `;
titleBox.append(message);


const userId = localStorage.getItem("UserId");
const projectData=async()=>{
    const res= await fetch(`http://localhost:3000/all/api/auth/myProjects?userId=${userId}`,{
        method:'GET',
        headers: { "Content-Type": "application/json" }  
    });
    let data = await res.json();
    let data2 = data.myProjects;
    if(!data2){
        console.log("You have not uploaded any projects.")
    }
    showMyProjects(data2);
}
let container=document.getElementById("projectList");
function showMyProjects(data2){
container.innerHTML="";
data2.forEach((el,index)=>{
    let container2=document.createElement("div");
    container2.className="container2";
   let name=document.createElement("h2");
   name.innerText=el.name;
   let deleteBtn=document.createElement("button");
   deleteBtn.innerText="Delete";
   deleteBtn.addEventListener("click",async()=>{
      try{
        const res = await fetch(`http://localhost:3000/all/api/auth/deleteProject?projectId=${el._id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        projectData();
      }catch(err){
         console.log(err);
      }
   });
   let viewBtn=document.createElement("button");
   viewBtn.innerText="View";
   viewBtn.addEventListener("click",()=>{
      localStorage.setItem("details",JSON.stringify(el));
      setTimeout(()=>{
         window.location.href="details2.html";
      },1000);
   })
   container2.append(name,viewBtn,deleteBtn);
   container.append(container2);
});

}
projectData();
