// animation
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// pricing selection
function selectPlan(plan){
document.getElementById("planSelected").value = plan;
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
alert("Selected Plan: " + plan);
}

// form submit
document.getElementById("leadForm").addEventListener("submit", function(e){
e.preventDefault();
alert("Thanks! We will send your SEO growth plan within 24 hours.");
this.reset();
});
