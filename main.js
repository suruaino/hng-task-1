document.addEventListener("DOMContentLoaded", () => {
  const utcTimeBox = document.getElementById("utc-time");
  const dayOfWeekBox = document.getElementById("day-of-week");

  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    utcTimeBox.textContent = utcTime;
    dayOfWeekBox.textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
