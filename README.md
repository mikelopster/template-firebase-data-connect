## Description 

Code ชุดนี้เป็นส่วนหนึ่งของบทความ "ลอง Firebase Data Connect"

[![firebase-data-connect](https://mikelopster.dev/img/thumbnail-blogs/firebase-data-connect.webp)](https://mikelopster.dev/posts/firebase-data-connect/)

https://mikelopster.dev/posts/firebase-data-connect/

โดย code ชุดนี้ประกอบด้วย
- ตัวอย่างการวาง config Firebase + Data Connect (app.js)
- การใช้งาน query, mutation บน Firebase data connect (สามารถอ่านบทความประกอบได้)

วิธี Run project
- วิธี run command ทั้งหมดจะต้องผ่านการ setup ที่ถูกต้องใน Firebase + เปิดใช้งาน service Firebase Data Connect
- สามารถอ่านวิธี install และ วิธี run เพิ่มเติมได้ในตัวบทความ

```shell
# install package
npm install

# migrate และ deploy ขึ้น Firebase data connect
firebase dataconnect:sql:migrate
firebase deploy

# generate sdk data connect
firebase dataconnect:sdk:generate

# วาง Firebase config ที่ firebase.json
node main.js
```
