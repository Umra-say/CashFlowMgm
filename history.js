document.addEventListener("DOMContentLoaded", function () {
    const transactionTable = document.getElementById("transaction-table");
    const filterCategory = document.getElementById("filter-category");
    const filterType = document.getElementById("filter-type");
    const filterDate = document.getElementById("filter-date");

    // Load transactions from localStorage
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    function displayTransactions(filteredTransactions = transactions) {
        transactionTable.innerHTML = "";
        if (filteredTransactions.length === 0) {
            transactionTable.innerHTML = "<tr><td colspan='5' style='text-align:center;'>No transactions found</td></tr>";
            return;
        }
        filteredTransactions.forEach(transaction => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.amount}</td>
                <td>${transaction.category}</td>
                <td>${transaction.type}</td>
            `;
            transactionTable.appendChild(row);
        });
    }

    function filterTransactions() {
        const category = filterCategory.value;
        const type = filterType.value;
        const date = filterDate.value;

        const filteredTransactions = transactions.filter(transaction => {
            return (category === "all" || transaction.category === category) &&
                   (type === "all" || transaction.type === type) &&
                   (date === "" || transaction.date === date);
        });

        displayTransactions(filteredTransactions);
    }

    // Event Listeners for Filters
    filterCategory.addEventListener("change", filterTransactions);
    filterType.addEventListener("change", filterTransactions);
    filterDate.addEventListener("input", filterTransactions);

    // Initial Display
    displayTransactions();
});
