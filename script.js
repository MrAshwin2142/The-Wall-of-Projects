// Define the functions outside of the DOMContentLoaded event
function displayProjectDetails(project, elements) {
  const {
    projectName,
    projectDescription,
    contributor,
    usedTech,
    codeLink,
    liveLink,
    liveLinkError,
    projectImage,
    detailSection,
  } = elements;

  const shouldBeHidden =
    !detailSection.classList.contains("hidden") &&
    projectName.textContent === project.name;
  detailSection.classList.toggle("hidden", shouldBeHidden);

  projectName.textContent = project.name;
  projectDescription.textContent = project.description;
  contributor.textContent = project.contributorName;
  usedTech.textContent = project.usedTech;
  codeLink.href = project.codeLink;

  liveLink.href = project.liveLink || "javascript:void(0);";
  if (!project.liveLink) {
    liveLinkError.classList.remove("hidden");
    liveLink.style.pointerEvents = "none";
  } else {
    liveLinkError.classList.add("hidden");
    liveLink.style.pointerEvents = "";
  }

  projectImage.src = project.image || "./images/default-image.jpg";
}

// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

  const elements = {
    projectName: document.getElementById("projectName"),
    projectImage: document.getElementById("projectImage"),
    projectDescription: document.getElementById("projectDescription"),
    contributor: document.getElementById("contributor"),
    codeLink: document.getElementById("codeLink"),
    liveLink: document.getElementById("liveLink"),
    detailSection: document.getElementById("detailSection"),
    usedTech: document.getElementById("usedTech"),
    contributorTable: document.getElementById("contributorTable"),
    liveLinkError: document.getElementById("liveLinkError"),
  };

  const starContributor = {};
  const projectList = document.getElementById("projectList");
  let currentClickedButton = null;
  

  projects.forEach((project) => {
    const projectButton = document.createElement("button");
    projectButton.textContent = project.name;
    starContributor[project.contributorName] =
      (starContributor[project.contributorName] || 0) + 1;
    projectButton.className = "btn";
    projectButton.title = project.usedTech;

    projectButton.addEventListener("click", () => {
      if(currentClickedButton){
        currentClickedButton.classList.remove("active");
      }

      projectButton.classList.add("active");

      currentClickedButton = projectButton;
      displayProjectDetails(project, elements);
    });

    projectList.appendChild(projectButton);
  });

  const sortedStarContributors = Object.entries(starContributor).sort(
    (a, b) => b[1] - a[1]
  );

  sortedStarContributors.forEach(
    ([contributorName, projectsCount]) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${contributorName}</td><td>${projectsCount}</td>`;
      elements.contributorTable.appendChild(row);
    }
  );
});
