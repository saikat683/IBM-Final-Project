document
  .getElementById("registerForm")
  ?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    let data = await res.json();
    console.log(data);
    // alert(data.message);
    Toastify({
      text: data.message,
      duration: 1500,
      close: true,
      // gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();
    if (res.status == 200) {
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  });
document
  .getElementById("loginForm")
  ?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    console.log(data);
    // alert(data.message);
    Toastify({
      text: data.message,
      duration: 1500,
      close: true,
      // gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();
    if (res.status == 200) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name);
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    }
  });
if (window.location.pathname.includes("dashboard.html")) {
  const token = localStorage.getItem("token");
  if (!token) {
    // alert("Access Denied");
    Toastify({
      text: data.message,
      duration: 1500,
      close: true,
      // gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }
}

//function for exploring projects for in exploreProjects page
const exploreProjects = async () => {
  window.location.href="exploreProjects.html";
};
//function redirect
const redirect=async()=>{
  window.location.href="dashboard.html";
}



