function openPopup() {
    document.getElementById('popup').style.display = 'block';
    const toggleButton = document.querySelector('.navbar-toggler');
    toggleButton.click();
    const resetpass = document.getElementById("resetpass");
    resetpass.addEventListener('click',resetPassword);
}
function closePopup() {
    setActive('Home');
    document.getElementById('popup').style.display = 'none';
    const resetpass = document.getElementById("resetpass");
    resetpass.removeEventListener('click', resetPassword);  
}
function openupdate(){
    document.getElementById('update').style.display = 'block';
    const toggleButton = document.querySelector('.navbar-toggler');
    toggleButton.click();
}
function closeupdate(){
    document.getElementById('update').style.display = 'none';
}
const changePasswordLink = document.getElementById('changepass');
changePasswordLink.addEventListener('click', function() {
    setActive('changePasswordLink');
});
function setActive(id) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const selectedLink = document.getElementById(id);
    if (selectedLink) {
        selectedLink.classList.add('active');
    }
}
function logout(){
    window.location.href="LOGIN-PAGE.html";
}
