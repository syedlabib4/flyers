document.addEventListener('DOMContentLoaded', () => {
    // Select all the accordion header buttons
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Get the content element immediately following the clicked header
            const content = header.nextElementSibling;

            // Toggle the 'active' class on the header
            header.classList.toggle('active');
            
            // Toggle the 'show' class on the content
            content.classList.toggle('show');

            // Set the max-height for smooth transition
            if (content.classList.contains('show')) {
                // Set max-height to the content's scrollHeight so it can expand
                // Add a buffer (e.g., 20px) if the content padding is not included in scrollHeight
                content.style.maxHeight = content.scrollHeight + 40 + "px"; 
            } else {
                // Set max-height back to 0 to collapse
                content.style.maxHeight = "0";
            }
        });
    });
});