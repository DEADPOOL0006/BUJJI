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

// Show resources for selected subject and course
function showResources(subject, course) {
    document.getElementById('subject-name').textContent = subject;
    showPage('resources');

    // Get the assignment link elements
    const assignmentLink1 = document.getElementById("assignment-1-link");
    const assignmentLink2 = document.getElementById("assignment-2-link");
    const assignmentLink3 = document.getElementById("assignment-3-link");
    const assignmentLink4 = document.getElementById("assignment-4-link");
    const assignmentLink5 = document.getElementById("assignment-5-link");
    const assignmentLink6 = document.getElementById("assignment-6-link");

    // Clear any previous assignments
    assignmentLink1.removeAttribute("href");
    assignmentLink1.removeAttribute("download");
    assignmentLink2.removeAttribute("href");
    assignmentLink2.removeAttribute("download");

    // Assign the resource links based on subject and course
    if (subject === "FSAD" && course === "CSE") {

        assignmentLink1.setAttribute("href", "https://store9.gofile.io/download/web/386eec81-9d59-4f00-b45a-66e1ba5f67bc/FSAD%20LAB%20-%201%20WORKBOOK%20Answer_THANOS_.pdf");
        assignmentLink1.setAttribute("download", "Assignment_1_FSAD_CSE.pdf");
        assignmentLink2.setAttribute("href", "https://store2.gofile.io/download/web/e5c9c74f-51c0-4c62-b351-9c3de1b11701/FSAD%20LAB%20-%202%20WORKBOOK%20Answer_THANOS_.pdf");
        assignmentLink2.setAttribute("download", "Assignment_2_FSAD_CSE.pdf");
        assignmentLink3.setAttribute("href", "https://store-na-phx-1.gofile.io/download/web/0227bd9d-deb4-4361-8f13-5820805e0ddd/FSAD%20LAB%20-%203%20WORKBOOK%20Answer_THANOS_.pdf");
        assignmentLink3.setAttribute("download", "Assignment_3_FSAD_CSE.pdf");
        assignmentLink4.setAttribute("href", "https://store10.gofile.io/download/web/878c86b6-fe30-461b-b8d1-f54bedaa32c7/FSAD%20LAB%20-%204%20WORKBOOK%20Answer_THANOS_.pdf");
        assignmentLink4.setAttribute("download", "Assignment_4_FSAD_CSE.pdf");
        assignmentLink5.setAttribute("href", "https://store-eu-par-4.gofile.io/download/web/907b5012-cc7c-4e8b-9b29-7ed278029023/FSAD%20LAB%20-%205%20WORKBOOK%20Answer_THANOS_.pdf");
        assignmentLink5.setAttribute("download", "Assignment_5FSAD_CSE.pdf");
        assignmentLink6.setAttribute("href", "https://store1.gofile.io/download/web/de155b97-3c64-4fef-bb04-78b119594451/FSAD%20LAB%20-%206%20WORKBOOK%20Answer_THANOS_.pdf");
        assignmentLink6.setAttribute("download", "Assignment_6_FSAD_CSE.pdf");

    } else if (subject === "Maths" && course === "CSE") {
        assignmentLink1.setAttribute("href", "https://example.com/maths-resource");
        assignmentLink1.setAttribute("download", "Maths_Resource_CSE.pdf");
    } else if (subject === "Physics" && course === "CSE") {
        assignmentLink1.setAttribute("href", "https://example.com/physics-resource");
        assignmentLink1.setAttribute("download", "Physics_Resource_CSE.pdf");
    } else if (subject === "FSAD" && course === "ECE") {
        assignmentLink1.setAttribute("href", "https://store-ap-sgp-1.gofile.io/download/web/a4afa5f2-b143-41bf-909e-24abbe5f41be/2300032102%20(9)%20(4).pdf");
        assignmentLink1.setAttribute("download", "Assignment_1_FSAD_ECE.pdf");
    }

    // Disable right-click and dragging on the assignment links
    [assignmentLink1, assignmentLink2, assignmentLink3, assignmentLink4, assignmentLink5, assignmentLink6].forEach(link => {
        link.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });
        link.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });
        link.addEventListener("copy", function(event) {
            event.preventDefault();
        });
    });
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
