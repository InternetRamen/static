let options = {
    threshold: 1,
};
let faders = document.querySelectorAll(".fade");
let observer = new IntersectionObserver((entries) => {
    entries.forEach((val) => {
        if (!val.isIntersecting) {
            return;
        } else {
            val.target.classList.add("appear");
            observer.unobserve(val.target);
        }
    });
}, options);

faders.forEach((fader) => {
    observer.observe(fader);
});
