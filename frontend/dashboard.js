// let contentBox = document.getElementById("dashboardContent");
const getDataBase = async () => {
  const res = await fetch("http://localhost:3000/all/api/auth/crafts", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  let data2 = data.projects;
  showData(data2);
};
getDataBase();
function showData(data2) {
  let contentBox = document.getElementById("dashboardContent");
  contentBox.innerHTML=null;
  data2.forEach((el, index) => {
    let div = document.createElement("div");
    div.className = "container";

    let name = document.createElement("h3");
    name.innerText = `Name: ${el.name}`;
    let image = document.createElement("img");
    image.src = el.image;
    let category = document.createElement("h3");
    category.innerText = `Category: ${el.category}`;
    let difficulty = document.createElement("h3");
    difficulty.innerText = `Difficulty: ${el.difficultyLevel}`;
    let time = document.createElement("h3");
    time.innerText = `Time: ${el.time}`;
    let likes = document.createElement("h3");
    likes.innerText = `Likes:❤️${el.likes}`;

    let button = document.createElement("button");
    button.innerText = "View Details";
    button.addEventListener("click", () => {
      localStorage.setItem("details", JSON.stringify(el));
      setTimeout(() => {
        window.location.href = "details2.html";
      }, 1000);
    });
    let button2=document.createElement("button");
    button2.innerText="Like";
    button2.addEventListener("click",()=>{
        increaseLike(el,index);
    });

    div.append(image, name, category, difficulty, time, likes, button,button2);
    contentBox.append(div);
  });
}

//implementing the search function
async function getData() {
  const res = await fetch("http://localhost:3000/all/api/auth/crafts", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  let data2 = data.projects;
  // console.log(searchBar.value);
  let query = document.getElementById("search").value.toLowerCase();
  let filtered = data2.filter((p) => p.name.toLowerCase().includes(query));
  console.log(filtered);
  let contentBox = document.getElementById("dashboardContent");
  contentBox.innerHTML = "";
  showData(filtered);
}
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const searchFunction = debounce(getData, 500);


//Logout function
function logout() {
  localStorage.clear();
  window.location.href = 'login.html';
}

//Increase Like
async function increaseLike(el,index){
  console.log(el);
  // console.log(index);
  const id=el._id;
  console.log(id)
  const res = await fetch(`http://localhost:3000/all/api/auth/crafts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
 
  Toastify({
    text: data.message,
    duration: 1500,
    close: true,
    // gravity: "top",
    position: "center",
    backgroundColor: "yellowgreen",
  }).showToast();
  getDataBase()
}

