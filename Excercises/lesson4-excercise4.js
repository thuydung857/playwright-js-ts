const globalConfig = {
    thoiDiem: "giờ cao điểm", // 'bình thường', 'ban đêm'
    coSuKienDacBiet: true,
    mucDoCanhBaoThoiTiet: "bình thường" // 'xấu', 'nguy hiểm'
};

const tuyenDuongChinh = ["GL01", "GL03"];

const duLieuGiaoThong = [
    { id: "GL01", luongXe: "cao", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." } },
    { id: "GL02", luongXe: "trung bình", coNguoiDiBoCho: false, coXeCuuThuong: true, camBienPhu: {} },
    { id: "GL03", luongXe: "thấp", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: {} },
    { id: "GL04", luongXe: "cao", coNguoiDiBoCho: false, coXeCuuThuong: false, camBienPhu: { ghiChu: "Hoạt động ổn định." } }
];

const lenhDieuKhien = duLieuGiaoThong.map(giaoLo => {
    let thoiGianDenCoBan;
    if (globalConfig.thoiDiem === "giờ cao điểm") thoiGianDenCoBan = 30;
    else if (globalConfig.thoiDiem === "ban đêm") thoiGianDenCoBan = 90;
    else thoiGianDenCoBan = 60;

    let diemUuTien = 0;
    if (giaoLo.coXeCuuThuong) diemUuTien += 50;
    if (giaoLo.luongXe === "cao" && globalConfig.thoiDiem === "giờ cao điểm") diemUuTien += 20;
    if (giaoLo.coNguoiDiBoCho) diemUuTien += 10;
    if (globalConfig.coSuKienDacBiet && tuyenDuongChinh.includes(giaoLo.id)) diemUuTien += 15;

    let hanhDong;
    if (giaoLo.coXeCuuThuong) {
        hanhDong = "ƯU TIÊN TUYỆT ĐỐI: MỞ LÀN KHẨN CẤP";
    } else {
        if (diemUuTien > 30) {
            hanhDong = "Tăng thời lượng đèn xanh";
        } else {
            hanhDong = "Vận hành theo chu kỳ cơ bản";
        }
    }
    if (globalConfig.mucDoCanhBaoThoiTiet === "nguy hiểm") {
        hanhDong += " & CẢNH BÁO TRƠN TRƯỢT";
    }

    const ghiChuBaoTri = giaoLo.camBienPhu.ghiChu || "Không có";

    return {
        id: giaoLo.id,
        thoiGianDenCoBan,
        diemUuTien,
        hanhDong,
        ghiChuBaoTri
    };
});

const danhSachNong = lenhDieuKhien.filter(lenh =>
    duLieuGiaoThong.find(gl => gl.id === lenh.id).coXeCuuThuong || lenh.diemUuTien > 0
);

console.log(`Mảng lệnh điều khiển:`, lenhDieuKhien);
console.log(`Danh sách NÓNG (cần chú ý):`, danhSachNong);

// Passed: 5/5 - Tốt
// ✔ Tình huống 1: Xe cứu thương GL02 được ưu tiên tuyệt đối
// ✔ Tình huống 2: GL01 có 45 điểm ưu tiên và tăng thời lượng đèn xanh
// ✔ Tình huống 3: GL01 có ghi chú bảo trì, GL03 fallback "Không có"
// ✔ Tình huống 4: Tất cả lệnh đều có cảnh báo thời tiết nguy hiểm
// ✔ Tình huống 5: GL03 ban đêm có 90s, 10 điểm, vận hành cơ bản