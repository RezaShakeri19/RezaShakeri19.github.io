
function showText() {
    const headerText = document.getElementById('header-text');
    const message1 = document.getElementById('message1');


    if (headerText.style.display === 'none') {
        headerText.style.display = 'block';
        message1.style.display = 'block';
    } else {
        headerText.style.display = 'none';
        message1.style.display = 'none';
    }
}
