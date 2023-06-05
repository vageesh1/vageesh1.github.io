var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var slider = document.getElementById("slider");
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0ousm2j-Tr0Y2s6goIW2u3GllbFQipp517YqpwwfHjNgCUSSq_VeGm70hvAhbrdiU0Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

function openmenu() {
    slider.style.right = "0";
}

function closemenu() {
    slider.style.right = "-200px";
}

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}