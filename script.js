@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #f9f9f9;
    color: #333;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: #26002b;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin: 0 1rem;
}

.nav-links a {
    text-decoration: none;
    color: white;
    padding: 10px;
}

.nav-links a:hover {
    background: #df42f7;
    border-radius: 5px;
}

.menu-toggle {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
}

header {
    height: 100vh;
    background: url('images/travel.jpg') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

/* About Us Section */
#about {
    position: relative;
    padding: 4rem 2rem;
    text-align: center;
    background: url("images/about.jpg") no-repeat center center/cover;
}

#about::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

#about h2, #about p {
    position: relative;
    z-index: 1;
}

/* Services Section */
#services {
    position: relative;
    padding: 4rem 2rem;
    text-align: center;
    background: url("images/service.jpg") no-repeat center center/cover;
}

#services::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

#services h2, .services-container {
    position: relative;
    z-index: 1;
}

.section {
    padding: 5rem 10%;
    text-align: center;
}

.services-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.service-box {
    width: 30%;
    padding: 1rem;
    margin: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

form {
    max-width: 400px;
    margin: auto;
}

form input, button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

.btn {
    padding: 10px 20px;
    background: #df42f7;
    color: white;
    border: none;
    cursor: pointer;
    text-decoration: none;
}

.btn:hover {
    background: #26002b;
}

footer {
    text-align: center;
    padding: 1rem;
    background: #26002b;
    color: white;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 60px;
        left: 0;
        background: #26002b;
        padding: 1rem;
    }

    .nav-links.active {
        display: flex;
    }

    .service-box {
        width: 90%;
    }
}
