// Slideshow functionality
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = "1";
  slides[slideIndex - 1].classList.add("active");

  for (let i = 0; i < slides.length; i++) {
    if (i !== slideIndex - 1) {
      slides[i].classList.remove("active");
    }
  }
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}

showSlides();

function countdownTimer() {
  const targetDate = new Date("October 25, 2024 10:00:00").getTime();

  const interval = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById(
      "countdownTimer"
    ).innerHTML = `<div>${days} Days<br/>${hours} Hours<br/>${minutes} Minutes<br/>${seconds} Seconds</div>`;

    // If the countdown is over, display some text
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}

countdownTimer();
