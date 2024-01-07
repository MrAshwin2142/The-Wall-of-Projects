// Define functions outside of the DOMContentLoaded event
function displayProjectDetails(project, elements) {
  // Destructuring elements for ease of use
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

  // Set project details
  projectName.textContent = project.name;
  projectDescription.textContent = project.description;
  contributor.textContent = project.contributorName;
  usedTech.textContent = project.usedTech;
  codeLink.href = project.codeLink;

  // Handle live link
  liveLink.href = project.liveLink || "javascript:void(0);";
  if (!project.liveLink) {
    liveLinkError.classList.remove("hidden");
    liveLink.style.pointerEvents = "none";
  } else {
    liveLinkError.classList.add("hidden");
    liveLink.style.pointerEvents = "";
  }

  // Set project image
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
    projectCount: document.getElementById("projectCount"),
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
    projectButton.setAttribute("data-tech", project.usedTech.toLowerCase());
    projectButton.setAttribute("data-name", project.name.toLowerCase());
    projectButton.setAttribute(
      "data-contributor",
      project.contributorName.toLowerCase()
    );
    projectButton.title = project.usedTech;

    projectList.appendChild(projectButton);
  });

const searchBox = document.getElementById("searchBox");
const project = document.getElementById("projectList");

searchBox.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const buttons = projectList.getElementsByTagName("button");

  searchBox.addEventListener("click", (event) => {
    if (event.target.matches('#searchBox')) {
      autocompleteList.style.display = '';
}});

  // An array to store suggestions
  const suggestions = ["JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Swift",
  "TypeScript",
  "C#",
  "Go",
  "Kotlin",
  "Rust",
  "PHP",
  "HTML",
  "CSS",
  "SQL",
  "PostgreSQL",
  "MongoDB"];

  for (const button of buttons) {
    const tech = button.getAttribute("data-tech") || "";
    const name = button.getAttribute("data-name") || "";
    const contributor = button.getAttribute("data-contributor") || "";

    if (
      tech.includes(searchTerm) ||
      name.includes(searchTerm) ||
      contributor.includes(searchTerm)
    ) {
      button.style.display = ""; // Show the button
      suggestions.push(contributor); // Add to suggestions
    } else {
      button.style.display = "none"; // Hide the button
    }
  }

  // Update autocomplete suggestions
  updateAutocomplete([...new Set(suggestions)]);
});

// Function to update autocomplete suggestions
function updateAutocomplete(suggestions) {
  const autocompleteList = document.getElementById("autocompleteList");
  autocompleteList.innerHTML = ""; // Clear previous suggestions

  suggestions.forEach((suggestion) => {
    const listItem = document.createElement("li");
    listItem.textContent = suggestion;

    // Add click event to set suggestion as search term
    listItem.addEventListener("click", () => {
      searchBox.value = suggestion;
      const inputEvent = new Event("input");
      searchBox.dispatchEvent(inputEvent);
    });

    autocompleteList.appendChild(listItem);
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.matches('#searchBox') && !event.target.matches('#autocompleteList li')) {
    autocompleteList.style.display = 'none';
  }});

   // Event delegation for project buttons
  projectList.addEventListener("click", (event) => {
    const projectButton = event.target;
    if (projectButton.tagName === "BUTTON") {
      const project = projects.find(
        (p) => p.name === projectButton.textContent
      );
      if (project) {
        handleButtonClick(projectButton, project);
      }
    }
  });

  function handleButtonClick(projectButton, project) {
    const isCurrentButton = currentClickedButton === projectButton;
    if (currentClickedButton) {
      currentClickedButton.classList.remove("active");
    }

    displayProjectDetails(project, elements);

    if (!elements.detailSection.classList.contains("hidden")) {
      if (!isCurrentButton) {
        projectButton.classList.add("active");
        currentClickedButton = projectButton;
      } else {
        currentClickedButton = null;
      }
    } else {
      currentClickedButton = null;
    }
  }
  const sortedStarContributors = Object.entries(starContributor).sort(
    (a, b) => b[1] - a[1]
  );

  sortedStarContributors.forEach(([contributorName, projectsCount]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${contributorName}</td><td>${projectsCount}</td>`;
    elements.contributorTable.appendChild(row);
  });
  projectCount.textContent = `Total Projects Hosted: ${projects.length}`;
});

function handleMode() {
  const element = document.getElementById("modeButton");
  element.classList.toggle("lightIcon");
  document.body.classList.toggle("dark-Theme");
}

// Handling Menu toggle on mobile screen
function toggleSlideInMenu() {
  document.getElementById("slideInMenu").classList.toggle("hidden");
}
