// Function to open the order form modal
function openOrderForm() {
    document.getElementById("orderFormModal").style.display = "block";
}

// Function to close the order form modal
function closeOrderForm() {
    document.getElementById("orderFormModal").style.display = "none";
}

// Close modal if user clicks outside the form
window.onclick = function(event) {
    var modal = document.getElementById("orderFormModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
