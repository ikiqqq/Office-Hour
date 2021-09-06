
# Interview Questions

List of coding interview questions from Glints Academy


## 1. What is OOP? and Describe briefly about its four pillars.

OOP
- Scalable
- Maintainable
- Readable
- DRY

Inheritance
- Inherit the properties/methods from the parent

Abstraction
- hide the details/unnecessary properties to user

Polymorphism
- Overiding the methods/properties from parent

Encapsulation
- Hide/limit the access of certain properties/methods

## 2. what do you mean about NULL

The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.

## 3. What's API? Then, what's REST API?


## 4. processes when we hit a url until server sends the response

Browser, mengetikkan alamat url dikirim ke DNS (domain name system)
Dns : mengubah url website kedalam bentuk ip adress, 
Dns mencari informasi di file host
File host mengarahkan hosname ke ip
Jika tidak ditemukan maka server akan mencari di chace yang berada  didalam web browser dan isp
Chache (komponen hard and software yg ngesave dats untuk sementara
Jika tdk ditemukan lagi di chache dns akan meminta server lain atas nama browser untuk mencari di chace isp 
Jika tidak ditemukan di chace isp maka mengirim permintaan ke rootname server untuk menakses area yg lebih spesifik yaitu top level domain (tld)
Dns juga minta bantuan ke root name serever(penyimpanan refrensi)

Domain diakhiri .com yag disebut tld
Google.com-> meminta informasi->tld sebagai satu satunya delegasi akan merespon permintaan dns  dengan mengacu pada authoritative name server. Server ini lah yang memiliki sumber asli untuk domain tersebut
Dns ketemu ans  sudah pasti akan ketemu jawaban dari informasi dari website yg sedang dicari
Setelah itu web browser menampilkan halaman web

https://www.freecodecamp.org/news/what-happens-when-you-hit-url-in-your-browser/
  