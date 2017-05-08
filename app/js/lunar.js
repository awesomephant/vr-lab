
AFRAME.registerComponent('log', {
  schema: { type: 'string' },
  init: function () {
    var stringToLog = this.data;
  }
});

var sceneEl = document.querySelector('a-scene');
    var el = sceneEl.querySelector('#lander-instance');
    console.log(el.body);
    el.body.applyImpulse(
  /* impulse */        new CANNON.Vec3(0, 1, -31),
  /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))
    );