const os = require('os');

console.log(os.userInfo());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.loadavg());
console.log(os.machine());
console.log(os.platform());
console.log(os.version());
console.log(os.totalmem());
console.log(os.uptime());
console.log(os.getPriority());
console.log(os.type());
console.log(os.release());

const userInfo = os.userInfo();
const architecture = os.arch();
const cpus = os.cpus();
const freeMemory = os.freemem();
const homeDirectory = os.homedir();
const hostName = os.hostname();
const platForm = os.platform();
const loadAverage =  os.loadavg();
const machine = os.machine();
const platform = os.platform();
const version = os.version();
const totalMemory = os.totalmem();
const upTime = os.uptime();
const getPriority = os.getPriority();
const type = os.type();
const release = os.release();

console.log({
    userInfo,
    architecture,
    cpus,
    freeMemory,
    homeDirectory,
    hostName,
    platForm,
    loadAverage,
    machine,
    platForm,
    version,
    totalMemory,
    upTime,
    getPriority,
    type,
    release
});
/**
 * {
  userInfo: [Object: null prototype] {
    uid: -1,
    gid: -1,
    username: 'krish',
    homedir: 'C:\\Users\\krish',
    shell: null
  },
  architecture: 'x64',
  cpus: [
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    },
    {
      model: 'AMD Ryzen 5 6600H with Radeon Graphics         ',
      speed: 3294,
      times: [Object]
    }
  ],
  freeMemory: 5918670848,
  homeDirectory: 'C:\\Users\\krish',
  hostName: 'LAPTOP-S857RFFN',
  platForm: 'win32',
  loadAverage: [ 0, 0, 0 ],
  machine: 'x86_64',
  version: 'Windows 11 Home Single Language',
  totalMemory: 16438312960,
  upTime: 398307.5,
  getPriority: 0,
  type: 'Windows_NT',
  release: '10.0.26100'
}
 */