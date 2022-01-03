const createSnow = (n) => {

  let i = 1;
  const count = 3;

  const style = document.createElement('style');
  style.textContent = `
    body {
      position: relative;
    }
    .snow {
      width: 20px;
      height: 20px;
      position: fixed;
      top: -20px;
      pointer-events: none;
      // background-color: white;
      // border-radius: 50%;
      background-repeat: no-repeat;
      animation: fall linear;
    }
    @keyframes fall {
      100% {
        transform: translateY(100vh);
      }
    }`;

  document.head.append(style);

  const createSnowFlake = () => {

    const snow = document.createElement('div');
    snow.classList.add('snow');

    i += 1;

    if (i > count) i = 1;

    snow.style.left = (Math.random() * window.innerWidth) + 'px';
    snow.style.opacity = Math.random();
    snow.style.animationDuration = (Math.random() * n + 4) + 's';
    snow.style.backgroundImage = `url('./img/snow/s${i}.png')`;

    document.body.append(snow);

    setTimeout(() => {
      snow.remove();
    }, (n + 4) * 1000);

  };

  setInterval(createSnowFlake, 120);

};

createSnow(8);








