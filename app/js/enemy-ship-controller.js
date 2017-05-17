AFRAME.registerComponent("enemy-controller", {
    schema: {
    },
    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
   
        this.el.addEventListener('mouseenter', function (e) {
            //            el.setAttribute("material", { color: '#3982FF' })
        });
        this.el.addEventListener('mouseleave', function (e) {
        });
        this.el.addEventListener("click", function (evt) {
            el.setAttribute("material", { color: '#396CFF' })
            console.log('enemy hit')
            gameState.score += 1;

            if (gameState.score >= gameState.requiredScore){
                gameState.canProgress = true;
                
            }

        });
    }
});
