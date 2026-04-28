function updateClock(){
    const now = new Date();
    const timeString = now.getFullYear().toString().padStart(4, '0') + "年 " +
        (now.getMonth() + 1).toString().padStart(2, '0') + "月 " +
        now.getDate().toString().padStart(2, '0') + "日 " +
        now.getHours().toString().padStart(2, '0') + ":"+
        now.getMinutes().toString().padStart(2, '0') + ":" +
        now.getSeconds().toString().padStart(2, '0');

    document.getElementById("digital-clock").textContent = timeString;    
}
// 每秒更新一次
setInterval(updateClock, 1000);
updateClock(); //現在時間

