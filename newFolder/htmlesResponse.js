const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
        <html>
        <head>
            <title>Home Page</title>
            <style>
                body{
                    font-family: Arial, sans-serif;
                    margin:20px;
                }
                h1{
                    color:#333;
                }
                button{
                    margin:5px;
                    padding:10px 20px;
                    font-size:16px;
                    cursor:pointer;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to the Home Page!</h1>
            <button onclick="alert('Button clicked!')">
                Click Me
            </button>
            <button onclick="document.body.style.backgroundColor='lightblue'">
                Change Background Color
            </button>
            <button onclick="document.body.style.fontSize='20px'">
                Increase Font Size
            </button>
            <button onclick="document.body.style.fontSize='16px'">
                Reset Font Size
            </button>
            <button onclick="document.body.style.backgroundColor='white'">
                Reset Background Color
            </button>
            <br><br>
            <a href="/about">
                <button>Go to About Page</button>
            </a>
            <a href="/contact">
                <button>Go to Contact Page</button>
            </a>
            <a href="/services">
                <button>Go to Services Page</button>
            </a>
            <p>This is the end of the response.</p>
        </body>
        </html>
        `);
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
        <html>
        <head>
            <title>About Page</title>
        </head>
        <body>
            <h1>Welcome to the About Page!</h1>
            <a href="/">
                <button>Go to Home Page</button>
            </a>
            <a href="/contact">
                <button>Go to Contact Page</button>
            </a>
            <a href="/services">
                <button>Go to Services Page</button>
            </a>
            <p>This is the end of the response.</p>
        </body>
        </html>
        `);
    }
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
        <html>
        <head>
            <title>Contact Page</title>
        </head>
        <body>
            <h1>Welcome to the Contact Page!</h1>
            <a href="/">
                <button>Go to Home Page</button>
            </a>
            <a href="/about">
                <button>Go to About Page</button>
            </a>
            <a href="/services">
                <button>Go to Services Page</button>
            </a>
            <p>This is the end of the response.</p>
        </body>
        </html>
        `);
    }
    else if (req.url === "/services") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
        <html>
        <head>
            <title>Services Page</title>
        </head>
        <body>
            <h1>Welcome to the Services Page!</h1>
            <a href="/">
                <button>Go to Home Page</button>
            </a>
            <a href="/about">
                <button>Go to About Page</button>
            </a>
            <a href="/contact">
                <button>Go to Contact Page</button>
            </a>
            <p>This is the end of the response.</p>
        </body>
        </html>
        `);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
        <html>
        <head>
            <title>404 Not Found</title>
        </head>
        <body>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">
                <button>Go to Home Page</button>
            </a>
            <a href="/about">
                <button>Go to About Page</button>
            </a>
            <a href="/contact">
                <button>Go to Contact Page</button>
            </a>

            <a href="/services">
                <button>Go to Services Page</button>
            </a>

        </body>
        </html>
        `);
    }
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});