document.getElementById('header-container').innerHTML = `
<header class="topnav">
    <b class="logo-image"><img src="logoresize.jpg" alt="Avatar"> </b>
    <a href="index.html" class="nav-button">HOME</a>
    <div class="dropdown">
        <a href="cultural.html" class="nav-button dropdown-btn">CULTURAL</a>
        <div class="dropdown-content">
        <a href="cultural.html">Main Courses</a>
            <a href="desserts.html">Desserts</a>
        </div>
    </div>
    <a href="forum.html" class="nav-button active">FORUM</a>
    <a href="signup.html">Sign Up</a>
    <a href="contact.html" class="nav-button">CONTACT</a>
    <div class="login-container">
        <form action="/action_page.php">
            <a height="25" style="margin-right: 10px !important;" href="search.html"><img height="25" src="img/search.png" alt="Search icon"></a>
            <input style="padding: 10px !important;" type="text" placeholder="Username" name="username">
            <input style="padding: 10px !important;" type="text" placeholder="Password" name="psw">
            <button style="margin-left: 10px !important; padding: 10px !important;" type="submit">Login</button>
        </form>
    </div>
</header>
`;


// Add styles for the topnav and nav-buttons
var style = document.createElement('style');
style.innerHTML = `
/* Topnav styles */
.topnav {
    overflow: hidden !important;
    background-color: #B77427 !important;
}

.logo-image {
    background-color: transparent !important;
    float: left !important;
    overflow: hidden !important;
    border-radius: 50% !important;
    margin-top: -6px !important;
}

/* Nav-button styles */
.nav-button, .dropdown-btn {
    float: left !important;
    color: black !important;
    text-align: center !important;
    padding: 14px 16px !important;
    text-decoration: none !important;
    font-size: 17px !important;
    background-color: #B77427 !important;
    border: none !important;
    cursor: pointer !important;
    font-family: 'Times New Roman', Times, serif !important; /* Added font-family */
}

.nav-button:hover, .dropdown-btn:hover {
    background-color: #d6a856 !important;
    color: black !important;
}

.nav-button.active {
    background-color: #d8af67 !important;
    color: black !important;
}

/* Dropdown styles */
.dropdown {
    float: left !important;
    overflow: hidden !important;
}

.dropdown-content {
    display: none !important;
    position: absolute !important;
    background-color: #B77427 !important;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2) !important;
    z-index: 1 !important;
    padding: 14px 16px !important;
    margin-top: 50px !important; /* Adjusted margin-top value */
}

.dropdown-content a {
    float: none !important;
    color: black !important;
    padding: 14px 16px !important;
    text-decoration: none !important;
    display: block !important;
    text-align: left !important;
    font-family: 'Times New Roman', Times, serif !important; /* Added font-family */
}

.dropdown-content a:hover {
    background-color: #d6a856 !important;
    color: black !important;
}

/* Display the dropdown content when hovering over the dropdown button */
.dropdown:hover .dropdown-content {
    display: block !important;
}

.topnav .login-container {
    float: right !important;
}

.topnav input[type=text] {
    padding: 6px !important;
    margin-top: 4px !important;
    font-size: 17px !important;
    border: none !important;
    width: 120px !important;
    font-family: 'Times New Roman', Times, serif !important; /* Added font-family */
}

.topnav .login-container button {
    float: right !important;
    padding: 6px 10px !important;
    margin-top: 8px !important;
    margin-right: 16px !important;
    background-color: #297ba7 !important;
    color: white !important;
    font-size: 17px !important;
    border: none !important;
    cursor: pointer !important;
    font-family: 'Times New Roman', Times, serif !important; /* Added font-family */
}

.topnav .login-container button:hover {
    background-color: #008ad4 !important;
}
`;

document.head.appendChild(style);