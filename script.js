let current = 0;

const DATA = [
    {
        name: "Mary Poppins (1964)",
        answer: "United Kingdom",
        video: "1.mp4",
    },
    {
        name: "The Karate Kid Part 2 (1968)",
        answer: "Japan",
        video: "2.mp4"
    },
    {
        name: "Baahubali 2: The Conclusion (2017)",
        answer: "India",
        video: "3.mp4",
    },
    {
        name: "The Green Mile (1999)",
        answer: "USA",
        video: "4.mp4",
    },
    {
        name: "The Gentlemen (2019)",
        answer: "United Kingdom",
        video: "5.mp4",
    },
    {
        name: "Mad Max: Fury Road (2015)",
        answer: "Australia",
        video: "6.mp4",
    },
    {
        name: "Blue Puppy (1976)",
        answer: "USSR",
        video: "7.mp4",
    },
    {
        name: "The Legend of Hei (2019)",
        answer: "China",
        video: "8.mp4",
    },
    {
        name: "Song of the Sea (2014)",
        answer: "Ireland",
        video: "9.mp4",
    },
    {
        name: "The Mole (1957)",
        answer: "Czech Republic",
        video: "10.mp4",
    },
]

window.onload = (_) => {
    FillQuestionSelectors();
    SetQuestion(0);    
};

window.onkeyup = (ev) => {
    if (ev.key == "Enter" && current < DATA.length)
    {
        ToggleAnswer();
    }
}

function ToggleAnswer() {
    let modal = document.getElementById("modal")

    if (modal.style.display == "flex") {
        modal.style.display = "none"
    } else {
        let movie = DATA[current];
        let content = modal.children[0];
        content.children[0].innerText = movie.answer;
        content.children[1].innerHTML = `Fragment from <i>${movie.name}</i>`;
        
        modal.style.display = "flex";
    }
}

function FillQuestionSelectors() {
    let nav = document.getElementById("nav");
    for (let index = 0; index < DATA.length; index++) {
        MakeButton(index + 1, index)
    }
    MakeButton("✔", DATA.length)

    function MakeButton(text, index) {
        let button = document.createElement("button");
        button.onclick = () => SetQuestion(index);
        button.innerText = text;
        nav.appendChild(button);
    }
}

function SetQuestion(number) {
    let video_src = document.getElementById("video-src");
    if (number >= DATA.length) {
        video_src.setAttribute("src", "videos/end.mp4");
        video_src.parentElement.removeAttribute("controls");
        video_src.parentElement.setAttribute("autoplay", "");
        video_src.parentElement.requestFullscreen();
    } else {
        video_src.setAttribute("src", `videos/${DATA[number].video}`);
        video_src.parentElement.setAttribute("controls", "");
        video_src.parentElement.removeAttribute("autoplay");
    }
    video_src.parentElement.load();

    nav.children[current]
        .classList
        .replace("selected", "visited");
    nav.children[number]
        .classList
        .add("selected");
    current = number;
}
