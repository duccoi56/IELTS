# IELTS Mastery Studio — Web App Học IELTS All-in-One (Web, iPad & iPhone)

Gói mã nguồn hoàn chỉnh để triển khai trực tiếp lên **GitHub Pages**, cài đặt thành **Web App (PWA) trên màn hình chính iPhone/iPad (iOS)** và chạy mượt trên máy tính với giao diện mô phỏng phòng thi **Computer-Delivered IELTS (CD-IELTS)**.

## Kho nội dung học thuật
- **281 Collocations** phân 4 chặng (<5.0 → 5.0–6.0 → 6.5–7.0 → 7.5–8.5+) kèm thuật toán lặp lại ngắt quãng **SM-2 SRS**, 35 câu điền từ ngữ cảnh + điền từ động, 40 câu Nâng Band (tự động xáo trộn), phòng Ghép Collocation và **52 cặp Bảng Paraphrase học thuật Reading/Listening**.
- **27 chuyên đề Ngữ pháp** (256 bài tập có giải thích chi tiết, phòng Nâng cấp câu, phòng Sửa lỗi đoạn văn, xáo trộn đáp án trắc nghiệm, tự lưu nháp & nút Làm lại).
- **33 bài Reading Academic (247 câu hỏi, gồm đầy đủ 12 dạng bài, 6 bài cầu nối <5.0 và 9 bài Full-Length cho 3 đề thi 40 câu)**, giao diện chia đôi 50/50, thanh số câu + cờ Review, thanh Bôi vàng & Tra từ nổi tối ưu cho iPhone/iPad.
- **160 bài Listening** (1.132 câu hỏi + **18 bộ Full Listening Test 40 câu = 720 câu**, gồm Map Labelling, Matching Opinions, hỗ trợ **nạp file audio MP3/M4A thật**) hội thoại 2 vai có bảng giải mã Paraphrase & Distractor, hỗ trợ Tạm dừng/Tiếp tục, chạm từng câu Transcript để nghe lại và đồng bộ 3 giọng chuẩn IELTS (UK / AU / US).
- **25 đề Writing** (13 Task 1 gồm cả Mixed Charts có biểu đồ/bảng/quy trình/bản đồ + 12 Task 2), khung thi 50/50 chuẩn CD-IELTS, tắt spellcheck như thi thật, đếm từ góc phải, chấm nhanh Offline và tùy chọn **Chấm AI chuyên sâu (Gemini API Key cá nhân)**.
- **12 bộ Speaking chuẩn 3 Part** (36 câu Part 1 + 12 Cue Card Part 2 kèm bài mẫu Band 8.0+ đủ độ dài 2 phút (~220–250 từ) + 36 câu Part 3), giọng Giám khảo đọc câu hỏi, ghi âm tương thích iOS (`audio/mp4`), tải bản ghi và phân tích tốc độ nói (WPM) + từ đệm.
- **Bài Đánh giá Năng lực Mở rộng (24 câu)** với 2 chế độ (16 câu xoay vòng / 12 phút hoặc 24 câu đầy đủ / 18 phút), 4 lựa chọn xáo trộn, giới hạn 2 lượt nghe, chữa bài chi tiết + mở Transcript và lưu lịch sử tiến bộ.
- **Phòng Thi thử Full-Length (Mock Test Center):** 3 bộ đề thi thử trọn vẹn (Reading Full 60 phút / 3 Passages / 40 câu, Listening Full 30 phút / 4 Sections đủ 40 câu thật nghe 1 lượt kèm 30s đọc đề, Writing Full 60 phút Part 1 + Part 2 tính trọng số 1/3–2/3) kèm Phiếu Báo Điểm TRF và lịch sử thi.
- **Tiện ích đi kèm:** 3 chế độ giao diện riêng biệt (**Web** mặc định / **iPad** / **iPhone**), Chuỗi ngày học (**Study Streak**), Daily XP tự reset mỗi ngày, Sổ lỗi sai, Mini Từ điển (Alt+D), Dark Mode đồng bộ biểu đồ & thanh trạng thái iOS, và Cổng Quản trị viên.

## Cấu trúc thư mục
- `index.html`: Toàn bộ ứng dụng IELTS Mastery Studio.
- `manifest.json`: Tệp cấu hình PWA chuẩn cho iOS, Android và máy tính.
- `sw.js`: Service Worker (`v55`) hỗ trợ lưu bộ đệm ngoại tuyến cả mã nguồn lẫn thư viện giao diện/biểu đồ.
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


## Nâng cấp Reading v48 (Từ dưới Band 5.0 lên Band 8.5+)
- **Vá toàn bộ 3 lỗi kỹ thuật P0:** Khôi phục toàn bộ 13 câu hỏi Reading 22 (`r21`), sửa lỗi AI tách cấu trúc câu bị cắt 42 ký tự, sửa bộ đếm `Word-Limit Guard` và nâng cấp tô sáng chính xác từng câu dẫn chứng.
- **4 Phòng luyện Reading chuyên biệt:** *Phòng thi CD-IELTS*, *Đọc có dẫn dắt (<5.0)* (ngắt cụm `/`, chạm từ xem nghĩa ngữ cảnh offline), *Luyện chuyên đề (Micro-Drills)* (False vs Not Given, Paraphrase 7.0–8.5+, Bẫy từ rào đón), và *Hậu kiểm & Thống kê 12 dạng bài* (kèm phân loại nguyên nhân sai và tốc độ WPM).
- **Kho nội dung mở rộng lên 29 bài đọc (~240 câu hỏi) & 3 bộ Mock Test 40 câu:** Bổ sung 4 bài cầu nối dưới Band 5.0, lấp đầy 4 dạng câu hỏi mới (*Summary Completion Word Bank*, *Multiple Choice Chọn 2*, *Table/Note Completion*, *Matching Sentence Endings*), nâng cấp `r21` lên >800 từ kèm sơ đồ SVG, và thêm 2 bài Full-Length Band 7.5–8.5+ (`r22`, `r23`) lập thành **Mock Test 3 (40 câu, >2.500 từ)**.
- **Nâng cấp thao tác thi máy Web / iPad / iPhone:** Bút nhớ 3 màu (Vàng / Xanh lá / Xanh dương) tự lưu vào `localStorage`, chạm trực tiếp vào chữ đã bôi để xóa riêng lẻ, phím tắt `Alt+H`, nút đổi tỷ lệ khung chia màn hình (50/50, 60/40, 40/60), và Bảng giải mã Paraphrase + Bẫy gây nhiễu sau khi nộp bài.

### Bản cập nhật tối ưu v49 (Reading Mastery)
- **Thu gọn bố cục phía trên khung đọc:** Gom 11 nút lọc thành 2 dropdown gọn (*Trình độ* + *Dạng câu hỏi*) và gom công cụ phụ vào menu `⚙ Tiện ích`, giải phóng diện tích đọc tối đa trên laptop & iPhone.
- **Đồng bộ Dark Mode** cho phòng Guided, hộp từ điển chạm offline, nút Word Bank và bản dịch ý đoạn.
- **Mở rộng nội dung chuẩn thi thật:** 32 bài đọc (241 câu hỏi), tăng 6 bài cầu nối `<5.0–5.5`, thêm bài `r-m2` có sơ đồ SVG + Word Bank + Sentence Endings + Chọn 2, mở rộng **Mock Test 3 lên chuẩn ~2.460 từ / 40 câu**, bổ sung 2 chuyên đề Micro-Drills mới (*Đại từ quy chiếu* & *Từ nối đảo chiều*), thêm **Gợi ý 2 bước** trong Guided Mode và **Dịch ý đoạn** ngoại tuyến.

### Bản cập nhật hoàn thiện v50 (Reading Mastery Full Suite)
- **Hoàn thiện UX & iOS:** Tự động đóng menu `⚙ Tiện ích` khi bấm thao tác hoặc chạm ra ngoài (chống tràn mép trên iPhone 375px); bổ sung **Bút bôi vàng từ khóa** trực tiếp trong phòng thi thử **Mock Reading 60 phút**; thêm nút **Gợi ý luyện ngay dạng yếu nhất** trong Phòng 4 Thống kê.
- **Tạo bài đọc IELTS mới không giới hạn bằng AI:** Tích hợp bộ tạo bài đọc theo Band mục tiêu (`4.5 → 8.5+`), chủ đề và dạng câu hỏi yếu ngay trong Phòng 3 (dùng Gemini API Key sẵn có, tự lưu vào `localStorage`).
- **Phủ dữ liệu hậu kiểm 100% & Chuẩn hóa toàn bộ 3 Mock Test:** Đủ tóm tắt nghĩa tiếng Việt theo đoạn (`viSummaries`) cho cả 12 bài Starter & Foundation (`r-b1..r-b6`, `r0..r7`), thêm bài cầu nối trung cấp 430 từ (`r-br1`), mở rộng **Mock Test 2 lên >2.300 từ** (cả 3 Mock Test đều đạt chuẩn IELTS Academic), và phủ **100% `evidenceQuote`, `paraphraseMap` và `distractorNote`** cho toàn bộ 247 câu hỏi Reading.

### Bản cập nhật v51 (Nâng cấp toàn diện Ngữ pháp <5.0 → 8.5+)
- **4 Phòng luyện Ngữ pháp chuyên biệt:** *Học chuyên đề (27 chuyên đề • 256 bài tập)*, *Phòng Nâng cấp câu (Sentence Combining 5.0 → 8.0+)*, *Phòng Sửa lỗi đoạn văn không bôi đỏ sẵn (Proofreading)*, và *Tiến độ 4 chặng & Gợi ý chuyên đề yếu*.
- **Bổ sung Chặng 0 (<5.0 — Xây gốc) & Chặng 3 (7.5–8.5+):** Thêm 4 chuyên đề mất gốc (*Từ loại N–V–Adj–Adv*, *5 mẫu câu đơn tránh dịch Word-by-Word*, *6 thì cốt lõi*, *Liên từ cơ bản*) và 3 chuyên đề chuyên sâu (*Lượng từ học thuật*, *Tránh lỗi Dangling Modifiers*, *Thay thế & Quy chiếu `that of / do so`*).
- **Nâng cấp trải nghiệm học:** Khung Công thức nhanh + Ứng dụng Writing/Speaking + Cảnh báo lạm dụng Band 8.0+ cho cả 27/27 chuyên đề; chế độ **Chấm ngay từng câu** cho người `<5.0`; tự thu gọn lý thuyết trên iPhone; và hộp **Tự đặt câu áp dụng (AI chấm & nâng Band 8.0+)**.

### Bản cập nhật v52 (Nâng cấp toàn diện Từ vựng <5.0 → 8.5+)
- **Mở rộng kho lên 286 Collocations (4 Chặng + My Deck) & 52 Cặp Paraphrase:** Bổ sung 16 cụm cốt lõi **Chặng 0 (<5.0)**, 10 cụm **Speaking Natural 7.5–8.0 & Writing 8.5+**, và 12 cặp Paraphrase học thuật mới.
- **Liên thông My Deck SRS:** Toàn bộ từ bấm `+ SRS` từ Reading tự động nạp vào bộ Flashcards SRS (có bộ lọc riêng `⭐ Từ tôi lưu`) kèm ô tự thêm thẻ từ cá nhân.
- **Tối ưu giao diện & học chủ động:** Thu gọn 14 chủ đề thành thanh cuộn ngang 1 dòng mượt trên iPhone; thêm chiều thẻ **Việt → Anh**; thêm nút **🔊 Nghe cả câu Band 8.0+**; thêm **Điền từ động** từ toàn bộ 286 thẻ; thêm nút **👁 Ẩn cột Paraphrase** để tự kiểm tra; và mở phòng thứ 6 **🧩 Ghép Collocation** (18 cặp 3 mức Band).

### Bản cập nhật v53 (Nâng cấp toàn diện Lộ trình học <5.0 → 8.5+)
- **Thêm trọn bộ Chặng 0 (`<5.0 → 5.5` — Xây gốc 4 Tuần):** Nâng tổng lên **4 Gói Lộ trình** (64 cột mốc), dẫn dắt liền mạch qua toàn bộ tính năng mới ở Reading (Guided Mode, Micro-Drills), Ngữ pháp (`g0a–g0d`, `g21–g23`, Nâng cấp câu, Sửa lỗi đoạn văn) và Từ vựng (Chặng 0, Ghép Collocation, 52 cặp Paraphrase).
- **Cá nhân hóa tiến độ & Chống ngợp trên iPhone:** Thêm **Bộ tính Lộ trình & Đếm ngược Ngày thi** theo Band hiện tại, Band mục tiêu và số phút học/ngày; thêm khối **3 Nhiệm vụ ưu tiên hôm nay** có nút nhảy sâu trực tiếp; và tự động thu gọn các tuần phụ thành dạng Accordion trên màn hình điện thoại.

### Bản chốt hoàn thiện v54 (QA & Đồng bộ toàn ứng dụng)
- Vá bộ chấm **Điền từ động (286 thẻ)** để chấm chính xác theo câu sinh động thay vì mảng 35 câu cũ.
- Vá nút **`+ SRS` trên thanh chọn nổi iOS** đọc toàn văn cụm từ (không cắt 42 ký tự) và đồng bộ thẳng vào **My Deck SRS**.
- Đồng bộ sạch toàn bộ số liệu hiển thị (286 cụm từ, 52 cặp Paraphrase) và hoàn thiện tương phản Dark Mode cho cả 5 phòng luyện mới.

### Bản vá lỗi & hoàn thiện v55 (QA Bug-Fix Release)
- **Vá P0 Mock Test 3 Reading & Mock Test 2 Writing:** Bổ sung dựng giao diện, bắt sự kiện và chấm điểm cho 2 dạng `checkbox` (Choose TWO) và `wordbank` trong `renderMockReading()`; vá lỗi `.trim()` trên mảng ở thanh điều hướng câu; sửa lỗi `type: 'mixed'` làm crash Chart.js và hiển thị đầy đủ bảng số liệu cho đề Mixed Chart (`wt1-11`).
- **Vá P1 Mock Writing Task 2, AI Reading & Guided Highlight:** Cập nhật 3 cặp đề Writing Task 1 & Task 2 riêng biệt, hợp lệ cho cả 3 Mock Test (`wt1-1/w2`, `wt1-11/w6`, `wt1-12/w12`); sửa lỗi ánh xạ `evidenceId` trong bộ tạo bài đọc AI; nâng cấp `highlightEvidenceV48` hỗ trợ tô sáng câu dẫn chứng xuyên qua thẻ `<span>` ở Guided Mode.
- **Vá P2 Giao diện & Nội dung:** Thêm tương phản Dark Mode cho `.evidence-highlight`; sửa vỡ lưới 2 cột khi đổi tỷ lệ 60/40–40/60 trên iPad; gỡ 7 đáp án bị lộ trong `VOCAB_FILL_DRILLS` (`vf26`–`vf35`), xóa 5 Collocation trùng lặp trong `VOCAB_DATA` (còn 281 cụm chuẩn), và đồng bộ 7 `evidenceQuote` khớp nguyên văn đoạn văn.
- **Đồng bộ P3:** Cập nhật thống nhất số liệu trên toàn bộ UI, `manifest.json`, `README.md`, dọn mã DOM thừa và nâng bộ đệm `sw.js` lên `ielts-mastery-v55`.
