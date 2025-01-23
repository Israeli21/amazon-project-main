const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
// GET: get some information from the backend
// URL: where to send the message to
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();

// Request: when we send a message to the backend
// Response: when the backend recieves our request, it will send an http message back to our computer
// Request-Response Cycle: Each request we make, will get a response
// URL Paths: is the part that goes after the domain name

// Status Code:
// Failed if starts with 4 or 5 (400, 404, 500)
// Success if starts with 2 (200, 201, 204)
// 4: our problem
// 5: backend's problem (backend crashed)

// API: application programming interface (interface: how we interact with something)
// Backend API: all the ways we can interact with the backend