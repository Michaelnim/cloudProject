const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

function scaleCv() {
    document.body.classList.add('scale-cv')
}

function removeScale() {
    document.body.classList.remove('scale-cv')

}

let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

let opt = {
    margin: 0,
    filename: 'myResume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};

function generateResume() {
    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', () => {
    scaleCv()

    generateResume()

})

/* VISITOR COUNTER */
const functionApiUrl = "https://pycounter.azurewebsites.net/api/function?";
const functionApi = 'http://localhost:7071/api/function';

const updateCounter = (count) => {
    document.getElementById("counter").innerText = count;
};

const getVisitCount = () => {
    let count; // Define the count variable

    fetch(functionApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(response => {
            console.log("Website calling function API.");
            count = response.count;
            updateCounter(count);
        })
        .catch(error => {
            console.log(error);
            // Handle the error, e.g., display an error message on the page
        });
};

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});



