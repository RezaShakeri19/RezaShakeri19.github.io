function showText() {
    const headerText = document.getElementById('header-text');
    const message1 = document.getElementById('message1');
    const button1 = document.getElementById('button1');

    if (headerText.style.display === 'none') {
        headerText.style.display = 'block';
        message1.style.display = 'block';
        button1.style.display = 'none';  // Hide button1 when clicked
    } else {
        headerText.style.display = 'none';
        message1.style.display = 'none';
        button1.style.display = 'block';  // Show button1 again
    }
}
