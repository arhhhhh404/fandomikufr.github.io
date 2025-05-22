const btn1 = document.querySelector(".toggle_aside");
const aside = document.querySelector(".marge-aside");
const btn2 = document.querySelector(".toggle_aside_close");

btn1.addEventListener("click", () => {
    aside.classList.add("active"); 
    btn1.style.display = 'none';
    btn2.style.display = 'block';
});

btn2.addEventListener("click", () => {
    aside.classList.remove("active");
    btn1.style.display = 'block';
    btn2.style.display = 'none';
});

const hover = document.getElementById("insta-liens");
const liens = document.querySelector(".liens-insta");
let timer = null;

hover.addEventListener("mouseover", () => {
    liens.style.display = 'block';

    clearTimeout(timer);
    timer = setTimeout(() => {
        liens.style.display = 'none';
    }, 5000);
});

document.querySelectorAll("figure img[data-url]").forEach(img => {
    img.style.cursor = "url(images/ChatGPT_Image_May_11__2025__12_06_03_AM-removebg-preview (1).png), default";
    img.addEventListener("click", () => {
        const target = img.getAttribute("data-url");
        if (target) {
            window.location.href = target;
        }
    });
});