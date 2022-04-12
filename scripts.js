const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const h = now.getHours();

  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
        <span style="font-weight: 900">${h}</span> : 
        <span style="font-weight: 500">${m}</span> : 
        <span style="font-weight: 100">${s}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
