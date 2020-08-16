const navbarHome = `
<script id="_carbonads_projs" type="text/javascript" src="https://srv.carbonads.net/ads/CKYI5K7J.json?segment=placement:loadingio&amp;callback=_carbonads_go"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div class="navbar two" id="navbar">
  <div class="dropdown">
    <a onmouseout="this.parentElement.children[1].style.display = 'none';" onmouseover="this.parentElement.children[1].style.display = 'block';" class="dropbtn">PORTFOLIO</a>
    <div class="dropdown-content" onmouseover="this.parentElement.children[1].style.display = 'block';" onmouseout="this.style.display = 'none';">
      <a href="java.html">Java</a>
      <div href="#" id="python-dropdown">
        <div id="dont-animate-on-leave4" onmouseout="shrinkPython(); spinBackP()" style="color: #6C6F71; height: 28px; font-weight: lighter; font-size: 14pt;">
          Python
          <svg height="16" width="17" style="pointer-events: none">
            <polygon id ="pySVG" points="8 13.7, 13 5.2, 3 5.2" style="fill:#6C6F71;" />
          </svg>
        </div>
        <span id="dont-animate-on-leave" onmouseover="expandPython();" onmouseout="shrinkPython(); spinBackP()"><a href="python.html">Moving Average Algorithm & Visualization</a></span>
        <span id="dont-animate-on-leave2" onmouseover="expandPython();" onmouseout="shrinkPython(); spinBackP()"><a href="diversification_portfolio_risk.html">Diversification and Portfolio Risk</a></span>
        <span id="dont-animate-on-leave3" onmouseover="expandPython();" onmouseout="shrinkPython(); spinBackP()"><a href="automation.html">Excel Automation</a></span>
        <span id="dont-animate-on-leave8" onmouseover="expandPython();" onmouseout="shrinkPython(); spinBackP()"><a href="sql.html">Minimization Algorithm & Data Structuring</a></span>
      </div>
      <div href="#" id="excel-dropdown">
        <div id="dont-animate-on-leave7" onmouseout="shrinkExcel(); spinBackE()" style="color: #6C6F71; height: 28px; font-weight: lighter; font-size: 14pt;">
          Excel Modeling
          <svg height="16" width="17" style="pointer-events: none">
            <polygon id ="eSVG" points="8 13.7, 13 5.2, 3 5.2" style="fill:#6C6F71;" />
          </svg>
        </div>
        <span id="dont-animate-on-leave5" onmouseover="expandExcel()" onmouseout="shrinkExcel(); spinBackE()"><a href="excel.html">Financial Analyses of Cisco Systems</a></span>
        <span id="dont-animate-on-leave6" onmouseover="expandExcel()" onmouseout="shrinkExcel(); spinBackE()"><a href="tesla.html">Credit Analysis of Tesla</a></span>
        <span id="dont-animate-on-leave6" onmouseover="expandExcel()" onmouseout="shrinkExcel(); spinBackE()"><a href="quantitative_optimization.html">Quantitative Optimization</a></span>
      </div>
      <a href="sql.html" onmouseover="spinBackE()">SQL</a>
      <a href="js_css_html.html">Javascript/CSS/HTML</a>
      <a href="ruby_rails.html">Ruby on Rails</a>
      <a href="other.html">Other</a>
    </div>
  </div>

  

    <div class="dropdown">
        <a href="/">HOME</a>
    </div>

    <div class="dropdown">
    <a class="dropbtn" onmouseout="this.parentElement.children[1].style.display = 'none';" onmouseover="this.parentElement.children[1].style.display = 'block';">MORE</a>
    <div class="dropdown-content" onmouseover="this.parentElement.children[1].style.display = 'block';" onmouseout="this.style.display = 'none';">
      <a href="#" style="min-width: 0;"><a href="contact.html">Contact</a></a>
      <a href="/Tristan Lalor Resume.pdf" download="Tristan Lalor Resume.pdf" style="min-width: 0;">Download Resume</a>
    </div>
  </div>
</div>
`;

document.querySelector('#navbar-home-container').insertAdjacentHTML('afterend', navbarHome);

let dumbo;
document.getElementById("dont-animate-on-leave7").addEventListener("mouseenter",function() {
    dumbo = setTimeout(function(){
        document.getElementById("excel-dropdown").style.height = "111.5px";
        spinE();
    }, 310);
});
document.getElementById("dont-animate-on-leave7").addEventListener("mouseleave",function() {
    clearTimeout(dumbo);
});

let plumbo;
document.getElementById("dont-animate-on-leave4").addEventListener("mouseenter",function() {
    plumbo = setTimeout(function(){
        document.getElementById("python-dropdown").style.height = "139px";
        spinP();
    }, 310);
});
document.getElementById("dont-animate-on-leave4").addEventListener("mouseleave",function() {
    clearTimeout(plumbo);
});




function expandExcel() {
    document.getElementById("excel-dropdown").style.height = "111.5px";
}
function shrinkExcel() {
    document.getElementById("excel-dropdown").style.height = "27px";
}
function expandPython() {
    document.getElementById("python-dropdown").style.height = "139px";
}
function shrinkPython() {
    document.getElementById("python-dropdown").style.height = "27px";

}
function spinP() {
    if (document.getElementById("pySVG").style.animation != "spin 400ms")
        document.getElementById("pySVG").style.animation = "spin 400ms";
}
function spinBackP() {
    if(!$("#dont-animate-on-leave").is(":hover") && !$("#dont-animate-on-leave2").is(":hover") && !$("#dont-animate-on-leave3").is(":hover") && !$("#dont-animate-on-leave4").is(":hover") && !$("#dont-animate-on-leave8").is(":hover")){
        document.getElementById("pySVG").style.animation = "spin-back 400ms";
        setTimeout((() => {
            document.getElementById("pySVG").style.animation = "none";
        }), 400);
    }
}
function spinE() {
    if (document.getElementById("eSVG").style.animation != "spin 400ms")
        document.getElementById("eSVG").style.animation = "spin 400ms";
}
function spinBackE() {
    if(!$("#dont-animate-on-leave5").is(":hover") && !$("#dont-animate-on-leave6").is(":hover") && !$("#dont-animate-on-leave7").is(":hover")){
        document.getElementById("eSVG").style.animation = "spin-back 400ms";
        setTimeout((() => {
            document.getElementById("eSVG").style.animation = "none";
        }), 400);
    }
}


