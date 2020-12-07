// const scoreTable = document.getElementById("scoreTable");

// async function getScore() {
//   const url = "./assets/score.json";
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Could not fetch ${url}, received ${response.status}`);
//   }
//   return response.json();
// }
//
// getScore()
//   .then((data) => {
//     setToLocale(data);
//   })
//   .catch((error) => console.error(error));

if (!localStorage.getItem("state")) {
  setToLocale()
}

function setToLocale() {
  async function getScore() {
    const url = "./assets/score.json";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return response.json();
  }
  getScore()
    .then((data) => {
      setLocale(data);
    })
    .catch((error) => console.error(error));

  function setLocale(data) {
    localStorage.setItem("state", JSON.stringify(data))
    console.log('creating')
  }
}


console.log('who')

// Opens a burger menu
document.getElementById("nav-icon").onclick = function () {
  open()
  console.log('d')

}

function open() {
  document.getElementById("nav-icon").classList.toggle("open");
  document.getElementById("nav-links").classList.toggle("open");
}

