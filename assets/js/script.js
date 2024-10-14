function openModal(content) {
    document.getElementById('modal').classList.add('modal-open');
    document.getElementById('modalContent').innerText = content;
}

function closeModal() {
    document.getElementById('modal').classList.remove('modal-open');
}