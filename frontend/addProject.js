//Adding project
document
  .getElementById("addProjectForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;
    const steps = document.getElementById("steps").value;
    const materials = document.getElementById("materials").value;
    const time = document.getElementById("time").value;
    const category = document.getElementById("category").value;
    const difficultyLevel = document.getElementById("difficultyLevel").value;

    const res = await fetch("http://localhost:3000/all/api/auth/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        image,
        description,
        steps,
        materials,
        time,
        category,
        difficultyLevel,
      }),
    });
    const data = await res.json();
    Toastify({
      text: data.message,
      duration: 1500,
      close: true,
      // gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();
    if (res.status == 201) {
      setTimeout(() => {
        redirectToDashBoard();
      }, 1000);
    }
  });

function redirectToDashBoard() {
  const token = localStorage.getItem("token");
  if (!token) {
    Toastify({
      text: "Access Denied ! Please login",
      duration: 1500,
      close: true,
      // gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();
    window.location.href = "login.html";
    return;
  }
  window.location.href = "dashboard.html";
}

//Logout function
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
