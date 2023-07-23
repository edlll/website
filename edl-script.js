var message = "Welcome to the secret page. Please type /help for a list of commands.";
var output = document.getElementById('output');
var input = document.getElementById('input');
var i = 0;

input.disabled = true; // disable the input field at the start

function typeMessage() {
    if (i < message.length) {
        output.innerHTML = message.substring(0, i+1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeMessage, 100);
    } else {
        output.innerHTML = message + '<br>'; // remove cursor after typing
        input.disabled = false; // enable the input field after typing is finished
        input.focus(); // automatically focus the input field
    }
}

typeMessage();

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        if (input.value.toLowerCase() === '/help') {
            output.innerHTML += 'List of commands:<br>/about<br>/projects<br>/contact<br>/home<br>';
        } else if (input.value.toLowerCase() === '/home') {
            window.location.href = 'index.html';
        } else if (input.value.toLowerCase() === '/about') {
            window.location.href = 'about.html';
        } else if (input.value.toLowerCase() === '/projects') {
            window.location.href = 'projects.html';
        } else if (input.value.toLowerCase() === '/contact') {
            window.location.href = 'contact.html';
        } else if (input.value.toLowerCase() === '/edl') {
            window.location.href = 'edl.html';
        } else {
            output.innerHTML += 'Unknown command. Type /help for a list of commands.<br>';
        }

        input.value = '';
    }
});
