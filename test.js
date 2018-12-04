// let EventEmitter = require('events');
 let EventEmitter = require('./EventEmitter');
let util = require('util');

function Girl() {

}
util.inherits(Girl, EventEmitter);
let girl = new Girl;
girl.on('newListener',function (type) {
console.log(type,11)
})
let cry = function () {
  console.log('cry')
}
let eat = function () {
  console.log('eat')
}
let eatt = function () {
  console.log('eateateateat')
}
// girl.setMaxListeners(1)
girl.once('你好', cry);
girl.once('你好', eat);
girl.off('你好', eat);
// girl.on('你好', eat);
// girl.on('你好你好', cry);
// girl.prependListener('你好', eatt);

girl.emit('你好')
// girl.emit('你好你好')
girl.emit('你好')
girl.emit('你好')
girl.emit('你好')
//girl.emit('你好你好')