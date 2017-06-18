{/*<a-entity id='enemy-ship' sound="src: #sound-ship; volume: .9; autoplay: true" scale='1 1 1' rotation='6 -90 0' position='-50 -3.798 7.315' material='color: white; roughness: 1; shader:standard;'
    obj-model="obj: #_ship">
    <a-animation delay='18000' attribute='position' dur='32000' to='800.667 12.397 2.580'>
        </a-entity>*/}

AFRAME.registerComponent('spawnships', {
    schema: { type: 'string' },

    init: function () {
        var scene = this.el;
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var spawn = function () {
            var data = this.data;
            var shipEl = document.createElement('a-entity');
            shipEl.setAttribute('scale', '1 1 1');
            shipEl.setAttribute('rotation', getRandomInt(-3, 5) + ' -90 0');
            shipEl.setAttribute('position', '-50 13.798 ' + getRandomInt(-20, 20));
            shipEl.setAttribute('material', 'color: white; roughness: 1; shader:standard;');
            shipEl.setAttribute('obj-model', 'obj: #_ship');
            scene.appendChild(shipEl)

            var animationEl = document.createElement('a-animation')
            animationEl.setAttribute('delay', '1000');
            animationEl.setAttribute('attribute', 'position');
            animationEl.setAttribute('dur', getRandomInt(25000, 35000));
            animationEl.setAttribute('to', '800.667 ' + getRandomInt(20, 100) +  ' ' + getRandomInt(-50, 50));
            shipEl.appendChild(animationEl)
            
            var soundEl = document.createElement('a-sound')
            soundEl.setAttribute('src', '#sound-ship');
            soundEl.setAttribute('volume', '.1');
            soundEl.setAttribute('autoplay', 'true');
            shipEl.appendChild(soundEl)

            setTimeout(spawn, getRandomInt(5000, 15000));
        };
        spawn();

    }
});