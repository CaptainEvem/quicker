![#F8B4B5](https://via.placeholder.com/10/F8B4B5?text=+)
**Including Quicker**

```javascript
const qer = require(quicker.js);
```
![#D66464](https://via.placeholder.com/10/D66464?text=+)
**Addition Usage**

```javascript
let quick = qer.addition(1, 3);
qer.log(quick);
//logs 4 to the console
```
![#BB4140](https://via.placeholder.com/10/BB4140?text=+)
**Substraction Usage**

```javascript
let quick = qer.substraction(5, 3);
qer.log(quick);
//logs 2 to the console
```
![#971F20](https://via.placeholder.com/10/971F20?text=+)
**Multiplation Usage**

```javascript
let quick = qer.multiplation(2, 7);
qer.log(quick);
//logs 14 to the console
```
![#501010](https://via.placeholder.com/10/501010?text=+)
**Division Usage**

```javascript
let quick = qer.division(20, 2);
qer.log(quick);
//logs 10 to the console
```
![#501010](https://via.placeholder.com/10/91F086?text=+)
**Getting Date**

```javascript
let quick = qer.getDate();
qer.log(quick);
//logs YYYY-MM-DD XX:XX to the console
```
![#501010](https://via.placeholder.com/10/48BF53?text=+)
**Random Number**

```javascript
let quick = qer.random(1, 10);
//logs a random number between 1 and 10 to the console
```
![#501010](https://via.placeholder.com/10/11823B?text=+)
**Console Logging**

```javascript
qer.log('Hello World!');
//logs Hello World! to the onsole.
```
![#501010](https://via.placeholder.com/10/004D25?text=+)
**Encryption & Decryption**

```javascript
//Encryption
let encrypted = qer.encrypt("text");
//Encryption

let iv = encrypted.iv;
qer.log(iv);
//logs iv of encryption

let secretKey = encrypted.secretKey;
qer.log(secretKey);
//logs secretKet of encryption

let encrypt = encrypted.encrypt;
qer.log(encrypt);
//logs encrypted text

//Decryption
let decrypted = qer.decrypt(encrypt, secretKey, iv);
//Decryption

qer.log(decrypted);
//logs decrypted text
```
![#501010](https://via.placeholder.com/10/02231C?text=+)
**TimeOut Usage**

```javascript
qer.timeOut(10000,
    function FunctionName(){
        qer.log("The Code Runs After 10 Seconds!")
    }
);
//Runs the code after 10 seconds.
```
![#501010](https://via.placeholder.com/10/B3CDE0?text=+)
**TimerInterval Usage**

```javascript
qer.timerInterval(10000,
    function FunctionName(){
        qer.log("The Code Runs Every 10 Seconds")
    }
);
//Code Runs Every 10 Seconds
```
![#501010](https://via.placeholder.com/10/6497B1?text=+)
**Square Root Usage**
```javascript
let sqrt = qer.squareroot(64);
//Calculates the square root of 64

qer.log(sqrt);
//Logs the Calculated
```
![#501010](https://via.placeholder.com/10/005B96?text=+)
**Calculating Circle's Circumferance**
```javascript
let circumferance = qer.calculateCircumferance(10);
qer.log(circumferance);
//Logs the circumference of a circle with radius 10
```
