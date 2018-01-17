const data = {}
let value
let reader
const deps = []

Object.defineProperty(data, 'x', {
  get () {
    if (reader && !deps.includes(reader)) {
      deps.push(reader)
    }
    return value
  },
  set (newValue) {
    value = newValue
    deps.forEach(func => func(newValue))
  }
})

function dep1 () {
  reader = dep1
  console.log('dep1 is using data.x', data.x)
  reader = null
}

function　dep2 () {
  reader = dep2
  console.log('dep2 is using data.x', data.x)
  reader = null
}

function test () {
  // touch data
  dep1()
  dep2()

  // change data
  data.x = 'vob'

  // dep1 and dep2 will be notified
}

test()
