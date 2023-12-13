document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas.getContext('2d');
    const spinButton = document.getElementById('spinButton');
    const segmentsInput = document.getElementById('segmentsInput');
    const updateWheelButton = document.getElementById('updateWheel');

    let segments = segmentsInput.value.split(',');
    let currentRotation = 0;

    function drawWheel() {
        const slice = 2 * Math.PI / segments.length;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        segments.forEach((text, i) => {
            ctx.beginPath();
            ctx.fillStyle = i % 2 === 0 ? '#f88' : '#8f8';
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, slice * i, slice * (i + 1));
            ctx.fill();

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(slice * i + slice / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#fff';
            ctx.font = '20px Arial';
            ctx.fillText(text, canvas.width / 2 - 10, 10);
            ctx.restore();
        });
    }

    function spinWheel() {
        const spinTo = currentRotation + (10 * 360) + (Math.random() * 360);
        const duration = 5000; // 5 seconds
        const start = Date.now();

        function animate() {
            const now = Date.now();
            const time = Math.min(1, (now - start) / duration);
            const easeOutTime = 1 - Math.pow(1 - time, 3);

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((easeOutTime * spinTo) * Math.PI / 180);
            ctx.translate(-canvas.width / 2, -canvas.height / 2);
            drawWheel();
            ctx.restore();

            if (time < 1) {
                requestAnimationFrame(animate);
            } else {
                currentRotation = spinTo % 360;
                const selectedSegment = getSelectedSegment(currentRotation);
                alert("The wheel landed on: " + segments[selectedSegment]);
            }
        }

        animate();
    }
    // ... (previous code remains the same)

function spinWheel() {
    const spinTo = currentRotation + (10 * 360) + (Math.random() * 360);
    const duration = 5000; // 5 seconds
    const start = Date.now();

    function animate() {
        const now = Date.now();
        const time = Math.min(1, (now - start) / duration);
        const easeOutTime = 1 - Math.pow(1 - time, 3);

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((easeOutTime * spinTo) * Math.PI / 180);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        drawWheel();
        ctx.restore();

        if (time < 1) {
            requestAnimationFrame(animate);
        } else {
            currentRotation = spinTo % 360;
            const selectedSegment = getSelectedSegment(currentRotation);
            triggerFireworks();
        }
    }

    animate();
}

// Fireworks effect
function triggerFireworks() {
    const particles = [];
    const colors = ['#ff4d4d', '#4dff4d', '#4d4dff', '#ff4dff'];

    function createParticles() {
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        for (let i = 0; i < 50; i++) {
            const speed = Math.random() * 5 + 1;
            const angle = Math.random() * 2 * Math.PI;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push({ x, y, speed, angle, color, radius: 5 });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawWheel();
        particles.forEach(p => {
            p.x += p.speed * Math.cos(p.angle);
            p.y += p.speed * Math.sin(p.angle);
            p.radius *= 0.95;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        if (particles.length > 0 && particles[0].radius > 0.5) {
            requestAnimationFrame(animateParticles);
        }
    }

    createParticles();
    animateParticles();
}

// ... (remaining code)


    function getSelectedSegment(rotation) {
        const degreesPerSegment = 360 / segments.length;
        const adjustedRotation = (360 - rotation) % 360;
        return Math.floor(adjustedRotation / degreesPerSegment);
    }

    updateWheelButton.addEventListener('click', function() {
        segments = segmentsInput.value.split(',');
        drawWheel();
    });

    drawWheel();
    spinButton.addEventListener('click', spinWheel);
});
