# IELTS Mastery Studio — Web App Học IELTS All-in-One (iOS, Android & Máy tính)

Gói mã nguồn hoàn chỉnh để triển khai trực tiếp lên **GitHub Pages**, cài đặt thành **Web App (PWA) trên màn hình chính iPhone/iPad (iOS)** và chạy mượt trên máy tính.

## Cấu trúc thư mục
- `index.html`: Toàn bộ ứng dụng IELTS Mastery Studio (260 Collocations, 15 chuyên đề Ngữ pháp (150 bài tập), 14 bài Reading, 14 bài Listening, 22 đề Writing Task 1 & 2, 12 bộ Speaking, Sổ lỗi sai, Mini Từ điển và Cổng Quản trị viên).
- `manifest.json`: Tệp cấu hình PWA cho iOS, Android và máy tính.
- `sw.js`: Service Worker hỗ trợ tải nhanh và lưu bộ đệm ngoại tuyến.
- `icons/`: Bộ biểu tượng ứng dụng chuẩn (`apple-touch-icon.png` 180x180 cho iOS, `icon-192.png`, `icon-512.png`, `icon.svg`).
- `.nojekyll`: Đảm bảo GitHub Pages phục vụ tệp tĩnh trực tiếp không qua Jekyll.

## 1. Cách đưa lên GitHub Pages (3 bước, không cần cài đặt)
1. Tạo một repository mới (chế độ **Public**) trên [GitHub](https://github.com/new), ví dụ tên `ielts-mastery`.
2. Giải nén tệp ZIP này, chọn **Add file → Upload files** trên GitHub rồi kéo thả **toàn bộ các tệp và thư mục `icons/`** (đảm bảo `index.html` nằm ở thư mục gốc của repo) → bấm **Commit changes**.
3. Vào **Settings → Pages → Build and deployment → Branch**: chọn `main` và `/ (root)` → bấm **Save**. Sau 1–2 phút, truy cập link `https://<ten-github-cua-ban>.github.io/ielts-mastery/`.

## 2. Cách cài thành App trên iPhone / iPad (iOS)
1. Mở đường dẫn GitHub Pages của bạn bằng trình duyệt **Safari**.
2. Bấm nút **Chia sẻ (Share)** ở thanh dưới cùng → chọn **Thêm vào MH chính (Add to Home Screen)**.
3. Biểu tượng chiếc mũ tốt nghiệp **IELTS Mastery** sẽ xuất hiện trên màn hình chính và mở toàn màn hình như ứng dụng gốc.

## 3. Cách chạy trên Máy tính (Windows / macOS)
- **Chạy ngay ngoại tuyến:** Giải nén tệp ZIP và nhấp đúp mở tệp `index.html` bằng Chrome, Edge hoặc Safari.
- **Cài thành ứng dụng máy tính:** Mở đường dẫn GitHub Pages bằng Chrome/Edge rồi bấm biểu tượng **Install (Cài đặt ứng dụng)** ở cuối thanh địa chỉ.

## Thông tin Cổng Quản trị viên
- Bấm biểu tượng chiếc khiên ở góc trên phải của ứng dụng.
- Tên đăng nhập: `duccoi56` | Mật khẩu: `duccoi56`
