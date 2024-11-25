function camera(){
     const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00000.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00001.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00002.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00003.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00004.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00005.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00006.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00007.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00008.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00009.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00010.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00011.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00012.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00013.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00014.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00015.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00016.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00017.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00018.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00019.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00020.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00021.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00022.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00023.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00024.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00025.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00026.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00027.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00028.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00029.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00030.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00031.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00032.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00033.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00034.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00035.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00036.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00037.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00038.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00039.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00040.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00041.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00042.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00043.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00044.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00045.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00046.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00047.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00048.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00049.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00050.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00051.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00052.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00053.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00054.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00055.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00056.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00057.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00058.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00059.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00060.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00061.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00062.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00063.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00064.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00065.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00066.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00067.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00068.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00069.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00070.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00071.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00072.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00073.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00074.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00075.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00076.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00077.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00078.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00079.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00080.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00081.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00082.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00083.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00084.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00085.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00086.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00087.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00088.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00089.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00090.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00091.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00092.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00093.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00094.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00095.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00096.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00097.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00098.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00099.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00100.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00101.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00102.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00103.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00104.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00105.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00106.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00107.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00108.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00109.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00110.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00111.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00112.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00113.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00114.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00115.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00116.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00117.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00118.jpg&w=640&q=90
https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00119.jpg&w=640&q=90
 `;
  return data.split("\n")[index];
}

const frameCount = 119;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i <=frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

images[1].onload = render;

function scaleImage(img, ctx) {
     var canvas = ctx.canvas;
     var hRatio = canvas.width / img.width;
     var vRatio = canvas.height / img.height;
     var ratio = Math.max(hRatio, vRatio);
     var centerShift_x = (canvas.width - img.width * ratio) / 2;
     var centerShift_y = (canvas.height - img.height * ratio) / 2;
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(
       img,
       0,
       0,
       img.width,
       img.height,
       centerShift_x,
       centerShift_y,
       img.width * ratio,
       img.height * ratio
     );
   }

function render() {
  scaleImage(images[imageSeq.frame], context);
}



gsap.to(imageSeq, {
     frame: frameCount - 1,
     snap: "frame",
     ease: `none`,
     scrollTrigger: {
       scrub:2,
       trigger: `#page canvas`,
       start: `top top`,
       end:"bottom bottom"
     },
     onUpdate: render,
   });

gsap.to("#page canvas",{
     scrollTrigger:{
          scrub:2,
          trigger:"#page",
          start:"top 0%",
          end:"bottom 100%",
          ease:"none"
     }
})


ScrollTrigger.create({
  trigger: "#page",
  pin: true,
  scroller: `#main`,
  start: `bottom top`,

});

}


camera()