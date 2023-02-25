const os = require('os');
const crypto = require('crypto')
const timers = require('timers')

function addition(s1, s2){
    return s1 + s2 
}

function substraction(s1, s2){
    return s1 - s2
}

function multiplation(s1, s2){
    return s1 * s2 
}

function division(s1, s2){
    return s1 / s2 
}

const getDate = () =>{
    var today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0');
    var YYYY = today.getFullYear();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    let time = ((today.getHours().toString()).length>1? today.getHours() : "0"+today.getHours()) +":"+ ((today.getMinutes().toString()).length>1? today.getMinutes() : "0"+today.getMinutes());
    today = YYYY +'-'+ MM +'-'+ DD +' '+ time;
    return today;
}

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function log(text){
    console.log(text);
}

const bit={
    return: os.arch()
}
const cpu={
    return: os.cpus()
}
const freeMem ={
    return: os.freemem()
}
const homedir={
    return: os.homedir()
}
const pcname={
    return: os.hostname()
}
const ip={
    return: os.networkInterfaces()
}
const platform={
    return: os.platform()
}
const tempDir={
    return: os.tmpdir()
}
const totalMem={
    return: os.totalmem()
}
const systemType={
    return: os.type()
}
const uptime={
    return: os.uptime()
}
const userInfo={
    return: os.userInfo()
}
const osVersion={
    return: os.version()
}

function encrypt(text){
    const iv = crypto.randomBytes(16);
    const secretKey = crypto.randomBytes(32);
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encrypt: encrypted, secretKey: secretKey };
}

function decrypt(text, secretKey, iv){
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

function timeOut(s ,code){
    let ss = parseInt(s);
    timers.setTimeout(() => {
        code()
    }, ss);
}

function timerInterval(s, code){
    let ss = parseInt(s);
    timers.setInterval(() => {
        code()
    }, ss);
}

function squareroot(s){
    let ss = parseInt(s);
    return Math.sqrt(ss);
}

function calculateCircumferance(radius){
    return 2 * Math.PI * radius;
}

module.exports={
    addition,
    substraction,
    multiplation,
    division,
    random,
    getDate,
    log,
    bit,
    cpu,
    freeMem,
    homedir,
    pcname,
    ip,
    platform,
    tempDir,
    totalMem,
    systemType,
    uptime,
    userInfo,
    osVersion,
    encrypt,
    decrypt,
    timeOut,
    timerInterval,
    squareroot,
    calculateCircumferance
}