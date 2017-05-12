AFRAME.registerComponent("handle-events", {
    schema: {
        target: { type: "selector" },
        position: { type: "string" }
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var textEl = document.querySelector("#text");
        var animation = document.createElement("a-animation");
        var position = el.getAttribute("position");
        position.y -= 0.2; 
        this.el.addEventListener("click", function (evt) {
            var textVal = textEl.getAttribute("text").value;
            console.log(textVal)
            textVal += el.getAttribute("data-letter")
            animation.setAttribute("attribute", "position");
            animation.setAttribute("to", position.x + " " + position.y + " " + position.z);
            animation.setAttribute("dur", "300");
            animation.setAttribute("direction", "alternate");
            animation.setAttribute("repeat", "1");
            textEl.setAttribute("text", {value: textVal})
            el.appendChild(animation);
        });
    }
});