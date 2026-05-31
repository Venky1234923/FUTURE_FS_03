window.onload = function(){

    setTimeout(() => {

        alert(
            "🙏 Welcome to Spice Heritage!\n\nExperience the authentic taste of India with our delicious dishes and warm hospitality."
        );

    }, 500);

};

// Reservation Form

const reservationForm =
document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
      "Thank you for choosing Spice Heritage! Your table reservation request has been received."
    );

    reservationForm.reset();

});

// Menu Search

const searchBox =
document.getElementById("searchBox");

searchBox.addEventListener("keyup", function(){

    let filter =
    searchBox.value.toLowerCase();

    let items =
    document.querySelectorAll(".menu-item");

    items.forEach(function(item){

        let text =
        item.textContent.toLowerCase();

        if(text.includes(filter)){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }

    });

});

// Scroll To Top Button

let topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",function(){

    if(window.scrollY > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Smooth Navbar Highlight

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(
            item=>item.classList.remove("active")
        );

        this.classList.add("active");

    });

});



