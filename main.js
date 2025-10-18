document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('surpriseButton');
    const message = document.getElementById('surpriseMessage');

    // ลบ class 'hidden' ออกเพื่อให้ CSS (opacity: 0) จัดการการแสดงผลด้วย animation
    // แต่เริ่มต้นด้วยการซ่อนแบบ CSS เพื่อรองรับกรณีที่ JS โหลดช้า
    message.classList.remove('hidden'); 
s
    button.addEventListener('click', function() {
        // เมื่อกดปุ่ม
        if (message.classList.contains('visible')) {
            // ถ้าแสดงอยู่แล้ว ให้ซ่อน
            message.classList.remove('visible');
            button.textContent = '🎁 กดที่นี่เพื่อรับคำอวยพรพิเศษ!';
        } else {
            // ถ้าซ่อนอยู่ ให้แสดง
            message.classList.add('visible');
            button.textContent = '👆 ขอบคุณที่กดรับคำอวยพรนะคะ/ครับ!'; // เปลี่ยนข้อความ
        }
    });
});