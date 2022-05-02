const a = new Date;
const b = a.getHours();

function greet() {
    const greeting = document.getElementById("greeting");

    if (b >= 0 && b < 12) {
        greeting.textContent = " Good Morning !"
    }

    else if (b >= 12 && b < 18) {
        greeting.textContent = " Good Afternoon !"
    }

    else {
        greeting.textContent = "Good Evening !";
    }
    
}

greet();


