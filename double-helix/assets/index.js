document.body.onload = addElement;
function addElement() {
  const wrapper = document.querySelector(".helix");

  for (let index = 1; index < 21; index++) {
    const e = document.createElement("div");
    e.className = "strand";
    e.style = "--i:" + index;
    e.innerHTML = `
      <div class="left">
        <div class="dot"></div>
        <div class="line"></div>
      </div>
      <div class="right">
        <div class="dot"></div>
        <div class="line"></div>
      </div>
    `;
    wrapper.appendChild(e);
  }
}
