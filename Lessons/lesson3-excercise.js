//Bai1
function xuLyDonHang() {
  if (dangBaoTri) {
    console.log(`Hệ thống đang trong giờ bảo trì`);
    return;
  }
  if (soLuongDat > tonKho) {
    console.log(`Hủy đơn hàng do hết tồn kho`);
    return;
  }
  tonKho--;

  let dieuKienA = (giaTriDonHang > 1000) && (lichSuMuaHang < 3);
  let dieuKienB = (!laThanhVienVip) && (yeuCauGiaoQuocTe);

  if (dieuKienA || dieuKienB) {
    console.log(`Đơn hàng cần xác minh thủ công`);
    return;
  }

  donHangDaXuLyTrongNgay++;
  console.log(`Đơn hàng được tự động xử lý và gửi đến bộ phận đóng gói`);
}


//Tinh huong 1
let dangBaoTri = false;
let tonKho = 20;
let soLuongDat = 1;
let giaTriDonHang = 500;
let yeuCauGiaoQuocTe = false;
let laThanhVienVip = true;
let lichSuMuaHang = 10;
let donHangDaXuLyTrongNgay = 152;

xuLyDonHang();
console.log(`tonKho: ${tonKho} va donHangDaXuLyTrongNgayTH1: ${donHangDaXuLyTrongNgay}`);


//Tinh huong 2
tonKho = 1;
soLuongDat = 2;
xuLyDonHang();


//Tinh huong 3
dangBaoTri = false;
tonKho = 20;
soLuongDat = 1;
giaTriDonHang = 1500; // >1000
yeuCauGiaoQuocTe = false;
laThanhVienVip = true;
lichSuMuaHang = 2;   // <3
donHangDaXuLyTrongNgay = 152;

xuLyDonHang();
console.log(`tonKho: ${tonKho} va donHangDaXuLyTrongNgayTH3: ${donHangDaXuLyTrongNgay}`);

//Tinh huong 4
dangBaoTri = false;
tonKho = 20;
soLuongDat = 1;
giaTriDonHang = 300;
yeuCauGiaoQuocTe = true;
laThanhVienVip = false; // không VIP
lichSuMuaHang = 10;
donHangDaXuLyTrongNgay = 152;
xuLyDonHang();
console.log(`tonKho: ${tonKho} va donHangDaXuLyTrongNgayTH4: ${donHangDaXuLyTrongNgay}`);


//Tinh huong 5
dangBaoTri = true;
xuLyDonHang();


//Tinh huong 6
dangBaoTri = false;
tonKho = 20;
giaTriDonHang = 1000; // Bằng 1000, không lớn hơn
lichSuMuaHang = 3;   // Bằng 3, không nhỏ hơn
laThanhVienVip = true;
xuLyDonHang();
console.log(`tonKho: ${tonKho} va donHangDaXuLyTrongNgayTH6: ${donHangDaXuLyTrongNgay}`);


//Bai2
function vanHanhNhaKinh() {
  if (heThongBiVoHieuHoa) {
    console.log(`hệ thống đang bị vô hiệu hoá`);
    return;
  }

  if (nhietDo > 40) {
    console.log(`CẢNH BÁO KHẨN CẤP: Nhiệt độ ${nhietDo}°C quá cao`);
    return;
  }

  if (doAmDat < 30 && binhNuoc_Lit > 5) {
    binhNuoc_Lit -= 10;
    soLanTuoiTrongNgay++;
    console.log(`Bật máy bơm tưới nước. Bình nước còn lại: ${binhNuoc_Lit} lít. Số lần tưới: ${soLanTuoiTrongNgay}`);
    return;
  }

  let dkSauBenh = phatHienSauBenh || (doAmKhongKhi > 80 && nhietDo > 28);
  if (dkSauBenh) {
    if (binhThuocTruSau_mL > 0) {
      binhThuocTruSau_mL -= 50;
      console.log(`Phun thuốc trừ sâu. Bình thuốc còn lại: ${binhThuocTruSau_mL} mL`);
      if (binhThuocTruSau_mL <= 0) {
        console.log(`CẢNH BÁO: Bình thuốc trừ sâu đã hết!`);
      }
    } else {
      console.log(`CẢNH BÁO: Bình thuốc trừ sâu đã hết!`);
    }
    return;
  }

  console.log(`Mọi chỉ số đều ổn định`);
}

//Tinh huong 1
let heThongBiVoHieuHoa = false;
let binhNuoc_Lit = 100;
let binhThuocTruSau_mL = 200;
let soLanTuoiTrongNgay = 2;
let nhietDo = 25;
let doAmDat = 50;
let doAmKhongKhi = 70;
let phatHienSauBenh = false;

vanHanhNhaKinh();


//tinh huong 2
doAmDat = 25; // < 30
vanHanhNhaKinh();

//tinh huong 3
nhietDo = 29; // >28
doAmDat = 50;
doAmKhongKhi = 85; // >80
vanHanhNhaKinh();

//tinh huong 4
nhietDo = 25;
doAmKhongKhi = 70;
phatHienSauBenh = true;
vanHanhNhaKinh();


//tinh huong 5
nhietDo = 42; // >40
doAmDat = 20;
doAmKhongKhi = 70;
phatHienSauBenh = false;
vanHanhNhaKinh();

//tinh huong 6
 binhNuoc_Lit = 4; // <5, không đủ để tưới
 nhietDo = 25;
 doAmDat = 25; // đất khô
vanHanhNhaKinh(); 


//tinh huong 7
 heThongBiVoHieuHoa = true;
 binhNuoc_Lit = 100;
 doAmDat = 50;
 doAmKhongKhi = 70;
vanHanhNhaKinh(); 
