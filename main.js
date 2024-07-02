// script.js
document.addEventListener('DOMContentLoaded', () => {
    const utcTimeElement = document.getElementById('utc-time');
    const dayOfWeekElement = document.getElementById('day-of-week');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        utcTimeElement.textContent = utcTime;
        dayOfWeekElement.textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
