// Get the footer element
const footer = document.querySelector('footer');

// Function to generate snowflakes
function generateSnowflakes() {
    // Get the footer's position relative to the document
    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const maxFallHeight = footerPosition; // 10px above the footer

    for (let i = 0; i < 80; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snow');
        
        // Random horizontal position and animation duration
        snowflake.style.left = `${Math.random() * 90}vw`; // Random position across the width
        snowflake.style.animationDuration = `${Math.random() * 60 + 50}s`; // Random fall speed between 55s to 125s
        snowflake.style.animationDelay = `${Math.random() * 3}s`; // Random delay to stagger start times
        
        // Pass maxFallHeight to the CSS custom property
        snowflake.style.setProperty('--page-height', `${maxFallHeight}px`);
        
        // Append snowflake to the body
        document.body.appendChild(snowflake);
    }
}

// Call the function to generate snowflakes
generateSnowflakes();


/*Stars style Credits -
Name   : Rajat Mishra
github : https://github.com/mishraRj
Linkdin: https://www.linkedin.com/in/mishrarj/ 
*/