const button = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/rayy_oc/",
    class: "instagram",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com",
    class: "youtube",
  },
  {
    name: "Github",
    link: "https://www.github.com/nrayoct",
    class: "github",
  },
];

const btnContainer = document.getElementById("button-container");

button.forEach((button) => {
  console.log(button);

  //buat elemen button
  const btn = document.createElement("button");
  // ngisi btn
  btn.innerText = button.name;
  // menambahkan class btn ke buton
  btn.classList.add("btn");
  // menambahkan class utk merubah warna
  btn.classList.add(button.class);

  //tambahkan klik menuju link
  btn.addEventListener("click", () => window.open(button.link, "_blank"));

  // masukkan buton ke dlm btn btnContainer
  btnContainer.append(btn);
});
