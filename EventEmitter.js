function EventEmitter() {
  this._events=Object.create(null)
}
EventEmitter.prototype.prependListener=function(eventName,callback) {
  this.on(eventName,callback,true)
}
EventEmitter.prototype.on=function (eventName,callback,flag) {
  if (!this._events) this._events = Object.create(null);
  if(eventName!='newListener'){
    this._events['newListener'].forEach(fn=>{
      fn(eventName)
    })
  }
  if(this._events[eventName]){
    if(flag){
      this._events[eventName].unshift(callback)
    }
    this._events[eventName].push(callback)
  }else{
    this._events[eventName]=[callback]
  }
}
EventEmitter.prototype.off=function(eventName,callback) {
  this._events[eventName]=this._events[eventName].filter((item)=>{
    // console.log(item.l.toString(),callback.toString(),item.l==callback)
    return item!=callback &&item.l!=callback
  })
  
}
EventEmitter.prototype.once=function(eventName,callback) {
  function one(...args) {
    callback(...args)
    this.off(eventName, one)
  }
  one.l=callback
  this.on(eventName, one)
}




EventEmitter.prototype.emit=function (eventName,...args) {
  this._events[eventName].forEach(fn => {
    fn.call(this,...args)
  });
}



module.exports= EventEmitter