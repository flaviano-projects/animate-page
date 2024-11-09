const animate = async (selector, elements) => {
    let reveal = document.querySelectorAll(selector);
    for (let i = 0; i < reveal.length; i++) {
        let top = reveal[i].getBoundingClientRect().top;
        let height = window.innerHeight;
        let point = 180;
        if (top < height - point) {
            reveal[i].classList.add(elements);
        } else {
            reveal[i].classList.remove(elements);
        };
    };
};

const remove = async () => {
    let load = document.querySelector("[element='hide']");
    if (load === undefined || load === null) return;
    load.removeAttribute("element");
    load.style.opacity = "1";
    load.style.transition = "all 2s ease-in-out";
};

const normal = async () => {
    return await animate(".normal", "animate-normal");
};

const left = async () => {
    return await animate(".left", "animate-left");
};

const right = async () => {
    return await animate(".right", "animate-right");
};

if (typeof window !== undefined) {
    window.onload = async () => {
        return await remove();
    };
    window.onscroll = async () => {
        return await normal(), await left(), await right();
    };
};