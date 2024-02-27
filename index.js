// Fetch data from the API endpoint
fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
        // Reverse the data array to get projects in the correct order
        const reversedData = data.reverse();
        
        // Get the first three projects
        const firstThreeProjects = reversedData.slice(0, 3);

        // Select the articles where we want to display project information
        const articles = document.querySelectorAll('#projects article');

        // Loop through the articles and update their content with project information
        articles.forEach((article, index) => {
            // Access the project from the array
            const project = firstThreeProjects[index];

            // Select the image element and update its source and alt text
            const image = article.querySelector('img');
            image.src = project.image; 
            image.alt = 'Project Image'; // Set alt text for accessibility

            // Select the paragraph elements and update their content
            const projectName = article.querySelector('.body-med');
            projectName.textContent = project.name;

            const projectDescription = article.querySelector('.headline-reg');
            projectDescription.textContent = project.description;
            
            // Optionally, you can update the link as well if it exists
          //  const learnMoreLink = article.querySelector('a');
           // if (learnMoreLink) {
            //    learnMoreLink.href = '#'; // Update the link destination if needed
           // }
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
