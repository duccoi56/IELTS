# Hướng dẫn kích hoạt Đăng nhập & Lưu tiến độ Online bằng Firebase (Miễn phí 100%)

## Bước 1: Tạo dự án Firebase (2 phút)
1. Truy cập https://console.firebase.google.com/ và bấm **Create a project** (tắt Google Analytics cho gọn).
2. Vào **Authentication** -> **Get started** -> tab **Sign-in method** -> bật **Email/Password** -> bấm **Save**.
   *(Ứng dụng tự chuyển ngầm tên đăng nhập `ten_cua_ban` thành `ten_cua_ban@ielts-studio.local`, người học chỉ cần gõ Tên đăng nhập + Mật khẩu).*

## Bước 2: Tạo Firestore Database & Bảo mật dữ liệu
1. Vào **Firestore Database** -> **Create database** -> chọn khu vực gần Việt Nam (ví dụ `asia-southeast1` - Singapore) -> **Start in production mode**.
2. Chuyển sang tab **Rules** và dán đoạn quy tắc sau rồi bấm **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Bước 3: Lấy `firebaseConfig` & Dán vào ứng dụng
1. Vào **Project Settings** (biểu tượng bánh răng) -> kéo xuống **Your apps** -> bấm biểu tượng Web (`</>`) -> đặt tên app -> **Register app**.
2. Copy khối `const firebaseConfig = { ... };`.
3. Chọn 1 trong 2 cách:
   - **Cách dùng ngay (GitHub Pages cho mọi người học):** Mở `index.html`, tìm `const DEFAULT_FIREBASE_CONFIG = {`, dán 6 dòng cấu hình vào đó rồi đẩy lên GitHub Pages.
   - **Cách thử nhanh không cần sửa code:** Mở ứng dụng -> bấm biểu tượng **Đám mây (☁)** trên thanh công cụ -> mở mục **⚙ Cấu hình kết nối Firebase** -> dán thẳng `firebaseConfig` -> bấm **Lưu cấu hình Firebase**.

## Bước 4 (Tùy chọn): Bật quyền xem tiến độ học viên trong Cổng Quản trị
1. Đăng nhập tài khoản Firebase Cloud của bạn (giáo viên/admin) trong biểu tượng **☁**.
2. Mở **Cổng Quản trị viên** (biểu tượng lá chắn) -> đăng nhập Quản trị -> tab **☁ Tiến độ Học viên (Firestore)** -> bấm **Sao chép UID**.
3. Cập nhật tab **Rules** trong Firestore Database (thay `YOUR_ADMIN_UID` bằng UID vừa sao chép) rồi bấm **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null && (
        request.auth.uid == userId ||
        request.auth.uid == "YOUR_ADMIN_UID"
      );
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
