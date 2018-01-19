/*

  in a system, directive is something that connects target and data.

  for example in Vue.js, directive bind data to node, so that any data
  update would reflected to dom node. And expression is used in Vue so that
  directive is able to collect dependencies in data.
  thinking in this way, Vue.js is a system composed with node(dom/component) as target,
  directive and expression to express data.

  Target <-----> Directive <-----> Data
                              |
                              |
                              |
                          expression

*/


class SocketDirective extends Directive {
  bind () {
    // bind data with a target
    // listen remote change
    socket.on('change', () => {
      // change reactive data
      vob.pauseReactive()
      data.x = x  // dont let this change emit again
      vob.resumeReactive()
    })
  }

  unbind () {
    socket.off('change')
  }

  update () {
    // define how to update target with data
    // emit local change
    socket.emit('change', xxx)
  }
}
