let currentParticipants = 1;
const addBtn = document.getElementById("addParticipant");
const form = document.getElementById("registrationForm");
const summary = document.getElementById("summary");

// Function to generate participant HTML
function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <label for="name${count}">Participant ${count} Name:</label>
      <input type="text" id="name${count}" name="name${count}" required>

      <label for="fee${count}">Fee:</label>
      <input type="number" id="fee${count}" name="fee${count}" required>
    </section>
  `;
}

// Add Participant button functionality
addBtn.addEventListener("click", () => {
  currentParticipants++;
  addBtn.insertAdjacentHTML('beforebegin', participantTemplate(currentParticipants));
});

// Calculate total fees
function totalFees() {
  let feeElements = [...document.querySelectorAll("[id^=fee]")];
  return feeElements.reduce((sum, feeInput) => sum + Number(feeInput.value || 0), 0);
}

// Submit form functionality
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const adultName = document.getElementById("adultName").value;
  const total = totalFees();

  form.style.display = "none";
  summary.style.display = "block";
  summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${currentParticipants} participant(s) and owe $${total} in Fees.`;
});
