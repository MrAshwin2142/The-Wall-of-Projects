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
    const contributorTable = document.getElementById("contributorTable");
    const liveLinkError = document.getElementById("liveLinkError");

    const starContributor = {};


    projects.forEach((project) => {
        const projectButton = document.createElement("button");
        projectButton.textContent = project.name;
        if (starContributor[project.contributorName]) {
            starContributor[project.contributorName] += 1;
        } else {
            // starContributor.set(project.contributorName,  Number(1));
            starContributor[project.contributorName]=  Number(1);
        }
        projectButton.className = "btn";
        projectButton.title = project.usedTech;
        // Attach an event listener to show project details when clicked
        projectButton.addEventListener("click", () => {
            displayProjectDetails(project);
        });

        // Append the project button to the project list
        projectList.appendChild(projectButton);
    });
    // console.log(starContributor);
    for(const key in starContributor){
        const nameNproject= document.createElement("tr");
        nameNproject.innerHTML=`<td>${key}</td><td>${starContributor[key]}</td>`
        contributorTable.append(nameNproject); 
    }
    function displayProjectDetails(project) {
        if (!detailSection.classList.contains('hidden') && projectName.innerText === project.name) {
            detailSection.classList.add('hidden');
        } else {
            detailSection.classList.remove('hidden');
        }
        projectName.innerText = project.name;
        projectDescription.innerText = project.description;
        contributor.innerText = project.contributorName;
        usedTech.innerText = project.usedTech;
        codeLink.href = project.codeLink;
        if (project.liveLink) {
            liveLink.href = project.liveLink;
            liveLinkError.textContent = ""; // Clear the error message if live link is available
        } else {
            liveLink.href = "#"; // Set a placeholder link
            liveLinkError.textContent = "Live link is not available"; // Display the error message
        }
        if (project.image) {
            projectImage.src = project.image;
        } else {
            projectImage.src = './images/default-image.jpg';
        }
    }    
});