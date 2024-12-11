document.addEventListener("DOMContentLoaded", function () {
    let introContainer = document.getElementById("intro-container");
    let introText = document.getElementById("intro-text");
    let startButton = document.getElementById("startButton");
    let cameraContainer = document.getElementById("camera-container");
    let message1 = document.getElementById('message1'); // 첫 번째 메세지
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

// 화면을 클릭했을 때 멘트 순차적으로 나타나게 하기
document.body.addEventListener("click", () => {
     const bgMusic = document.getElementById("background-music")
     const introContainer = document.getElementById("intro-container");
     const introImg = document.getElementById("intro-img")
     const backmentBottom = document.getElementById("backment-bottom")

     introImg.style.filter = "blur(5px)"
     introImg.style.transition = "transform 2s ease";
     introImg.style.transform = "translate(-25vw,-5vh) scale(1.3)";

     
     const h1 = introContainer.querySelector('h1');
        h1.style.transition = "transform 2s ease, font-size 2s ease"; // font-size와 transform의 두 가지 애니메이션 적용
        h1.style.transform = "translateY(35vh)"; // h1 위치 조정
        h1.style.fontSize = "5vw"; // 글자 크기 변화
        h1.style.position = "absolute"; // 글자 크기 변화
        h1.style.textAlign = "right"
    // 배경을 그라디언트만 남기도록 설정
    introContainer.style.background = "linear-gradient(to bottom, #d6d6d6 10%, white 30%, #7BD7EB 90%)";
    if (messageIndex < messages.length) {
        introContainer.querySelector('p').style.display = "none";  // 썸네일 숨김 // 썸네일 숨김
        backmentBottom.style.transition = "color 2s ease";
        backmentBottom.style.color = "#FFD8C7"; 
        introText.style.display = "block";
        introText.textContent = messages[messageIndex].ko;// 한국어 메시지
        const englishText = document.createElement('div');
        englishText.textContent = messages[messageIndex].en; // 영어 메시지
        englishText.style.fontSize = "2.5vw";
        englishText.style.lineHeight = "2.5vw"; // 영어 메시지 스타일
        englishText.style.opacity = 0; // 초기 불투명도
        englishText.style.transition = "opacity 3s ease-out";
        englishText.style.transform = "translateY(20px)";
        englishText.style.color = "#ffffff";
        englishText.style.zIndex = 10;
        englishText.style.textAlign = "center";
        introContainer.appendChild(englishText); // 영어 메시지 추가

        // 애니메이션을 위해 reset 후 부드럽게 나타나도록 설정
        introText.style.opacity = 0;
        introText.style.color = "#444";
        introText.style.transform = "translateY(20px)"; // 아래에서 위로 떠오르게 설정
        introText.style.transition = "none"; // 기존의 transition을 없애고

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
                    imageContainer.style.top = "0"; // 초기 화면 전체를 사용하기 위해 top 설정
                    imageContainer.style.left = "0";
                    imageContainer.style.width = "100vw";
                    imageContainer.style.height = "100vh";
                    imageContainer.style.pointerEvents = "none"; // 이미지가 이벤트에 영향을 주지 않도록 설정
                    imageContainer.style.zIndex = "100";
                    document.body.appendChild(imageContainer);

                    // 이미지 소스 배열
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

                    // 랜덤 위치 설정
                    const randomX = Math.random() * 90; // 화면 너비의 0% ~ 90% 사이
                    const randomY = Math.random() * 90; // 화면 높이의 0% ~ 90% 사이
                    img.style.left = `${randomX}vw`;
                    img.style.top = `${randomY}vh`;

                    // 초기 투명도와 애니메이션 속성 설정
                    img.style.opacity = 0;
                    img.style.transition = "opacity 1s ease, transform 1s ease";
                    img.style.transform = "scale(0.8)"; // 약간 축소된 상태로 시작

                    imageContainer.appendChild(img);

                    // 딜레이 후 이미지 나타나기
                    setTimeout(() => {
                        img.style.opacity = 1;
                        img.style.transform = "scale(1)";
                    }, index * 500); // 각 이미지마다 0.5초씩 딜레이

                    // 3초 뒤 이미지 사라지게 하기
                    setTimeout(() => {
                        img.style.opacity = 0; // 투명도 0으로 설정
                        img.style.transform = "scale(0.8)"; // 다시 축소
                        // DOM에서 제거
                        setTimeout(() => {
                            img.remove();
                        }, 1000); // 사라지는 애니메이션이 끝난 뒤 DOM에서 제거
                    }, 2000 + index * 500); // 각 이미지의 딜레이를 고려하여 3초 뒤 시작
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
                        const randomX = Math.random() * 200 - 100; // -100% ~ 100%로 화면 바깥 이동
                        const randomY = Math.random() * 200 - 100; // -100% ~ 100%로 화면 바깥 이동
                        setTimeout(() => {
                            img.style.transform = `translate(${randomX}%, ${randomY}%) scale(0)`; // 바깥으로 이동하며 축소
                            img.style.opacity = 0; // 점점 사라지기
                        }, index * 300); // 각 이미지마다 0.3초씩 딜레이
                    });

                    // 2초 후 이미지 제거
                    setTimeout(() => {
                        imageContainer.innerHTML = ""; // 컨테이너 내부 비우기
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

            




        // 약간의 지연 후 애니메이션 시작
        setTimeout(() => {
            introText.style.transition = "opacity 3s ease-out, transform 3s ease-out"; // 다시 transition 설정
            introText.style.opacity = 1;
            introText.style.transform = "translateY(0)";

            englishText.style.opacity = 1; // 영어 메시지를 부드럽게 나타나게 함
        }, 100); // 약간의 지연 후 애니메이션 시작

        messageIndex++;
        clickCount++;
    }
     if (bgMusic.paused) {
        setTimeout(() => {
            bgMusic.play();
        }, 1000); // 3초 딜레이
    }

    // 마지막 멘트 후 버튼 표시
    if (messageIndex === messages.length) {
        setTimeout(() => {
            startButton.style.display = "block";
            startButton.style.opacity = 0;
            startButton.style.transition = "opacity 1s";
            startButton.style.opacity = 1;
        }, 1700); // 멘트가 끝난 후 0.5초 뒤에 버튼 표시
    }
});


    // 시작하기 버튼 클릭 시 카메라 화면으로 전환
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

        // 확인 및 스타일 변경
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

    // 로딩 팝업 표시
    loadingPopup.style.display = "block";
    loadingPopup.style.opacity = 1; // 애니메이션을 위한 opacity 설정

    captureScreen.style.display = "none";
    threejsContainer.style.display = "block"; // 3D 컨테이너를 표시

    // threejsContainer가 보이기 시작한 후 로딩 팝업을 숨깁니다.
    setTimeout(() => {
        loadingPopup.style.display = "none"; // 로딩 창 숨김
    }, 2000); // 로딩 팝업이 나타난 후 0.5초 후에 사라지도록 설정
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

    // 두 이미지의 세분화 데이터 로드
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

    // 두 이미지에서 배경 제거
    removeBackground(ctx1, canvas1, segmentation1);
    removeBackground(ctx2, canvas2, segmentation2);

    // 픽셀 데이터 생성
    pixelsData = [];
    const pixelSize = 5; // 각 픽셀 크기

    for (let x = 0; x < img1.width; x += pixelSize) {
        for (let y = 0; y < img1.height; y += pixelSize) {
            let pixel1 = ctx1.getImageData(x, y, pixelSize, pixelSize).data;
            let pixel2 = ctx2.getImageData(x, y, pixelSize, pixelSize).data;

            // 색상 추출 및 픽셀 위치 매핑
            let depth1 = map(pixel1[0], 0, 255, -100, 100); // 첫 번째 이미지의 깊이
            let depth2 = map(pixel2[0], 0, 255, -100, 100); // 두 번째 이미지의 깊이

            pixelsData.push({
                x: (x - img1.width / 2) * 1.5,
                y: (-(y - img1.height / 2)) * 1.5,
                z1: depth1, // 첫 번째 이미지의 깊이
                z2: depth2, // 두 번째 이미지의 깊이
                color1: new THREE.Color(`rgb(${pixel1[0]}, ${pixel1[1]}, ${pixel1[2]})`),
                color2: new THREE.Color(`rgb(${pixel2[0]}, ${pixel2[1]}, ${pixel2[2]})`)
            });
        }
    }
  
    initThreeJS();
}

let isEffectActive = false;  // 효과가 적용된 상태인지 추적하는 변수

// effectbtn 클릭 시 색상 전환
document.getElementById('effectbtn').addEventListener('click', function() {
    isEffectActive = !isEffectActive;  // 상태 반전

    // 픽셀 데이터에서 색상 값 전환
    pixelsData.forEach((pixel, index) => {
        if (isEffectActive) {
            // 색상 전환: color1과 color2를 교환
            let tempColor = pixel.color1;
            pixel.color1 = pixel.color2;
            pixel.color2 = tempColor;
        } else {
            // 원래 상태로 복귀
            let tempColor = pixel.color1;
            pixel.color1 = pixel.color2;
            pixel.color2 = tempColor;
        }

        // 기존 큐브의 색상값 업데이트
        const cube = cubes[index].mesh;  // 큐브를 찾아서
        cube.material[0].color.set(pixel.color2); // right 면 색상 변경
        cube.material[1].color.set(pixel.color1); // left 면 색상 변경
        cube.material[2].color.set(pixel.color1); // top 면 색상 변경
        cube.material[3].color.set(pixel.color1); // bottom 면 색상 변경
        cube.material[4].color.set(pixel.color1); // back 면 색상 변경
        cube.material[5].color.set(pixel.color2); // front 면 색상 변경
    });

    // 렌더링 갱신
    renderer.render(scene, camera);
});

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.05, 1000);
    camera.position.z = 500;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // 픽셀 데이터를 기반으로 정육면체 생성
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
        cube.position.set(pixel.x, pixel.y, pixel.z1);
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
    // Three.js 캔버스 캡처
    const canvas = renderer.domElement;
    renderer.render(scene, camera); // 장면 렌더링
    const dataUrl = canvas.toDataURL('image/png'); // WebGL 캔버스를 PNG로 캡처

    // 이미지 생성 및 추가
    const img = document.createElement('img');
    img.src = dataUrl;
    const archiveContainer = document.getElementById('archive-container');

    // 이미 5개의 이미지가 있으면 첫 번째 이미지 삭제
    if (archiveContainer.children.length >= maxImages) {
        archiveContainer.removeChild(archiveContainer.firstChild);
    }

    // 새로운 이미지를 아카이브에 추가
    archiveContainer.appendChild(img);
}

// 버튼 이벤트
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

