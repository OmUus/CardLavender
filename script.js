function nextPage() {
    // Mengarahkan pengguna ke halaman "yes_page.html"
    window.location.href = "yes_page.html";
}

function moveButton() {
    // Memindahkan tombol "No" secara acak ketika dihover
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}