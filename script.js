const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const priceElements = document.querySelectorAll(".price");

  // Calculate the total sum
  let total = 0;
  priceElements.forEach((el) => {
    total += Number(el.textContent.trim());
  });

  // Create a new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");

  const cell = document.createElement("td");
  cell.colSpan = 2; // Single cell that spans two columns
  cell.style.fontWeight = "bold";
  cell.style.textAlign = "right";
  cell.textContent = `Total Price: Rs ${total}`;

  newRow.appendChild(cell);
  table.appendChild(newRow);

  // Disable button after one click to avoid repeated total rows
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
