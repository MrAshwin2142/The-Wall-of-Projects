document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("projectList");
    const projectName = document.getElementById("projectName");
    const projectImage = document.getElementById("projectImage");
    const projectDescription = document.getElementById("projectDescription");
    const contributor = document.getElementById("contributor");
    const codeLink = document.getElementById("codeLink");
    const liveLink = document.getElementById("liveLink");
    const detailSection = document.getElementById("detailSection");
    const usedTech = document.getElementById("usedTech");

    projects.forEach((project) => {
        const projectButton = document.createElement("button");
        projectButton.textContent = project.name;
        projectButton.className = "btn";
        projectButton.title = project.usedTech;
        // Attach an event listener to show project details when clicked
        projectButton.addEventListener("click", () => {
            displayProjectDetails(project);
        });

        // Append the project button to the project list
        projectList.appendChild(projectButton);
    });
    function displayProjectDetails(project) {
        if (!detailSection.classList.contains('hidden') && projectName.innerText === project.name) {
            detailSection.classList.add('hidden');
        } else {
            // console.log("hello"); // I commented this debugging part for now
            detailSection.classList.remove('hidden');
        }
        projectName.innerText = project.name;
        projectDescription.innerHTML = project.description + "<br><br>";
        contributor.innerText = project.contributorName;
        usedTech.innerText = project.usedTech;
        codeLink.href = project.codeLink;
        liveLink.href = project.liveLink;
        if (project.image) {
            projectImage.src = project.image;
        } else {
            projectImage.src = './images/default-image.jpg';
        }
    }
});