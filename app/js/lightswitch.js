AFRAME.registerComponent("lightswitch", {
    schema: {
    },
    init: function () {
        var duration = 15000;
        var data = this.data;
        var el = this.el;  // <a-box>
        var sunEl = document.querySelector('#sun');
        var sunAnimation = document.createElement("a-animation");
        var sunAnimationColor = document.createElement("a-animation");
        var ambientEl = document.querySelector('#light-ambient')
        var ambientAnimation = document.createElement("a-animation");
        var skyEl = document.querySelector('#sky')
        var skyAnimation = document.createElement("a-animation");
        var laptopLight = document.querySelector('#laptop-light')
        var laptopLightAnimation = document.createElement("a-animation");
        
        sunAnimation.setAttribute('attribute', 'position');
        sunAnimation.setAttribute('to', '-9 3.157 7.573');
        sunAnimation.setAttribute('dur', duration);
        sunAnimationColor.setAttribute('attribute', 'light.color');
        sunAnimationColor.setAttribute('dur', duration);
        sunAnimationColor.setAttribute('direction', 'forwards');
        sunAnimationColor.setAttribute('from', '#FFE2AB');
        sunAnimationColor.setAttribute('to', '#1313ff');

        ambientAnimation.setAttribute('attribute', 'light.intensity')
        ambientAnimation.setAttribute('direction', 'forwards')
        ambientAnimation.setAttribute('to', '.002')
        ambientAnimation.setAttribute('dur', duration)

        laptopLightAnimation.setAttribute('attribute', 'light.intensity')
        laptopLightAnimation.setAttribute('direction', 'forwards')
        laptopLightAnimation.setAttribute('from', '0')
        laptopLightAnimation.setAttribute('to', '0.4')
        laptopLightAnimation.setAttribute('dur', duration)

        skyAnimation.setAttribute('attribute', 'color')
        skyAnimation.setAttribute('direction', 'both')
        skyAnimation.setAttribute('from', '#687F98')
        skyAnimation.setAttribute('to', '#050512')
        skyAnimation.setAttribute('dur', duration)    
  
        this.el.addEventListener('mouseenter', function (e) {
            el.setAttribute("material", { color: '#3982FF' })
        });
        this.el.addEventListener('mouseleave', function (e) {
            el.setAttribute("material", { color: '#396CFF' })
        });
        this.el.addEventListener("click", function (evt) {
              sunEl.appendChild(sunAnimation);
              sunEl.appendChild(sunAnimationColor);
              ambientEl.appendChild(ambientAnimation);
              skyEl.appendChild(skyAnimation);
              laptopLight.appendChild(laptopLightAnimation);
        });
    }
});