window.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,    
        scaleMobile: 1.00,
        color: 0xff3f81,
        backgroundColor: 0x23153c,
        maxDistance: 20.00,
        spacing: 20.00
    })

    setTimeout(() => {
        const main = document.querySelector('main');
        main.style.opacity = 1;
        main.style.filter = 'blur(0px)';
    }, 1000)
})
