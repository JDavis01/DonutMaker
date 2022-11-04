const modal1 = document.querySelector(".modal-container1");
const modal2 = document.querySelector(".modal-container2");
const moreInfo1 = document.querySelector(".more-info1");
const moreInfo2 = document.querySelector(".more-info2");
const aboutParagraph1 = document.querySelector(".about-paragraph1");
const aboutParagraph2 = document.querySelector(".about-paragraph2");
const closeButton1 = document.querySelector(".close1");
const closeButton2 = document.querySelector(".close2");
const fredLink = document.querySelector(".about-fred");
const aboutMeLink = document.querySelector(".about-me");

fredLink.onclick = function () {
    modal1.style.display = "flex";
    aboutParagraph1.innerHTML = "Fred was best known for his catchphrase " +
        "\"Time to make the donuts!\", and the commercial that introduced " +
        "the phrase was named one of the five best commercials of the 1980s " +
        "by the Television Bureau of Advertising. Sometimes commercials would not be about Fred\'s work, " +
        "but rather showing the inferiority of supermarket bakeries or " +
        "showing Fred waiting on modish 1980s customers while going into " +
        "a black and white kitchen full of 1940s employees working to " +
        "swing music, denoting quality has not changed throughout the years. "
        "Fred the Baker was so popular with consumers that when Dunkin' Donuts " +
        "decided to retire the character, the chain surveyed customers to " +
        "determine the reaction to the move. Customers said Fred could leave " +
        "if he were treated like an honored friend and employee. So the " +
        "company created an official \"retirement\" celebration for him, " +
        "including a parade in the city of Boston and a \"free donut\" day " +
        "that served over six million customers on September 22, 1997.";
    moreInfo1.setAttribute("href", "https://en.wikipedia.org/wiki/Fred_the_Baker")

}

aboutMeLink.onclick = function () {
    modal2.style.display = "flex";
    aboutParagraph2.innerHTML = "Born April 15, 1991 in Columbus Ohio. Grew up " +
        "and went to school at Pickerington Central. Graduated " +
        "Highschool in 2010 and soon after met my wife at Ohio Valley " +
        "University. " +
        "Moved to Virginia Beach for 2 years where I worked in hotel " +
        "maintenance and my wife was a barista and a math tutor. We decided to " +
        "move back to Ohio to be closer to family. During that time " +
        "I've worked at UPS and Amazon and got my Associates in Computer " +
        "Science at Franklin University. " +
        "I am currently working my way through We Can Code It's bootcamp " +
        "program. " +
        "Below are recent projects I have worked on.";
    moreInfo2.setAttribute("href", "http://jdavis01.github.io/");
}

closeButton1.onclick = function () {
    modal1.style.display = "none";
}

closeButton2.onclick = function () {
    modal2.style.display = "none";
}