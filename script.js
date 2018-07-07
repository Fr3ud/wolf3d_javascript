(function() {

     const map = [
         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
         [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
         [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
         [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
         [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
     ];

     const minimap = document.getElementById('minimap');
     const objects = document.getElementById('objects');
     const screen = document.getElementById('screen');
     const width = map[0].length;
     const height = map.length;
     const scale = 8;
     const screenWidth = 320;
     const screenHeight = 200;
     const stripWidth = 4;
     const numRays = Math.ceil(screenWidth / stripWidth);
     const fov = 60 * Math.PI / 180;
     const viewDist = (screenWidth / 2) / Math.tan(fov / 2);
     const twoPI = Math.PI * 2;
     const player = {
         x: 4,
         y: 2,
         direction: 0,
         rotation: 0,
         speed: 0,
         moveSpeed: 0.15,
         rotationSpeed: 0.15
     };
     const screenStrips = [];
     
     function initScreen() {
         for (let i = 0; i < screenWidth; i += stripWidth) {
             let strip = document.createElement('div');

             strip.style.position = 'absolute';
             strip.style.left = i + 'px';
             strip.style.width = stripWidth + 'px';
             strip.style.height = '0px';
             strip.style.overflow = 'hidden';
             strip.style.backgroundColor = 'magenta';

             // let img = new Image();
             // img.src = 'walls.png';
             // img.style.position = 'absolute';
             // img.style.left = '0px';
             //
             // strip.appendChild(img);
             // strip.img = img;

             screenStrips.push(strip);
             screen.appendChild(strip);
         }
     }

     function keys() {
         window.addEventListener('keydown', (e) => {
             console.log(e);
             switch (e.key) {
                 case 'ArrowUp':
                     player.speed = 1;
                     // console.log(player.x, player.y);
                     break;
                 case 'ArrowDown':
                     player.speed = -1;
                     // console.log(player.x, player.y);
                     break;
                 case 'ArrowRight':
                     player.direction = 1;
                     // console.log(player.x, player.y);
                     break;
                 case 'ArrowLeft':
                     player.direction = -1;
                     // console.log(player.x, player.y);
                     break;
             }
         }, true);

         window.addEventListener('keyup', (e) => {
             switch (e.key) {
                 case 'ArrowUp':
                 case 'ArrowDown':
                     // console.log('up');
                     player.speed = 0;
                     break;
                 case 'ArrowRight':
                 case 'ArrowLeft':
                     player.direction = 0;
                     break;
             }
         }, true);
     }

     function isEmpty(x, y) {
         if (x > 0 && x < width && y > 0 && y < height)
             return (map[Math.floor(x)][Math.floor(y)] === 0);
         return false;
     }

    function move() {
        const moveStep = player.speed * player.moveSpeed;

        player.rotation += player.direction * player.rotationSpeed;
        let newX = player.x + Math.cos(player.rotation) * moveStep;
        let newY = player.y + Math.sin(player.rotation) * moveStep;

        if (isEmpty(newX, newY)) {
            player.x = newX;
            player.y = newY;
        }
    }

    function castRays() {
         let stripIdx = 0;

         for (let i = 0; i < numRays; i++) {
             let rayScreenPosition = (-numRays / 2 + i) * stripWidth;
             let rayViewDist = Math.sqrt(rayScreenPosition * rayScreenPosition + viewDist * viewDist);
             let rayAngle = Math.asin(rayScreenPosition / rayViewDist);
             // console.log(rayAngle);
             // let test = rayAngle +twoPI;
             // console.log(`--${test}`);

             castSingleRay(player.rotation + rayAngle, stripIdx++);
         }
    }

    function castSingleRay(angle, stripIdx) {
        angle %= twoPI;
        if (angle < 0)
            angle += twoPI;

        const right = (angle > twoPI * 0.75 || angle < twoPI * 0.25);
        const up = (angle < 0 || angle > Math.PI);
        const angleSin = Math.sin(angle);
        const angleCos = Math.cos(angle);
        let slope = angleSin / angleCos;
        let dX = right ? 1 : -1;
        let dY = dX * slope;
        let x = right ? Math.ceil(player.x) : Math.floor(player.x);
        let y = player.y + (x - player.x) * slope;
        let dist = 0;
        let xHit = 0;
        let yHit = 0;
        let textureX;

        while (x >= 0 && x < width && y >= 0 && y < height) {
            let wallX = Math.floor(x + (right ? 0 : -1));
            let wallY = Math.floor(y);

            if (map[wallX][wallY] > 0) {
                let distX = x - player.x;
                let distY = y - player.y;

                dist = distX * distX + distY * distY;
                textureX = y % 1;
                if (!right)
                    textureX = 1 - textureX;
                xHit = x;
                yHit = y;
                break;
            }
            x += dX;
            y += dY;
        }

        //horizontal

        slope = angleCos / angleSin;
        dY = up ? -1 : 1;
        dX = dY * slope;
        y = up ? Math.floor(player.y) : Math.ceil(player.y);
        x = player.x + (y - player.y) * slope;

        while (x >= 0 && x < width && y >= 0 && y < height) {
            let wallY = Math.floor(y + (up ? -1 : 0));
            let wallX = Math.floor(x);
            if (map[wallX][wallY] > 0) {
                let distX = x - player.x;
                let distY = y - player.y;
                let blockDist = distX * distX + distY * distY;
                if (!dist || blockDist < dist) {
                    dist = blockDist;
                    xHit = x;
                    yHit = y;
                    textureX = x % 1;
                    if (up)
                        textureX = 1 - textureX;
                }
                break;
            }
        x += dX;
        y += dY;
        }

        if (dist) {
            drawRay(xHit, yHit);
            let strip = screenStrips[stripIdx];
            // console.log(screenStrips[stripIdx]);
            let height;
            let width;
            let top;

            dist = Math.sqrt(dist);
            dist = dist * Math.cos(player.rotation - angle);
            height = Math.round(viewDist / dist);
            width = height * stripWidth;
            top = Math.round((screenHeight - height) / 2);

            strip.style.height = height + 'px';
            strip.style.top = top + 'px';

        }
    }

    function drawRay(x, y) {
        const objectsCtx = objects.getContext('2d');

        objectsCtx.strokeStyle = 'rgba(20, 220, 120, 0.3)';
        objectsCtx.lineWidth = 0.5;
        objectsCtx.beginPath();
        objectsCtx.moveTo(player.x * scale, player.y * scale);
        objectsCtx.lineTo(x * scale, y * scale);
        objectsCtx.closePath();
        objectsCtx.stroke();
    }

    function updateMinimap() {
        const objectsCtx = objects.getContext('2d');

        objectsCtx.clearRect(0, 0, minimap.width, minimap.height);
        objectsCtx.fillStyle = 'red';
        objectsCtx.fillRect(player.x * scale - 2, player.y * scale - 2, 4, 4);
        objectsCtx.strokeStyle = 'red';
        objectsCtx.beginPath();
        objectsCtx.moveTo(player.x * scale, player.y * scale);
        objectsCtx.lineTo(
            (player.x + Math.cos(player.rotation) * 4) * scale,
            (player.y + Math.sin(player.rotation) * 4) * scale
        );
        objectsCtx.closePath();
        objectsCtx.stroke();

    }

    function drawMinimap() {
        const ctx = minimap.getContext('2d');

        minimap.width = width * scale;
        minimap.height = height * scale;
        objects.width = width * scale;
        objects.height = height * scale;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let block = map[x][y];

                if (block) {
                    ctx.fillStyle = '#bebebe';
                    ctx.fillRect(x * scale, y * scale, scale, scale);
                }
            }
        }
        updateMinimap();
    }

    function loop() {
        move();
        updateMinimap();
        castRays();
        setTimeout(loop, 33);
    }

    function init() {
        keys();
        initScreen();
        drawMinimap();
        loop();
    }

     init();
 })();
