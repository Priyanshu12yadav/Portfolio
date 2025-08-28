// Wait for the HTML document to be fully loaded before running any script
document.addEventListener('DOMContentLoaded', function() {

    // 🔹 Theme Toggle
    function toggleTheme() {
      const theme = document.getElementById('theme');
      const icon = document.getElementById('theme-icon');
      theme.classList.toggle('bg-gray-900');
      theme.classList.toggle('bg-white');
      theme.classList.toggle('text-white');
      theme.classList.toggle('text-black');
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
    }
    
    // Make the toggleTheme function available globally so the HTML onclick can find it
    window.toggleTheme = toggleTheme;

    // 🔹 Hide intro screen and show site
    function enterSite() {
      document.getElementById("intro-screen").style.display = "none";
    }
    
    // Make the enterSite function available globally
    window.enterSite = enterSite;

    // 🔹 Scroll animation for pop-up sections
    const sections = document.querySelectorAll(".pop-up");
    window.addEventListener("scroll", () => {
      sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < window.innerHeight - 100) {
          sec.classList.add("show");
        }
      });
    });

    // 🔹 EmailJS Integration
    (function() {
      // Replace with your actual EmailJS Public Key
      emailjs.init("_ylCkeouDHM2BNUmj"); 
    })();

    // Find the form on the page
    const contactForm = document.getElementById("contact-form");
    
    // Only add the event listener if the form exists
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevents the default form submission

            // Replace with your actual EmailJS Service ID and Template ID
            emailjs.sendForm("service_passpass0909", "template_y7zud2u", this)
              .then(() => {
                alert("✅ Message sent successfully!");
                contactForm.reset(); // Clear the form
              }, (err) => {
                alert("❌ Failed to send message. Error: " + JSON.stringify(err));
              });
        });
    }

});