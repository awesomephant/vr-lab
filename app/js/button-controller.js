AFRAME.registerComponent('handle-button', {
        init: function () {
          var el = this.el;  // <a-box>
          el.addEventListener('mouseenter', function () {
            el.setAttribute('color', '#24CAFF');  
          });
          el.addEventListener('mouseleave', function () {
            el.setAttribute('color', '#EF2D5E');  
          });
          el.addEventListener('click', function () {
              window.location.href = 'http://www.google.com';  
            el.setAttribute('scale', {x: 2, y: 1, z: 2});
          });
        } 
      });