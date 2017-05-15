AFRAME.registerComponent("link", {
    schema: {
        target: { type: "string" }
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var animation = document.createElement("a-animation");
        this.el.addEventListener('mouseenter', function (e) {
            el.setAttribute("material", { color: '#3982FF' })
        });
        this.el.addEventListener('mouseleave', function (e) {
            el.setAttribute("material", { color: '#396CFF' })
console.log(data.target)
        });
        this.el.addEventListener("click", function (evt) {
            // animation.setAttribute("attribute", "position");
            // animation.setAttribute("to", position.x + " " + position.y + " " + position.z);
            // animation.setAttribute("dur", "300");
            // animation.setAttribute("direction", "alternate");
            // animation.setAttribute("repeat", "1");
//            el.appendChild(animation);
            window.location.href = data.target;
        });
    }
});