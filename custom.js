// Gọi điện thoại
function tel() {
    alert("Cám ơn bạn đã gọi đến Chippi Misue'Art Fan Page!!!");
};

var d = new Date();

function formatDateTime(d) {
    var day = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"][d.getDay()];
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hour = d.getHours() > 9 ? d.getHours() : "0" + d.getHours();
    var minutes = d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes();
    var zone = -d.getTimeZoneOffset() / 60;
    var gmt = zone >= 0 ? '+' + zone : zone;
    return day + ', ' + [date, month, year].join('/') + ", " + [hour, minutes].join(":") + " (GMT" + gmt + ")";
}
document.getElementById("topdate").innerHTML = formatDateTime(d);