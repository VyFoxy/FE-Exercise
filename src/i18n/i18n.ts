import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      username: "Username",
      hello: "Hello,",
      user: "Info",
      home: "Home",
      logout: "Log Out",
      subtitle: "This is website homepage",
      userprofile: "User Profile",
      login: "Login",
      password: "Password",
      type: "Type",
      expiredTime: "Expired Time",
      time: "Time"
    },
  },
  vi: {
    translation: {
      username: "Tên đăng nhập",
      hello: "Xin chào,",
      user: "Thông tin",
      home: "Trang Chủ",
      logout: "Đăng xuất",
      subtitle: "Đây là trang chủ",
      userprofile: "Thông tin người dùng",
      login: "Đăng nhập",
      password: "Mật khẩu",
      type: "Loại",
      expiredTime: "Thời hạn",
      time: "Thời gian"

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",

  interpolation: {
    escapeValue: false,
  },
});
