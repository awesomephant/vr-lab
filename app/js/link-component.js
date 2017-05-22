AFRAME.registerComponent("link", {
    schema: {
        target: { type: "string" }
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var camera = document.querySelector('#camera')
        var cameraAnimation = document.createElement("a-animation");
        this.el.addEventListener('mouseenter', function (e) {
            //el.setAttribute("material", { color: '#3982FF' })
        });
        this.el.addEventListener('mouseleave', function (e) {
            // el.setAttribute("material", { color: '#396CFF' })
        });
        this.el.addEventListener("click", function (evt) {
            var pos = el.getAttribute('position');
            cameraAnimation.setAttribute("attribute", "position");
            cameraAnimation.setAttribute("to", pos.x + ' ' + pos.y + ' ' + pos.z);
            cameraAnimation.setAttribute("dur", 5000);
            camera.appendChild(cameraAnimation);
            setTimeout(function () {
                window.location.href = data.target;
            }, 4000)
        });
    }
});