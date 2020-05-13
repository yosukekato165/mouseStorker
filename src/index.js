import './scss/styles.scss';

(()=> {
    let height = window.innerHeight;
        let circle = document.querySelector('.circle');
        let circlewidth = circle.clientWidth;
        let circleheight = circle.clientHeight;
        let mouse = {
            x: 0,
            y: 0,
        };
        let pos = {
            x: 0,
            y: 0,
        };
        let friction = .1;
        let box = document.querySelector('.box');
    
        window.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            circle.classList.add('click');
        })
    
        box.addEventListener('mouseover', function (e) {
            circle.classList.add('active');
        })
        box.addEventListener('mouseleave', function (e) {
            circle.classList.remove('active');
            circle.classList.remove('grow');
        })
        box.addEventListener('mousedown', function (e) {
            circle.classList.add('grow');
        })
    
        draw();
        function draw() {
            TweenMax.to({}, .001, {
                repeat: -1,
                onRepeat: function () {
                    pos.x += (mouse.x - pos.x) * friction;
                    pos.y += (mouse.y - pos.y) * friction;
                    TweenMax.set(circle, {
                        left: pos.x - circlewidth / 2,
                        top: pos.y - circleheight / 2,
                    })
                    if (pos.y <= 0 + circleheight / 2 || pos.y >= height - circleheight / 2) {
                        TweenMax.to(circle, .2, {
                            opacity: 0,
                        })
                    }
                    else {
                        TweenMax.to(circle, 1, {
                            opacity: 1,
                        })
                    }
                }
            })
        }
})();