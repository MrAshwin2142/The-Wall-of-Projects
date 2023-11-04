# Contributing to "The Wall of Projects"

We welcome contributions to "The Wall of Projects." Whether you have a project to showcase or you're new to open source and want to start your journey, this guide will walk you through the process of adding your project.

## Step-by-Step Guide

### 1. Fork the Repository

Start by forking the main repository to your GitHub account. This creates a copy of the repository under your account.
![fork](https://github.com/MrAshwin2142/The-Wall-of-Projects/assets/89156541/eac0605c-7952-46d4-a905-b23d2d51ca8c)


### 2. Clone the Repository in Visual Studio Code

- Open Visual Studio Code.
- Go to the "View" menu and select "Command Palette" or use the keyboard shortcut `Ctrl+Shift+P`.
- In the Command Palette, enter and select "Git: Clone."
- Enter the repository's URL, which should look like: `https://github.com/yourusername/yourrepository.git`
```shell
git clone https://github.com/yourusername/yourrepository.git
```
- Choose a local directory to clone the repository and confirm your selection.

Replace yourusername and yourrepository with your GitHub username and the repository's name.

### 3. Add Your Project
Open the projects.js file in the root directory of the repository.

Add your project to the projects array in the following format:

```javascript
    {
        name: "Your Project Name",
        image: "./images/YourProjectImage.jpg", // Add your project image to the `images` directory
        description: "A brief description of your project.",
        usedTech: "Technologies or programming languages used.",
        contributorName: "Your Name",
        codeLink: "Link to your project's source code (GitHub, GitLab, etc.)",
        liveLink: "Link to the live version of your project (if     available)",
    },
```
### 4. Commit Your Changes
Commit the changes to your local repository:

```shell
    git add projects.js
    git commit -m "Added my project: Your Project Name"
    git push
```

### 5. Create a Pull Request
- Go to your forked repository on GitHub and click the "New Pull Request" button.
- Compare the changes, review your additions, and create the pull request (PR).
- Provide a meaningful title and description for your PR.
### 6. Review and Merge
A project maintainer will review your PR. Once it's approved, your project will be added to "The Wall of Projects."

Congratulations! You've successfully contributed your project to "The Wall of Projects." Thank you for sharing your work with the community.

### Contribution Guidelines
Follow good coding and documentation practices when making changes to the project.
If you have any questions or need assistance, feel free to open an issue in the Issues section. We're here to help.

Happy contributing!
