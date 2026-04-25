const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // 🔥 ek baar hi run hoga
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.hidden').forEach(el => {
  observer.observe(el);
});

(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); 
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
      alert("Message sent successfully 💌");
    }, function(error) {
      alert("Failed to send message ❌");
    });
});