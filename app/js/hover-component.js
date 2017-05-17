function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
AFRAME.registerComponent("hover", {
    schema: {
    },
    init: function () {
        var data = this.data;
        var el = this.el;
        var offset = getRandomArbitrary(.2, .5);
        var position = el.getAttribute("position");
        var animation = document.createElement("a-animation");
        el.setAttribute('material', 'color: #E6F1FA; roughness: 1')
        el.setAttribute('rotation', 'color: #E6F1FA; roughness: 1')
        el.setAttribute('shadow', 'cast: true; receive: true')
        animation.setAttribute('attribute', 'position');
        animation.setAttribute('from', position.x + ' ' + position.y + ' ' + position.z);
        animation.setAttribute('to', position.x + ' ' + (position.y - offset) + ' ' + position.z);
        animation.setAttribute('dur', getRandomInt(3000, 5000));
        animation.setAttribute('repeat', 'indefinite');
        animation.setAttribute('direction', 'alternate');
        el.appendChild(animation)
    }
});