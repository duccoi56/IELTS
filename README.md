# IELTS Mastery Studio — Web App Học IELTS All-in-One (Web, iPad & iPhone)

Gói mã nguồn hoàn chỉnh để triển khai trực tiếp lên **GitHub Pages**, cài đặt thành **Web App (PWA) trên màn hình chính iPhone/iPad (iOS)** và chạy mượt trên máy tính với giao diện mô phỏng phòng thi **Computer-Delivered IELTS (CD-IELTS)**.

## Kho nội dung học thuật
- **260 Collocations** phân 3 chặng (Band 5.0–6.0 → 6.5–7.0 → 7.5–8.5+) kèm thuật toán lặp lại ngắt quãng **SM-2 SRS**, 35 câu điền từ ngữ cảnh 40 câu Nâng Band (tự động xáo trộn) và **40 cặp Bảng Paraphrase học thuật Reading/Listening**.
- **15 chuyên đề Ngữ pháp** (150 bài tập có giải thích chi tiết, xáo trộn đáp án trắc nghiệm, tự lưu nháp & nút Làm lại).
- **21 bài Reading Academic (gồm YNNG, Matching Features & **6 bài Full-Length** cho 2 đề thi 40 câu)** (14 Mini-Passages 10 phút + **2 bài Full-Length chuẩn 20 phút / 13 câu hỏi**), giao diện chia đôi 50/50, thanh số câu + cờ Review, thanh Bôi vàng & Tra từ nổi tối ưu cho iPhone/iPad.
- **23 bài Listening** (156 câu hỏi, gồm Map Labelling, Matching Opinions, hỗ trợ **nạp file audio MP3/M4A thật** & **2 bộ Full 40 câu thật**) hội thoại 2 vai có bảng giải mã Paraphrase & Distractor, hỗ trợ Tạm dừng/Tiếp tục, chạm từng câu Transcript để nghe lại và đồng bộ 3 giọng chuẩn IELTS (UK / AU / US).
- **23 đề Writing** (11 Task 1 gồm cả Mixed Charts có biểu đồ/bảng/quy trình/bản đồ + 12 Task 2), khung thi 50/50 chuẩn CD-IELTS, tắt spellcheck như thi thật, đếm từ góc phải, chấm nhanh Offline và tùy chọn **Chấm AI chuyên sâu (Gemini API Key cá nhân)**.
- **12 bộ Speaking chuẩn 3 Part** (36 câu Part 1 + 12 Cue Card Part 2 kèm bài mẫu Band 8.0+ đủ độ dài 2 phút (~220–250 từ) + 36 câu Part 3), giọng Giám khảo đọc câu hỏi, ghi âm tương thích iOS (`audio/mp4`), tải bản ghi và phân tích tốc độ nói (WPM) + từ đệm.
- **Bài Đánh giá Năng lực Mở rộng (24 câu)** với 2 chế độ (16 câu xoay vòng / 12 phút hoặc 24 câu đầy đủ / 18 phút), 4 lựa chọn xáo trộn, giới hạn 2 lượt nghe, chữa bài chi tiết + mở Transcript và lưu lịch sử tiến bộ.
- **Phòng Thi thử Full-Length (Mock Test Center):** 2 bộ đề thi thử trọn vẹn (Reading Full 60 phút / 3 Passages / 40 câu, Listening Full 30 phút / 4 Sections đủ 40 câu thật nghe 1 lượt kèm 30s đọc đề, Writing Full 60 phút Part 1 + Part 2 tính trọng số 1/3–2/3) kèm Phiếu Báo Điểm TRF và lịch sử thi.
- **Tiện ích đi kèm:** 3 chế độ giao diện riêng biệt (**Web** mặc định / **iPad** / **iPhone**), Chuỗi ngày học (**Study Streak**), Daily XP tự reset mỗi ngày, Sổ lỗi sai, Mini Từ điển (Alt+D), Dark Mode đồng bộ biểu đồ & thanh trạng thái iOS, và Cổng Quản trị viên.

## Cấu trúc thư mục
- `index.html`: Toàn bộ ứng dụng IELTS Mastery Studio.
- `manifest.json`: Tệp cấu hình PWA chuẩn cho iOS, Android và máy tính.
- `sw.js`: Service Worker (`v14`) hỗ trợ lưu bộ đệm ngoại tuyến cả mã nguồn lẫn thư viện giao diện/biểu đồ.
- `icons/`: Bộ biểu tượng ứng dụng chuẩn (`apple-touch-icon.png` 180x180 cho iOS, `icon-192.png`, `icon-512.png`, `icon.svg`).
- `.nojekyll`: Đảm bảo GitHub Pages phục vụ tệp tĩnh trực tiếp không qua Jekyll.

## 1. Cách đưa lên GitHub Pages (3 bước)
1. Tạo một repository mới (chế độ **Public**) trên [GitHub](https://github.com/new), ví dụ tên `ielts-mastery`.
2. Giải nén tệp ZIP này, chọn **Add file → Upload files** trên GitHub rồi kéo thả **toàn bộ các tệp và thư mục `icons/`** (đảm bảo `index.html` nằm ở thư mục gốc của repo) → bấm **Commit changes**.
3. Vào **Settings → Pages → Build and deployment → Branch**: chọn `main` và `/ (root)` → bấm **Save**. Sau 1–2 phút, truy cập link `https://<ten-github-cua-ban>.github.io/ielts-mastery/`.

## 2. Cách cài thành App trên iPhone / iPad (iOS)
1. Mở đường dẫn GitHub Pages của bạn bằng trình duyệt **Safari**.
2. Bấm nút **Chia sẻ (Share)** ở thanh dưới cùng → chọn **Thêm vào MH chính (Add to Home Screen)**.
3. Mở ứng dụng từ màn hình chính và chọn chế độ **iPhone** hoặc **iPad** ở thanh trên cùng (hoặc trong menu di động) để chia đôi khung đề bài và câu hỏi tối ưu theo thiết bị.

## 3. Thông tin Cổng Quản trị viên
- Bấm biểu tượng chiếc khiên ở góc trên phải của ứng dụng.
- Sử dụng tài khoản & mật khẩu quản trị riêng của bạn (đã ẩn khỏi tài liệu công khai để bảo mật).
