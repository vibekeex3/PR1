// Get the UUID parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const uuid = urlParams.get('uuid');
console.log(urlParams.get('uuid'));

// Fetch project data based on the UUID
fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then(response => response.json())
    .then(data => {
        // Find the project with the matching UUID
        const project = data.find(item => item.uuid === uuid);

        if (project) {
            // Display the project details on the page
            displayProjectDetails(project);
        } else { //if doesn't find the project
            const defaultProject = data.find(item => item.uuid === '1'); // displays default project (1)
            console.error('Project not found');
            displayProjectDetails(defaultProject); // displays project 1
        }
    })
    .catch(error => {
        console.error('Error fetching project data:', error);
    });

// Function to display project details on the page
function displayProjectDetails(project) {
    // Update the HTML content of your projects page with the project details
    const projectNameElement = document.querySelector('.chosen-project h1');
    projectNameElement.textContent = project.name;

    const projectDescriptionElement = document.querySelector('.chosen-project p:first-of-type');
    projectDescriptionElement.textContent = project.description;

    const completedOnElement = document.querySelector('.chosen-project span');
    completedOnElement.textContent = project.completed_on;

    const backgroundImgElement = document.querySelector('.chosen-project .background-img');
    backgroundImgElement.src = project.image;
    backgroundImgElement.alt = project.name;

    const foregroundImgElement = document.querySelector('.chosen-project .foreground-img');
    foregroundImgElement.src = project.image;
    foregroundImgElement.alt = project.name;

    const projectContentElement = document.querySelector('.chosen-project p.description');
    projectContentElement.innerHTML = project.content;
}
