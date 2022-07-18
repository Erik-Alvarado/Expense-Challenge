const Datas = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const graph = document.getElementById("expense-data");

const add_days = (data) => {
  const fund = document.createElement("p");
  fund.style.height = data.amount + 10 + "%";

  // Find the max amount
  const max = Math.max(...Datas.map((data) => data.amount));

  if (data.amount === max) {
    fund.style.backgroundColor = `hsl(186, 34%, 60%)`;
  }

  // the block that shows the amount when hover on graph
  const pop = document.createElement("div");
  pop.classList.add("pop");
  pop.innerHTML = `$${data.amount}`;

  fund.classList.add("bar");
  return `<span class="day">
      ${pop.outerHTML}
      ${fund.outerHTML}
      <span>${data.day}</span>
      </span>`;
};

const day_list = Datas.map(add_days);
graph.innerHTML = day_list.join("");

const amounts = document.querySelectorAll(".day");

amounts.forEach((am) =>
  am.addEventListener("mouseover", () => {
    am.classList.add("show");
  })
);
amounts.forEach((am) =>
  am.addEventListener("mouseout", () => {
    am.classList.remove("show");
  })
);
