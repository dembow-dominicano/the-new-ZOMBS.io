/** * removed things from the scripts, but it will be added in the future
.hud-intro::before {
    content: var(--background-before, '');
    background-size: cover;

    <script>
    function cambiarFondo() {
        const inputUrl = document.querySelector('.beautiful-input');
        const setButton = document.querySelector('.sBackground');
        const intro = document.querySelector('.hud-intro');
        
        setButton.addEventListener('click', () => {
            const imageUrl = inputUrl.value;
            intro.style.backgroundImage = `url('${imageUrl}')`;
            
            // Establece el contenido del pseudo-elemento ::before
            intro.style.setProperty('--background-before', 'url('${imageUrl}')');
        });
          </script>
        **/

//Removers
document.querySelectorAll('.hud-intro-stone-1, .hud-intro-tree-1, .hud-intro-stone-2, .hud-intro-tree-2').forEach(function(a) {
    a.remove();
  });
//Style
let css = `
  .hud-intro-main .hud-intro-form, .hud-intro-main .hud-intro-settings, .hud-intro-main .hud-intro-modes {
      width: 327px;
      height: auto;
      padding: 20px;
      background: #66525266;
      border-radius: 6px;
      border-style: groove;
      border-bottom-width: thick;
  }
  label, h1, h2, h3, h4, h5, h6 {
      font-family: 'Roboto Mono', monospace;
  }
  .hud-intro::before {
    background-image: url('https://w0.peakpx.com/wallpaper/800/977/HD-wallpaper-abstract-low-poly-3d-abstract-low-poly-3d.jpg');
    background-size: cover;
}
}
  .hud-intro .hud-intro-footer .hud-intro-footer-center {
    position: fixed;
    display: block;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: #fff6;
    text-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-style: solid;
  }
  div#hud-intro-modes {
        width: 400px;
        height: 80px;
    }
    div#hud-intro-modes-scripts {
        display: block;
        border-style: groove;
        position: relative;
        top: 20px;
        height: 182px;
        width: 350px;
        padding: 7px;
    }
    .sBackground {
            background-color: #fff;
            color: #333;
            border: 1px solid #333;
            animation: backgroundChange 2s alternate infinite;
            height: 40px;
            border-radius: 40px;
            border-style: groove;
}

@keyframes backgroundChange {
    0% {
        background-color: white;
    }
    100% {
        background-color: gray;
    }
}
    }
.hud-icon {
        margin-left: 5px;
    }
    .hud-grid[grid-type=Scripts] {
        width: 900px;
        height: 520px;
        font-size: 16px;
    }
`;

let styles = document.createElement("style");
  styles.appendChild(document.createTextNode(css));
  document.head.appendChild(styles);
  styles.type = "text/css";

document.getElementsByClassName("hud-intro-footer-center")[0].innerHTML = `
  <p>Programmed by <a target="_blank" href="Nolinks">Longxd, Ander</a></p>
  <p>Designed by <a target="_blank" href="Nolinks">Longxd</a></p>
  <p>2023 - 2024<p>
</div>
`;

/**
const images = [
    "https://w0.peakpx.com/wallpaper/290/590/HD-wallpaper-low-poly-dark-black-background-ultra-aero-black-background-geometric-polygons-lowpoly.jpg",
    "https://w0.peakpx.com/wallpaper/800/977/HD-wallpaper-abstract-low-poly-3d-abstract-low-poly-3d.jpg",
    "https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1152x864.jpg",
    "https://images7.alphacoders.com/130/1309915.jpg",
    "https://cdn.discordapp.com/attachments/1010928909656789115/1162808791729979433/image.png"
] //para un futuro ^^ 
**/
document.getElementsByClassName("hud-intro-modes")[0].innerHTML = `
<h1>Scripts</h1>
<div class="hud-intro-modes-scripts" id="hud-intro-modes-scripts"><h3>Set Background</h3><hr>
<input type="text" class="beautiful-input" placeholder="URL" style="
width: 250px;
padding: 10px;
font-size: 16px;
left: -5px;
position: relative;
border: 1px solid #ccc;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
transition: border-color 0.3s ease;
">
    <button class="sBackground" onclick="cambiarFondo()">Click</button>
</div>
</div>
`;


document.getElementsByClassName("hud-top-bar-left")[0].innerHTML = `
<div class="hud-icon" icon-type="Shop"></div>
<div class="hud-icon" icon-type="Settings"></div>
<div class="hud-icon" icon-type="Scripts">
<div class="hud-grid" grid-type="Settings" style="display: none;">
</div>
`;

