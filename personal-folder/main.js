// Array of hobbies
const hobbies = [
    { name: "Playing Piano", description: "I love playing classical and modern pieces." },
    { name: "Coding", description: "Building websites and exploring programming languages." },
    { name: "Hiking", description: "I enjoy exploring nature and staying active." }
];

// Display all hobbies
function displayHobbies() {
    const container = document.getElementById('hobbyList');
    container.innerHTML = "";
    hobbies.forEach(hobby => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${hobby.name}</h3><p>${hobby.description}</p>`;
        container.appendChild(div);
    });
}

// Filter hobbies with 'i'
function filterHobbies() {
    const container = document.getElementById('hobbyList');
    container.innerHTML = "";
    const filtered = hobbies.filter(hobby => hobby.name.toLowerCase().includes('i'));
    if (filtered.length === 0) {
        container.innerHTML = "<p>No hobbies found with 'i'.</p>";
    } else {
        filtered.forEach(hobby => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${hobby.name}</h3><p>${hobby.description}</p>`;
            container.appendChild(div);
        });
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayHobbies();
    document.getElementById('filterBtn').addEventListener('click', filterHobbies);
});
