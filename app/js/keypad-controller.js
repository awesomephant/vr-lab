AFRAME.registerComponent("key", {
    schema: {
        value: { type: "string" }
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var textEl = document.querySelector("#text");
        var animation = document.createElement("a-animation");
        var position = el.getAttribute("position");
        var allKeys = document.querySelectorAll('[key]');
        el.setAttribute('material', 'color: pink');
        el.setAttribute('depth', '.1');
        el.setAttribute('width', '.1');
        el.setAttribute('height', '.1');
        el.setAttribute('position', position.x + ' 0.039 ' + position.z)
        position = el.getAttribute("position");

        this.el.addEventListener('mouseenter', function (e) {
            //            el.setAttribute("material", { color: '#3982FF' })
        });
        this.el.addEventListener('mouseleave', function (e) {
        });
        this.el.addEventListener("click", function (evt) {
            el.setAttribute("material", { color: '#396CFF' })
            if (gameState.currentCombination.length < 4) {
                gameState.currentCombination += data.value;
            } else {
                for (var i = 0; i < allKeys.length; i++) {
                    allKeys[i].setAttribute('material', 'color: pink')
                }
                el.setAttribute("material", { color: '#396CFF' })

                gameState.currentCombination = data.value; //wipe and start from scratch
            }

            console.log(gameState.currentCombination)
            if (gameState.currentCombination === gameState.solution) {
                console.log('found')
                gameState.canProgress = true;
            }
            position.y -= 0.02;
            animation.setAttribute("attribute", "position");
            animation.setAttribute("to", position.x + " " + position.y + " " + position.z);
            animation.setAttribute("dur", "300");
            animation.setAttribute("direction", "alternate");
            animation.setAttribute("repeat", "1");
            el.appendChild(animation);
        });
    }
});

AFRAME.registerComponent("solutiontext", {
    init: function () {
        var data = this.data;
        var el = this.el;

    }
});