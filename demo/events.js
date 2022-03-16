const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('anything', data =>{
//   console.log('ON: anything', data)
// })

// emitter.emit('anything', {a:1})

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]')
    this.on(eventName, cb)
  }
  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const disp = new Dispatcher()

disp.subscribe('aa', data => {
  console.log('ON: aa', data)
})

disp.dispatch('aa', {aa:22})
