// === State ===
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// This is also where we define functions to modify the state.
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
// In this section, we define the functions to render state.

/** Updates the DOM to reflect the current state. */

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

// function render() {
//   const freeList = document.querySelector("#freelancer");
//   const peopleElements = freelancers.map((freelancer) => {
//     const peopleElement = document.createElement("li");
//     peopleElement.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.startprice}`;
//     return peopleElement;
//   });

//   freeList.replaceChildren(...peopleElements);
//   calculateAveragePrice();
// }

function render() {
  const tableBody = document.querySelector("table-table tbody");

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

// `setInterval` will call the callback function every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.

const addIntervalId = setInterval(() => {
  // TODO: Stop adding shapes if we've reached the maximum number of shapes

  if (freelancers.length < max) {
    addPerson();
    render();
  } else {
    clearInterval(addIntervalId);
  }
}, 2000);

render();
