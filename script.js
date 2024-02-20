function toggleMenu() {
    var navbar = document.querySelector('.navbar ul');
    navbar.classList.toggle('show');
}

function showContent(section) {
    var navbar = document.querySelector('.navbar ul');
    navbar.classList.remove('show');

    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById(`${section}-content`).style.display = 'block';
}
