แบบทดสอบ GEC

วิธี run project

1.yarn หรือ npm install

2.yarn start หรือ npm start

เนื่องจาก json-server เป็นตัวช่วยที่สะดวกและง่ายในการจำลอง api ที่เครื่อง dev จึงใช้ json-server เป็นตัว ###mockdata อย่างง่าย

กรณี browser ไม่เปิดหน้าเว็บให้อัตโนมัติ สามารถเข้าหน้าเว็บได้ที่ http://localhost:3006 ตัวจำลอง api(json-server) อย่างง่าย http://localhost:3000
หากต้องการเปลี่ยน PORT สามารถเปลี่ยนได้ที่ไฟล์ .env ได้ที่ root folder project