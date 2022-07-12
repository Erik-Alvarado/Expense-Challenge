// const dataTags = document.querySelectorAll(".data");
// const days = document.querySelectorAll(".date");
// const dataTotal = document.querySelector("#total-amount");
const expenseChart = document.querySelector(".expense-data");

fetch('data.json')
    .then(response => response.json())
    .then(parsed => drawChart(parsed))
    .catch(err => console.log('failed to load data: ', err))
// Functions
function drawChart {
    
}



// function dayFill() {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       days.forEach((e, i) => {
//         days[i].innerHTML = data[i].day;
//       });
//     });
// }
// dayFill();
// const updateChartHeights = (date) => {
//   span.querySelectorAll("span").forEach((span) => {
//     span.style.height = span.dataset.height + "%";
//     console.log(span);
//   });
// };
