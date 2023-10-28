function getDailyWinners() {
    const tableBodyElement = document.querySelector("#table-body");
    const winnerElement = document.createElement("tr");

    const winnerNameCell = document.createElement("td");
    winnerNameCell.textContent = localStorage.getItem("today's winners");

    winnerElement.appendChild(winnerNameCell);

    tableBodyElement.appendChild(winnerElement);
}

getDailyWinners();
