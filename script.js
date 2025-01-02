document.addEventListener("DOMContentLoaded", function () {
    let introContainer = document.getElementById("intro-container");
    let introText = document.getElementById("intro-text");
    let startButton = document.getElementById("startButton");
    let cameraContainer = document.getElementById("camera-container");
    let message1 = document.getElementById('message1'); 
    let captureButton1 = document.getElementById("captureButton1");
    const message2 = document.getElementById('message2'); 
    let captureButton2 = document.getElementById("captureButton2");
    let captureScreen = document.getElementById("captureScreen");
    const loadingPopup = document.getElementById("loading-popup");
    let threejsContainer = document.getElementById("threejs-container");
    let video = document.getElementById("video");
    let sideMessage1= document.getElementById('side-message1');
    let sideMessage2= document.getElementById('side-message2');
    let clickCount = 0;


    const messages = [
    { ko: "모든 이들은 여러개의 자아를 갖고 세상과 마주한다 .", en: "Everyone has multiple personas to face the world." },
    { ko: "수많은 상황과 관계 속에서 나타나는 나의 다양한 모습들....", en: "My various appearances emerge in countless situations and relationships...." },
    { ko: "오랜시간 축적된 기억과 경험은 파편화 되어 하나의 자아를 구성한다.", en: "Accumulated memories and experiences over time fragment into a single persona." },
    { ko: "여러 자아가 전환되며 조화를 이루기도, 충돌하여 내면의 갈등을 만들기도", en: "Multiple personas may harmonize or clash, creating inner conflict." },
    { ko: "또는 타인의 자아와 맞닥뜨리기도 한다 .", en: "Or we may confront the personas of others." },
    { ko: "내 본연의 자아는 무엇일까", en: "What is my true persona?" },
    { ko: "우리가 가진 각 자아의 형태는 어떠한가", en: "What forms do our various personas take?" },
    { ko: "파편화 되어 나타나는 다양한 자아의 이면을 세분히 관찰해보자 .", en: "Let’s closely observe the facets of our fragmented personas." }
];
let messageIndex = 0;


document.body.addEventListener("click", () => {
     const bgMusic = document.getElementById("background-music")
     const introContainer = document.getElementById("intro-container");
     const introImg = document.getElementById("intro-img")
     const backmentBottom = document.getElementById("backment-bottom")

     introImg.style.filter = "blur(5px)"
     introImg.style.transition = "transform 2s ease";
     introImg.style.transform = "translate(-25vw,-5vh) scale(1.3)";

     
     const h1 = introContainer.querySelector('h1');
        h1.style.transition = "transform 2s ease, font-size 2s ease"; 
        h1.style.transform = "translateY(35vh)"; 
        h1.style.fontSize = "5vw"; 
        h1.style.position = "absolute"; 
        h1.style.textAlign = "right"
    
    introContainer.style.background = "linear-gradient(to bottom, #d6d6d6 10%, white 30%, #7BD7EB 90%)";
    if (messageIndex < messages.length) {
        introContainer.querySelector('p').style.display = "none";  
        backmentBottom.style.transition = "color 2s ease";
        backmentBottom.style.color = "#FFD8C7"; 
        introText.style.display = "block";
        introText.textContent = messages[messageIndex].ko;
        const englishText = document.createElement('div');
        englishText.textContent = messages[messageIndex].en; 
        englishText.style.fontSize = "2.5vw";
        englishText.style.lineHeight = "2.5vw"; 
        englishText.style.opacity = 0;
        englishText.style.transition = "opacity 3s ease-out";
        englishText.style.transform = "translateY(20px)";
        englishText.style.color = "#ffffff";
        englishText.style.zIndex = 10;
        englishText.style.textAlign = "center";
        introContainer.appendChild(englishText); 

       
        introText.style.opacity = 0;
        introText.style.color = "#444";
        introText.style.transform = "translateY(20px)"; 
        introText.style.transition = "none"; 

        switch (clickCount) {
                case 0: introText.style.top = "20%";
                    break;  
                case 1: introText.style.top = "3%";
                        introText.style.fontSize = "3vw";
                        introText.style.width = "35vw";
                        introText.style.lineHeight = "3.5vw";


                    let imageContainer = document.createElement("div");
                    imageContainer.id = "image-container";
                    imageContainer.style.position = "absolute";
                    imageContainer.style.top = "0"; 
                    imageContainer.style.left = "0";
                    imageContainer.style.width = "100vw";
                    imageContainer.style.height = "100vh";
                    imageContainer.style.pointerEvents = "none"; 
                    imageContainer.style.zIndex = "100";
                    document.body.appendChild(imageContainer);

                    
                    const imageSources = [
                        "im1.jpg",
                        "im2.jpg",
                        "im3.jpg",
                        "im4.jpg",
                        "im5.jpg"
                    ];

                    imageSources.forEach((src, index) => {
                    const img = document.createElement("img");
                    img.src = src;
                    img.style.position = "absolute";
                    img.style.width = "8vw";
                    img.style.height = "10.5vw";

                   
                    const randomX = Math.random() * 90; 
                    const randomY = Math.random() * 90; 
                    img.style.left = `${randomX}vw`;
                    img.style.top = `${randomY}vh`;

                  
                    img.style.opacity = 0;
                    img.style.transition = "opacity 1s ease, transform 1s ease";
                    img.style.transform = "scale(0.8)"; 

                    imageContainer.appendChild(img);

                  
                    setTimeout(() => {
                        img.style.opacity = 1;
                        img.style.transform = "scale(1)";
                    }, index * 500); 

                   
                    setTimeout(() => {
                        img.style.opacity = 0; 
                        img.style.transform = "scale(0.8)";
                     
                        setTimeout(() => {
                            img.remove();
                        }, 1000); 
                    }, 2000 + index * 500); 
                });


                case 2:
                    introText.style.fontSize = "4.8vw";
                    introText.style.width = "25vw";
                    introText.style.lineHeight = "5.3vw";
                    introText.style.top = "0.3vw";
                    introText.style.left = "2vw";
                    function scatterImages() {
                    const images = document.querySelectorAll("#image-container img");

                    images.forEach((img, index) => {
                        const randomX = Math.random() * 200 - 100; 
                        const randomY = Math.random() * 200 - 100; 
                        setTimeout(() => {
                            img.style.transform = `translate(${randomX}%, ${randomY}%) scale(0)`; 
                            img.style.opacity = 0; 
                        }, index * 300); 
                    });

                 
                    setTimeout(() => {
                        imageContainer.innerHTML = ""; 
                    }, images.length * 300 + 2000);
                }
                

                case 3:
                    introText.style.top = "20%";
                    introText.style.fontSize = "2vw";
                    introText.style.lineHeight = "3vw";
                    introText.style.width = "50vw";
                    introText.style.left = "calc(50% - 25vw)";
                    break;
                case 4:
                    introText.style.top = "20%";
                    introText.style.fontSize = "2vw";
                    introText.style.lineHeight = "3vw";
                    introText.style.width = "50vw";
                    introText.style.left = "calc(50% - 25vw)";
                    break;
                 case 5:
                    introText.style.top = "20%";
                    introText.style.fontSize = "2vw";
                    introText.style.lineHeight = "3vw";
                    introText.style.width = "50vw";
                    introText.style.left = "calc(50% - 25vw)";
                    break;
            }

            




       
        setTimeout(() => {
            introText.style.transition = "opacity 3s ease-out, transform 3s ease-out"; 
            introText.style.opacity = 1;
            introText.style.transform = "translateY(0)";

            englishText.style.opacity = 1; 
        }, 100); 

        messageIndex++;
        clickCount++;
    }
     if (bgMusic.paused) {
        setTimeout(() => {
            bgMusic.play();
        }, 1000); 
    }

    
    if (messageIndex === messages.length) {
        setTimeout(() => {
            startButton.style.display = "block";
            startButton.style.opacity = 0;
            startButton.style.transition = "opacity 1s";
            startButton.style.opacity = 1;
        }, 1700); 
    }
});


    
    startButton.addEventListener("click", () => {
        introContainer.style.opacity = 0;
        setTimeout(() => {
            introContainer.style.display = "none";
            cameraContainer.style.display = "flex";
        }, 500);
    });

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("카메라 접근 오류:", err);
        });

    captureButton1.addEventListener("click", () => {
        captureImage(1);
        message1.style.display = 'none';
        sideMessage1.style.display = "none";

       
        if (sideMessage2 && message2) {
            sideMessage2.style.display = "block";
            message2.style.display = "block";
        }

        captureButton1.style.display = "none";
        captureButton2.style.display = "block";
        captureScreen.style.display = "flex";
    });
    captureButton2.addEventListener("click", () => {
    captureImage(2);

   
    loadingPopup.style.display = "block";
    loadingPopup.style.opacity = 1; 

    captureScreen.style.display = "none";
    threejsContainer.style.display = "block"; 

    
    setTimeout(() => {
        loadingPopup.style.display = "none"; 
    }, 2000); 
});
});



let img1, img2;
let pixelsData = [];
let scene, camera, renderer, controls;
let cubes = [];

async function captureImage(imgNumber) {
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    let img = new Image();
    img.src = canvas.toDataURL("image/png");
    img.onload = function () {
        if (imgNumber === 1) {
            img1 = img;
            captureButton1.disabled = true;
            captureButton1.innerText = "첫 번째 촬영 완료";
        } else if (imgNumber === 2) {
            img2 = img;
            captureButton2.disabled = true;
            captureButton2.innerText = "두 번째 촬영 완료";
            processImages();
        }
    };
}

async function processImages() {
    if (!img1 || !img2) {
        console.error("두 이미지를 모두 캡처해야 합니다.");
        return;
    }

    const net = await bodyPix.load();

    const segmentation1 = await net.segmentPerson(img1);
    const segmentation2 = await net.segmentPerson(img2);

    let canvas1 = document.createElement("canvas");
    canvas1.width = img1.width;
    canvas1.height = img1.height;
    let ctx1 = canvas1.getContext("2d");
    ctx1.drawImage(img1, 0, 0);

    let canvas2 = document.createElement("canvas");
    canvas2.width = img2.width;
    canvas2.height = img2.height;
    let ctx2 = canvas2.getContext("2d");
    ctx2.drawImage(img2, 0, 0);

  
    removeBackground(ctx1, canvas1, segmentation1);
    removeBackground(ctx2, canvas2, segmentation2);


    pixelsData = [];
    const pixelSize = 5; 

    for (let x = 0; x < img1.width; x += pixelSize) {
        for (let y = 0; y < img1.height; y += pixelSize) {
            let pixel1 = ctx1.getImageData(x, y, pixelSize, pixelSize).data;
            let pixel2 = ctx2.getImageData(x, y, pixelSize, pixelSize).data;

           
            let depth1 = map(pixel1[0], 0, 255, -50, 80); 
            let depth2 = map(pixel2[0], 0, 255, -50, 80); 

            pixelsData.push({
                x: (x - img1.width / 2) * 1.5,
                y: (-(y - img1.height / 2)) * 1.5,
                z1: depth1, 
                z2: depth2, 
                color1: new THREE.Color(`rgb(${pixel1[0]}, ${pixel1[1]}, ${pixel1[2]})`),
                color2: new THREE.Color(`rgb(${pixel2[0]}, ${pixel2[1]}, ${pixel2[2]})`)
            });
        }
    }
  
    initThreeJS();
}

let isEffectActive = false;  


document.getElementById('effectbtn').addEventListener('click', function() {
    isEffectActive = !isEffectActive;  

    
    pixelsData.forEach((pixel, index) => {
        if (isEffectActive) {
            
            let tempColor = pixel.color1;
            pixel.color1 = pixel.color2;
            pixel.color2 = tempColor;
        } else {
           
            let tempColor = pixel.color1;
            pixel.color1 = pixel.color2;
            pixel.color2 = tempColor;
        }

      
        const cube = cubes[index].mesh;  
        cube.material[0].color.set(pixel.color2); // right 면 색상 변경
        cube.material[1].color.set(pixel.color1); // left 면 색상 변경
        cube.material[2].color.set(pixel.color1); // top 면 색상 변경
        cube.material[3].color.set(pixel.color1); // bottom 면 색상 변경
        cube.material[4].color.set(pixel.color1); // back 면 색상 변경
        cube.material[5].color.set(pixel.color2); // front 면 색상 변경
    });


    renderer.render(scene, camera);
});

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.05, 1000);
    camera.position.z = 600;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

 
    pixelsData.forEach((pixel, index) => {
        const geometry = new THREE.BoxGeometry(5, 5, 5);

        const materials = [
            new THREE.MeshBasicMaterial({ color: pixel.color2 }), // right
            new THREE.MeshBasicMaterial({ color: pixel.color1 }), // left
            new THREE.MeshBasicMaterial({ color: pixel.color1 }), // top
            new THREE.MeshBasicMaterial({ color: pixel.color1 }), // bottom
            new THREE.MeshBasicMaterial({ color: pixel.color1 }), // back
            new THREE.MeshBasicMaterial({ color: pixel.color2 })  // front
        ];

        const cube = new THREE.Mesh(geometry, materials);
        cube.position.set(pixel.x, pixel.y + 130, pixel.z1);
        cube.position.z += pixel.z2 * 0.5;

        cubes.push({ mesh: cube, materials: materials });
        scene.add(cube);
    });

    animate();
    window.addEventListener('resize', onWindowResize, false);
    showUI();
}

const maxImages = 5;

function shotImage() {
   
    const canvas = renderer.domElement;
    renderer.render(scene, camera); 
    const dataUrl = canvas.toDataURL('image/png'); 


    const img = document.createElement('img');
    img.src = dataUrl;
    const archiveContainer = document.getElementById('archive-container');

    if (archiveContainer.children.length >= maxImages) {
        archiveContainer.removeChild(archiveContainer.firstChild);
    }


    archiveContainer.appendChild(img);
}


document.getElementById('shotbtn').addEventListener('click', shotImage);


function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function showUI() {
    document.getElementById('result-container').style.display = 'block';
}



function removeBackground(ctx, canvas, segmentation) {
    const width = canvas.width;
    const height = canvas.height;
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        if (segmentation.data[i / 4] === 0) {
            data[i] = 255; // R
            data[i + 1] = 255; // G
            data[i + 2] = 255; // B
            data[i + 3] = 0; // 투명도
        }
    }

    ctx.putImageData(imageData, 0, 0);
}




function onWindowResize() {
  
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}




function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

