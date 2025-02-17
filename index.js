var themeToggleMob = document.getElementById("theme-toggle-mob");
var themeTogglePc = document.getElementById("theme-toggle-pc");
var themeMob = document.getElementById("theme-mob");
var themePc = document.getElementById("theme-pc");

function toggleTheme(event) {
    event.preventDefault();
    document.body.classList.toggle("dark-theme");

    // Select all instances of icons
    var linkedinIcons = document.querySelectorAll(".linkedin");
    var githubIcons = document.querySelectorAll(".github");
    var instagramIcons = document.querySelectorAll(".instagram");
    var close = document.querySelectorAll(".closeicon");

    if (document.body.classList.contains("dark-theme")) {
        themeMob.src = "night-mode.png";
        themePc.src = "night-mode.png";

        // Change all icons to dark mode
        linkedinIcons.forEach(icon => icon.src = "linkedin dark.png");
        githubIcons.forEach(icon => icon.src = "github-dark.png");
        instagramIcons.forEach(icon => icon.src = "instagram dark.png");
        close.forEach(icon => icon.src = "close-icon-dark.png");

    } else {
        themeMob.src = "light-mode.png";
        themePc.src = "light-mode.png";

        // Change all icons to light mode
        linkedinIcons.forEach(icon => icon.src = "linkedin light.png");
        githubIcons.forEach(icon => icon.src = "github-light.png");
        instagramIcons.forEach(icon => icon.src = "instagram light.png");
        close.forEach(icon => icon.src = "close-icon-light.png");
    }
}

// Attach event listeners
themeToggleMob.addEventListener("click", toggleTheme);
themeTogglePc.addEventListener("click", toggleTheme);

// Attach event listeners
themeToggleMob.addEventListener("click", toggleTheme);
themeTogglePc.addEventListener("click", toggleTheme);





//funcion for sidebar
        function showsidebar(){
            const sidebar = document.querySelector(".navigationmobile",".menuicons");
            sidebar.style.display = 'flex'
        }
        function hidesidebar(){
            const sidebar = document.querySelector(".navigationmobile",".menuicons");
            sidebar.style.display = 'none'
        }
//funcion for mainmenu

                function showmainmenu(){
                    const sidebar = document.querySelector("#mainmenu");
                    sidebar.style.display = 'flex'
                }
                function hidemainmenu(){
                    const sidebar = document.querySelector("#mainmenu");
                    sidebar.style.display = 'none'
                }


//sidebar filter

                function sidebarblur(){
                    const sidebar = document.querySelector(".navigationmobile",".menuicons");
                    const img = document.querySelector("#close");
                    sidebar.style.filter = 'blur(10px)'
                    img.style.display = 'none'
                }
                function sidebarunblur(){
                    const sidebar = document.querySelector(".navigationmobile",".menuicons");
                    const img = document.querySelector("#close");
                    sidebar.style.filter = 'none'
                    img.style.display = 'block'
                }

//function aboutmemenu 
function showMainMenu() {
    let mainMenu = document.getElementById("mainmenu");
    let aboutMeMenu = document.querySelector(".aboutmemenu");
    let contactMenu = document.querySelector(".contactmenu");

    if (window.innerWidth > 768) {
        // On laptop, show the full menu (both about me & contact)
        mainMenu.style.display = "block";
        aboutMeMenu.style.display = "block";
        contactMenu.style.display = "block";
    } else {
        // On mobile, show only about me menu
        mainMenu.style.display = "block";
        aboutMeMenu.style.display = "block";
        contactMenu.style.display = "none"; // Hide contact menu
    }
}

//function for contactmenu
function showcontactmenu(){
    let mainMenu = document.getElementById("mainmenu");
    let aboutMeMenu = document.querySelector(".aboutmemenu");
    let contactMenu = document.querySelector(".contactmenu");
    mainMenu.style.display ='block';
    aboutMeMenu.style.display = "none";
    contactMenu.style.display = "block";
}


//SEND TO WHATSAPP

function sendToWhatsApp() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Ensure all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Format the message
    let text = `Hello, my name is ${name}.%0AEmail: ${email}%0AMessage: ${message}`;

    // Replace with your WhatsApp number (use international format without `+`)
    let phoneNumber = "919344450207"; // Example: India number (+91)

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
}
