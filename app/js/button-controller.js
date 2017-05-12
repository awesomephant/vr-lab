AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        target: { type: "selector" },
        position: { type: "string" }
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var animation = document.createElement("a-animation");
        this.el.addEventListener('click', function (evt) {
            animation.setAttribute("attribute", "position");
            animation.setAttribute("to", data.position);
            animation.setAttribute("dur", "1000");
            animation.setAttribute("repeat", "0");
            data.target.appendChild(animation);
        });
    }
});