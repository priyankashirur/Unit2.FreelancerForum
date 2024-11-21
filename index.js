// === State ===
// Here, we define variables for the data that our program needs to remember.

const occupations = [
  "Programmer",
  "Writer",
  "Teacher",
  "Accountant",
  "CPA",
  "Data Analyst",
  "Bookkeeper",
];
const names = [
  "Priyanka",
  "Ananth",
  "Riya",
  "Anand",
  "Uma",
  "Amisha",
  "Vijaya",
  "Hari",
];
const prices = [20, 30, 40, 50, 60, 70, 80, 90, 75, 85, 95, 65, 55, 45, 35, 25];

const max = 10;

const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    startprice: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startprice: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    startprice: 70,
  },
];

function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const startprice = prices[Math.floor(Math.random() * prices.length)];
  freelancers.push({ name, occupation, startprice });
}

// === Render ===
// To "render" is to update the DOM to reflect the current state.

function calculateAveragePrice() {
  let totalprice = 0;
  for (let each of freelancers) {
    totalprice += each.startprice;
  }
  let avgprice = (totalprice / freelancers.length).toFixed(2);
  document.getElementById(
    "average-price"
  ).textContent = `Average Starting Price: $${avgprice}`;
}

function render() {
  const tbody = document.querySelector("table tbody");

  const rows = freelancers.map((freelancer) => {
    const row = document.createElement("tr");

    // Create cells for Name, Occupation, and Start Price
    const nameCell = document.createElement("td");
    nameCell.textContent = freelancer.name;

    const occupationCell = document.createElement("td");
    occupationCell.textContent = freelancer.occupation;

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${freelancer.startprice}`;

    row.appendChild(nameCell);
    row.appendChild(occupationCell);
    row.appendChild(priceCell);

    return row;
  });
  tbody.replaceChildren(...rows);

  // Update the average price
  calculateAveragePrice();
}

// === Script ===
// In this section, we call the functions that we've defined above.

const addIntervalId = setInterval(() => {
  // TODO: Stop adding shapes if we've reached the maximum number of shapes

  if (freelancers.length < max) {
    addPerson();
    render();
  } else {
    clearInterval(addIntervalId);
  }
}, 3000);

render();
