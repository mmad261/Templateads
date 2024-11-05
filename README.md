# قالب اخنصاصی مرزبان و مرزنشین | MarzViteTemplate

## Desktop View
<img src="https://raw.githubusercontent.com/MatinDehghanian/MarzViteTemplate/assets/images/desktop.png" title="Marzneshin-Sub-Desktop"/>

## Responsive Mobile View
<img src="https://raw.githubusercontent.com/MatinDehghanian/MarzViteTemplate/assets/images/web-Mobile.JPEG" title="Marzneshin-Sub-Mobile"/>

---

## ساخته شده توسط
- **React**: Version 18
- **Vite**: Version 5
- **React Bootstrap**
- **FontAwesome Icons**

---

## ویژگی ها
- **افزودن به برنامه**: افزودن سریع لینک اشتراک
- **اپلیکیشن ها**: لیست اپلیکیشن های قابل تغییر و توسعه
- **لیست پشتیبانی**: لیست پشتیبانی قابل تغییر و توسعه
- **اطلاعات کاربر**: اطلاعات سرویس کامل و کاربردی
- **مدیریت کانفیگ**: دریافت لیست کانفیگ ها و دریافت بارکد هر کانفیگ

---

## مراحل نصب

### مرزبان

1. **قالب رو دانلود کنید:**
   ```sh
   sudo wget -N -P /var/lib/marzban/templates/subscription/ https://github.com/MatinDehghanian/MarzViteTemplate/releases/download/v.1.1/index.html
   ```

2. **دستورات زیر رو تو ترمینال سرورتون بزنید:**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"' | sudo tee -a /opt/marzban/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /opt/marzban/.env
   ```
یا مقادیر زیر رو در فایل `.env` در پوشه `/opt/marzban` با پاک کردن `#` اول آنها از حالت کامنت در بیارید.
   ```sh
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

3. **ریستارت کردن مرزبان:**
   ```sh
   marzban restart
   ```

### مرزنشین

1. **قالب رو دانلود کنید:**
   ```sh
   sudo wget -N -P /var/lib/marzneshin/templates/subscription/ https://github.com/MatinDehghanian/MarzViteTemplate/releases/download/v.1.1/index.html
   ```

2. **دستورات زیر رو تو ترمینال سرورتون بزنید:**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"' | sudo tee -a /etc/opt/marzneshin/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /etc/opt/marzneshin/.env
   ```
یا مقادیر زیر رو در فایل `.env` در پوشه `/etc/opt/marzneshin` با پاک کردن `#` اول آنها از حالت کامنت در بیارید.
   ```sh
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

3. **ریستارت کردن مرزنشین:**
   ```sh
   marzneshin restart
   ```

---

## بروزرسانی قالب
برای بروزرسانی تمپلیت فقط کافیست مرحله 1 را تکرار کنید.

---

## شخصی ساطی
برای شخصی سازی لیست اپلیکیشن ها یا بروزرسانی لینک یا عکسشون:
- **اپلیکیشن ها**: [public-assets JSON](https://github.com/MatinDehghanian/public-assets/blob/main/json/apps.json)
- **لیست پشتیبانی**: [public-assets JSON](https://github.com/MatinDehghanian/public-assets/blob/main/json/social.json)
- **توضیحات**: ریپازیتوری من رو فورک کنید. و باتوجه به ساختار اون لینک یا اسم یا عکسش رو تغییر بدید

**ویدیو آموزشی**:  
[![YouTube Tutorial Video](https://img.youtube.com/vi/l5Pvy6Hof9o/0.jpg)](https://www.youtube.com/watch?v=l5Pvy6Hof9o)
[![YouTube Tutorial Video #2](https://img.youtube.com/vi/6s8931r9E24/0.jpg)](https://youtu.be/6s8931r9E24)

---

## حمایت و سفارشات
برای پشتیبانی یا سفارش قالب اختصاصی با من توی تلگرام در ارتباط باشید [Telegram](https://t.me/Mqtin).

<a href="https://nowpayments.io/donation?api_key=Z50AKDD-DHSMN86-P0DQ22X-1SQAFCA" target="_blank" rel="noreferrer noopener">
    <img src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments">
</a>


---

# MarzViteTemplate

## Desktop View
<img src="https://raw.githubusercontent.com/MatinDehghanian/MarzViteTemplate/assets/images/desktop.png" title="Marzneshin-Sub-Desktop"/>

## Responsive Mobile View
<img src="https://raw.githubusercontent.com/MatinDehghanian/MarzViteTemplate/assets/images/web-Mobile.JPEG" title="Marzneshin-Sub-Mobile"/>

---

## Built With
- **React**: Version 18
- **Vite**: Version 5
- **React Bootstrap**
- **FontAwesome Icons**

---

## Features
- **Quick Link Addition**: Add subscription links with ease.
- **Customizable Application List**: Modify and extend the app list as needed.
- **Comprehensive Service Information**: Access detailed and practical service info.
- **Config Management**: Retrieve config lists and generate QR codes for each config.
- **Full App Customization**: Tailor applications completely to your needs.

---

## Installation Steps

### For Marzban

1. **Download the Template File:**
   ```sh
   sudo wget -N -P /var/lib/marzban/templates/subscription/ https://github.com/MatinDehghanian/MarzViteTemplate/releases/download/v.1.1/index.html
   ```

2. **Execute the Following Commands in Your Server Terminal:**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"' | sudo tee -a /opt/marzban/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /opt/marzban/.env
   ```
   Or uncomment the following lines in the `.env` file located in `/opt/marzban` by removing the `#` at the beginning:
   ```sh
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

3. **Restart Marzban:**
   ```sh
   marzban restart
   ```

### For Marzneshin

1. **Download the Template File:**
   ```sh
   sudo wget -N -P /var/lib/marzneshin/templates/subscription/ https://github.com/MatinDehghanian/MarzViteTemplate/releases/download/v.1.1/index.html
   ```

2. **Execute the Following Commands in Your Server Terminal:**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"' | sudo tee -a /etc/opt/marzneshin/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /etc/opt/marzneshin/.env
   ```
   Or uncomment the following lines in the `.env` file located in `/etc/opt/marzneshin` by removing the `#` at the beginning:
   ```sh
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

3. **Restart Marzneshin:**
   ```sh
   marzneshin restart
   ```

---

## Updating the Template
To update the template, simply repeat Step 1 from the installation guide.

---

## Customization
To customize the app list or update application links:
- **Repository**: [public-assets JSON](https://github.com/MatinDehghanian/public-assets/blob/main/json/apps.json)
- **Instructions**: Fork the repository if needed, add applications based on the operating system, provide custom icons, or update the program links.

**Video Tutorial**:  
[![YouTube Tutorial Video](https://img.youtube.com/vi/l5Pvy6Hof9o/0.jpg)](https://www.youtube.com/watch?v=l5Pvy6Hof9o)

---

## Support & Custom Orders
For custom templates or support, reach out to me on [Telegram](https://t.me/Mqtin).

<a href="https://nowpayments.io/donation?api_key=Z50AKDD-DHSMN86-P0DQ22X-1SQAFCA" target="_blank" rel="noreferrer noopener">
    <img src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments">
</a>
