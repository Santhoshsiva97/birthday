// $('document').ready(function(){
//   let audio = document.getElementById("song1");
//   // audio.play();
//   const promise = audio.play();
//   if (promise) {
//       //Older browsers may not return a promise, according to the MDN website
//       promise.catch(function(error) { console.error(error); });
//   }
// })

// Import the data to customize and insert them into page
const fetchData = () => {
  let audio = document.getElementById("song1");
  // audio.play();
  const promise = audio.play();
  if (promise) {
      //Older browsers may not return a promise, according to the MDN website
      promise.catch(function(error) { console.error(error); });
  }

  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run amimation if so
        if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
          animationTimeline();
        } 
      });
    }).then(() => {
      const audio = document.getElementById("song1");
      audio.play();
    });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 2, {
      opacity: 0,
      y: 10
    })
    .from(".two", 1, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      2,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      1,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 1, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      1,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 1, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 1, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      1,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.5, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 1, ideaTextTrans)
    .to(".idea-1", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 1, ideaTextTrans)
    .to(".idea-2", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 1, ideaTextTrans)
    .to(".idea-3 strong", 1, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 1, ideaTextTrans)
    .to(".idea-4", 1, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      1,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      1,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      1,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      1,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      1,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      3,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".pic-dp",
      1,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      1,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      1,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      1,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      2,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 1, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      1,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  const audio = document.getElementById("song1");
  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    audio.play();
    tl.restart();
  });
};

// Run fetch and animation in sequence
const start = document.getElementById("start");
start.addEventListener("click", () => {
  const audio = document.getElementById("song1");

  audio.play();
  
  fetchData();
})

