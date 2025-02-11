const scoreTable = document.getElementById("scoreTable");

function updateScore() {
  let state = localStorage.getItem("state");
  render(JSON.parse(state))
}

function render(data) {
  for (let i = 0; i < data.length; i++) {
    scoreTable.insertAdjacentHTML("beforeend",
      `
        <td>${data[i]["category"]}</td>
        <td>${data[i]["word"]}</td>
        <td>${data[i]["translation"]}</td>
        <td>${data[i]["trained"]}</td>
        <td>${data[i]["correct"]}</td>
        <td>${data[i]["incorrect"]}</td>
        <td>${data[i]["%"]}</td>`)
  }
}

updateScore()

