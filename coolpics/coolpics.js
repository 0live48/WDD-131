// Select key elements
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav ul");

// 01: Toggle menu visibility
menuButton.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

// 02: Handle window resize event
function handleResize() {
  if (window.innerWidth > 1000) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
}

// Run once on load
handleResize();

// Add listener for resize
window.addEventListener("resize", handleResize);

// 03: Image viewer modal
const gallery = document.querySelector(".gallery");

// Add click event to gallery images
gallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  // Create the dialog
  const modal = document.createElement("dialog");
  modal.classList.add("image-viewer");

  // Build modal inner HTML
  modal.innerHTML = `
    <img src="${clickedImage.src}" alt="${clickedImage.alt}">
    <button class="close-viewer">X</button>
  `;

  // Append to body
  document.body.appendChild(modal);

  // Open the modal
  modal.showModal();

  // Close button event
  modal.querySelector(".close-viewer").addEventListener("click", () => {
    modal.close();
  });

  // Close modal if user clicks outside image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  // Remove modal when closed (cleanup)
  modal.addEventListener("close", () => {
    modal.remove();
  });
});
