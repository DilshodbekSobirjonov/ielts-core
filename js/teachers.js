function createAndAddUserCard(userData) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    cardContainer.setAttribute("data-aos","zoom-in");
    cardContainer.setAttribute("data-aos-duration","550");

    const proLabel = document.createElement("span");
    proLabel.className = "pro";
    proLabel.textContent = "TEACHER";

    const userImage = document.createElement("img");
    userImage.className = "round";
    userImage.src = userData.imageSrc;
    userImage.alt = "user";

    const userName = document.createElement("h3");
    userName.textContent = userData.name;

    const userProfession = document.createElement("p");
    userProfession.textContent = userData.profession;

    const skillsContainer = document.createElement("div");
    skillsContainer.className = "skills";

    const skillsTitle = document.createElement("h6");
    skillsTitle.textContent = "Darajasi";

    const skillsList = document.createElement("ul");
    userData.skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });

    skillsContainer.appendChild(skillsTitle);
    skillsContainer.appendChild(skillsList);

    cardContainer.appendChild(proLabel);
    cardContainer.appendChild(userImage);
    cardContainer.appendChild(userName);
    cardContainer.appendChild(userProfession);
    cardContainer.appendChild(skillsContainer);

    document.getElementById("second-section-card").appendChild(cardContainer);
}

// yangi oqituvchi qoshish
const newUser1 = {
    name: "Alice Johnson",
    profession: "Math teacher",
    skills: ["Ielts band 7", "2 years experience"],
    imageSrc: "https://randomuser.me/api/portraits/women/35.jpg",
};

const newUser2 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser3 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser4 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser5 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser6 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser7 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser8 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser9 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

const newUser10 = {
    name: "Bob Smith",
    profession: "English teacher",
    skills: ["Ielts band 7", "cefr: c1"],
    imageSrc: "https://randomuser.me/api/portraits/men/60.jpg",
};

createAndAddUserCard(newUser1);
createAndAddUserCard(newUser2);
createAndAddUserCard(newUser3);
createAndAddUserCard(newUser4);
createAndAddUserCard(newUser5);
createAndAddUserCard(newUser6);
createAndAddUserCard(newUser7);
createAndAddUserCard(newUser8);
createAndAddUserCard(newUser9);
createAndAddUserCard(newUser10);
