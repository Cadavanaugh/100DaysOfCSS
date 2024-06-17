const tooltip = document.getElementById('tooltip');
const box = document.getElementById('box');
const pin = document.getElementById('downpin');
const circles = document.querySelectorAll('circle');

circles.forEach((circle) => {
    circle.addEventListener('mouseover', (e) => {
        // Show the tooltip
        tooltip.style.opacity = `1`;

        // Give value to the tooltip
        box.innerText = 200 - e.target.getAttribute("cy")

        // Position the tooltip in the center of the circle
        tooltip.style.top = e.target.getAttribute("cy") + 'px';
        tooltip.style.left = e.target.getAttribute("cx") + 'px';

        // Paint the tooltip accordingly to color of the circle
        currentCircleColor = window.getComputedStyle(e.target).getPropertyValue('fill')
        box.style.backgroundColor = currentCircleColor
        pin.style.backgroundColor = currentCircleColor
    });

    circle.addEventListener('mouseout', () => {
        tooltip.style.opacity = `0`;
    });
});