let el = JSON.parse(localStorage.getItem("details"));
function showDetails(el) {
  let container = document.getElementById("details");
  let div1 = document.createElement("div");
  div1.className = "container";
  let div2 = document.createElement("div");
  div2.className = "container1";
  let div3 = document.createElement("div");
  div3.className = "container2";
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
  let description = document.createElement("h3");
  description.innerText = `Description: ${el.description}`;
  let steps = document.createElement("h3");
  steps.innerText = `Steps: ${el.steps}`;
  let materials = document.createElement("h3");
  materials.innerText = `Required Materials: ${el.materials}`;

  div2.append(image);
  div3.append(
    name,
    description,
    steps,
    materials,
    category,
    difficulty,
    time,
    likes
  );
  div1.append(div2, div3);
  container.append(div1);
}
showDetails(el);
//redirect to dashboard
function redirectToDashBoard() {
  const token =localStorage.getItem("token");
  if (!token) {
    Toastify({
      text: "Access Denied ! Please login",
      duration: 1500,
      close: true,
      // gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();
    window.location.href="login.html";
  }
  window.location.href="dashboard.html";
}
