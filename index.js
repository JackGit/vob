const data = {}
const reactiveObj = new Vob(data)

function dep1 () {
  console.log(data.a)
}

function dep2 () {
  console.log(data.b)
}

function test () {
  data.a = 1 // will notify dep1, so dep1() outputs 1
  data.b = 2 // will notify dep2, so dep2() outputs 2
}
