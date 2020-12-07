const scoreTable = document.getElementById("scoreTable");

async function getScore() {
  const url = "../../assets/score.json";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, received ${response.status}`);
  }
  return response.json();
}

getScore()
  .then((data) => {
    score(data);
  })
  .catch((error) => console.error(error));

function score(data) {
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