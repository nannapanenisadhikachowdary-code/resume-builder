function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;

    document.getElementById("resume").innerHTML = `
        <h2>${name}</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
    `;
}