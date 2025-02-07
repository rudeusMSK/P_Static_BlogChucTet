// Ngày mục tiêu
const targetDate = new Date('2026-02-17T00:00:00+07:00'); // Giờ Việt Nam

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // Kiểm tra nếu thời gian đã hết
    if (timeDifference <= 0) {
        document.getElementById("finishedMessage").textContent = "CHÚC MỪNG NĂM MỚI";
        document.getElementById("SecondMessage").textContent = "Chúc mọi người năm mới 2025 an khang thịnh vượng, sức khỏe, bình an và hạnh phúc luôn luôn bên bạn!";
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    // ngày, giờ, phút, giây
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Cập nhật
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Cập nhật đồng hồ
setInterval(updateCountdown, 1000);
updateCountdown();