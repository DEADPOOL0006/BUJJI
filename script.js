// Hide all content pages initially
document.addEventListener('DOMContentLoaded', () => {
    const contentPages = document.querySelectorAll('.content-page');
    contentPages.forEach(page => page.style.display = 'none');
});

// Search functionality
function searchSubjects() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const subjectLinks = document.querySelectorAll('.subject-list a');
    
    subjectLinks.forEach(link => {
        const subject = link.textContent.toLowerCase();
        link.parentElement.style.display = subject.includes(searchTerm) ? 'block' : 'none';
    });
}

// Show selected page
function showPage(pageId) {
    const contentPages = document.querySelectorAll('.content-page');
    contentPages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
        selectedPage.classList.add('active');
    }
}

// Show resources for selected subject
function showResources(subject) {
    document.getElementById('subject-name').textContent = subject;
    showPage('resources');

    // Add logic for displaying assignment download link for FSAD under CSE
    if (subject === "FSAD" && document.getElementById("CSE")) {
        const assignmentLink = document.getElementById("assignment-1-link");
        assignmentLink.setAttribute("href", "https://store-ap-sgp-1.gofile.io/download/web/a4afa5f2-b143-41bf-909e-24abbe5f41be/2300032102%20(9)%20(4).pdf");
        assignmentLink.setAttribute("download", "Assignment_1.pdf");

        // Disable right-click and dragging on the assignment link
        assignmentLink.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });
        assignmentLink.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });
    }
}

// Show specific resource types
function showAssignments() {
    showPage('assignments');
}

function showTutorials() {
    showPage('tutorials');
}

function showLWorkbooks() {
    showPage('l-workbooks');
}

function showSWorkbooks() {
    showPage('s-workbooks');
}

// Help options functionality
let helpOptionsVisible = false;

function toggleHelpOptions() {
    const helpOptions = document.getElementById('help-options');
    helpOptionsVisible = !helpOptionsVisible;
    helpOptions.classList.toggle('active');
}

// Login popup functionality
function showLoginPopup() {
    const popup = document.getElementById('popup-overlay');
    popup.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('popup-overlay');
    popup.classList.remove('active');
}

// Help and Upload functions
function helpFAQ() {
    alert('FAQ page coming soon!');
}

function showUpload() {
    alert('Upload functionality coming soon!');
}

// Close help options when clicking outside
document.addEventListener('click', (event) => {
    const helpOptions = document.getElementById('help-options');
    const questionIcon = document.querySelector('.question-icon');
    
    if (helpOptionsVisible && 
        !helpOptions.contains(event.target) && 
        !questionIcon.contains(event.target)) {
        helpOptionsVisible = false;
        helpOptions.classList.remove('active');
    }
});
