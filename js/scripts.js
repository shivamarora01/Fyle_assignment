$(document).ready(function() {
    $('#contactBtn').on('click', function() {
        $('#contactModal').modal('show');
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Form submitted!');
        $('#contactModal').modal('hide');
        // Here you can add code to send form data to your server
    });
});

let counter = 0;

function getData(){
    counter++;
    console.log("Hi Shivam" , counter);
}

function myDebounce(callback, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const betterFnc = myDebounce(getData, 1000);

document.querySelector('input').addEventListener('input', betterFnc);


