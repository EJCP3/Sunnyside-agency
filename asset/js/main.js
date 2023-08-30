const modalmenu = document.getElementById("menu")
const btnmenu = document.getElementById("btn-menu")


  btnmenu.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Yes");
    modalmenu.classList.toggle("activo");
  })

