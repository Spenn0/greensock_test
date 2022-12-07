
gsap.to("#marlboro-man-cut", {duration: 2, x:300, backgroundImage:'url(/images/horse_on_a_ranch.svg)', borderRadius: "50%", border: "2px solid white", height: "500px", ease: "slow" })
gsap.from("#marlboro", {duration: 2, x:300, height: "500px", tranformOrigin: "50% 50%" });
gsap.to("#marlboro", {duration: 2, x:300, y:-500,height: "500px", tranformOrigin: "50% 50%" });

// window.onload = function () {
//     const tl = gsap.timeline({
//       defaults: {
//         duration: 0.75,
//         duration: 1,
//         ease: "power1.inOut",
//         transformOrigin: "center center",
//       },
//     });
//     tl.from("#marlboro", {opacity: 0, scale: 0.9, duration: 0.75 }, 0)
//     .to("#h1", { opacity: 1, scale: 45, duration: 0.75 }, .75);

//     const debug = window.location.hostname === "127.0.0.1" ? true : false;

//     if (debug) {
//       const debugContainer = document.createElement("div");
//       const pausedState = document.createElement("small");
//       const time = document.createElement("small");
//       const link = document.getElementById("link");
  
//       debugContainer.classList.add("debug");
//       pausedState.innerHTML = "Paused:FALSE";
  
//       setInterval(() => {
//         time.innerHTML = `Time:${tl.totalTime()}`;
//       }, 250);
  
//       document.addEventListener("keydown", (e) => {
//         if (e.code === "KeyP" && !tl.paused()) {
//           pausedState.innerHTML = "Paused:TRUE";
//           return tl.pause();
//         }
//         pausedState.innerHTML = "Paused:FALSE";
//         return tl.play();
//       });
//       debugContainer.appendChild(time);
//       debugContainer.appendChild(pausedState);
//       link.appendChild(debugContainer);
//     }
// }