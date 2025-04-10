function showText() {
    const headerText = document.getElementById('header-text');
    const message1 = document.getElementById('message1');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    if (window.getComputedStyle(headerText).display === 'none') {
        headerText.style.display = 'block';
        message1.style.display = 'block';
        button1.style.display = 'none'; 
        button2.style.display = 'block';
    } else {
        headerText.style.display = 'none';
        message1.style.display = 'none';
        button1.style.display = 'block'; 
        button2.style.display = 'none';
    }
}
