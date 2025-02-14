// Disable right-click and text selection on the entire page
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());

// Hide all content pages initially
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content-page').forEach(page => page.style.display = 'none');
});

// Search functionality
function searchSubjects() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    document.querySelectorAll('.subject-list a').forEach(link => {
        link.parentElement.style.display = link.textContent.toLowerCase().includes(searchTerm) ? 'block' : 'none';
    });
}

// Show selected page
function showPage(pageId) {
    document.querySelectorAll('.content-page').forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
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

    const assignmentLinks = document.querySelectorAll("[id^='assignment-']");

    // Clear previous assignments
    assignmentLinks.forEach(link => {
        link.removeAttribute("href");
        link.removeAttribute("download");
    });

    // Assign resource links based on subject and course
    const assignments = {
        "FSAD_CSE": [
            "https://store9.gofile.io/download/web/386eec81-9d59-4f00-b45a-66e1ba5f67bc/FSAD%20LAB%20-%201%20WORKBOOK%20Answer_THANOS_.pdf",
            "https://store2.gofile.io/download/web/e5c9c74f-51c0-4c62-b351-9c3de1b11701/FSAD%20LAB%20-%202%20WORKBOOK%20Answer_THANOS_.pdf",
            "https://store-na-phx-1.gofile.io/download/web/0227bd9d-deb4-4361-8f13-5820805e0ddd/FSAD%20LAB%20-%203%20WORKBOOK%20Answer_THANOS_.pdf",
            "https://store10.gofile.io/download/web/878c86b6-fe30-461b-b8d1-f54bedaa32c7/FSAD%20LAB%20-%204%20WORKBOOK%20Answer_THANOS_.pdf",
            "https://store-eu-par-4.gofile.io/download/web/907b5012-cc7c-4e8b-9b29-7ed278029023/FSAD%20LAB%20-%205%20WORKBOOK%20Answer_THANOS_.pdf",
            "https://store1.gofile.io/download/web/de155b97-3c64-4fef-bb04-78b119594451/FSAD%20LAB%20-%206%20WORKBOOK%20Answer_THANOS_.pdf"
        ],
        "Maths_CSE": [
            "https://example.com/maths-resource"
        ],
        "Physics_CSE": [
            "https://example.com/physics-resource"
        ],
        "FSAD_ECE": [
            "https://store-ap-sgp-1.gofile.io/download/web/a4afa5f2-b143-41bf-909e-24abbe5f41be/2300032102%20(9)%20(4).pdf"
        ]
    };

    const key = `${subject}_${course}`;
    if (assignments[key]) {
        assignments[key].forEach((url, index) => {
            if (assignmentLinks[index]) {
                assignmentLinks[index].setAttribute("href", url);
                assignmentLinks[index].setAttribute("download", `Assignment_${index + 1}_${subject}_${course}.pdf`);
            }
        });
    }

    // Disable right-click, drag, and copy on assignment links
    assignmentLinks.forEach(link => {
        link.addEventListener("contextmenu", event => event.preventDefault());
        link.addEventListener("dragstart", event => event.preventDefault());
        link.addEventListener("copy", event => event.preventDefault());
    });
}

// Show specific resource types
function showAssignments() { showPage('assignments'); }
function showTutorials() { showPage('tutorials'); }
function showLWorkbooks() { showPage('l-workbooks'); }
function showSWorkbooks() { showPage('s-workbooks'); }

// Help options functionality
let helpOptionsVisible = false;
function toggleHelpOptions() {
    const helpOptions = document.getElementById('help-options');
    const questionIcon = document.querySelector('.question-icon');

    helpOptions.classList.toggle('active');
    helpOptionsVisible = !helpOptionsVisible;

    // Toggle the text between '?' and 'Join Telegram'
    if (helpOptionsVisible) {
        questionIcon.textContent = "Join Telegram";
        document.querySelector('.help-options a').textContent = "Click to join the Telegram group";
    } else {
        questionIcon.textContent = "?";
        document.querySelector('.help-options a').textContent = "Telegram";
    }
}

// Login popup functionality
function showLoginPopup() {
    document.getElementById('popup-overlay').classList.add('active');
}
function closePopup() {
    document.getElementById('popup-overlay').classList.remove('active');
}

// Help and Upload functions
function helpFAQ() { alert('FAQ page coming soon!'); }
function showUpload() { alert('Upload functionality coming soon!'); }

// Close help options when clicking outside
document.addEventListener('click', (event) => {
    const helpOptions = document.getElementById('help-options');
    const questionIcon = document.querySelector('.question-icon');

    if (helpOptionsVisible && !helpOptions.contains(event.target) && !questionIcon.contains(event.target)) {
        helpOptions.classList.remove('active');
        helpOptionsVisible = false;
    }
});

// Handle subject click events
document.querySelectorAll('.subject-link').forEach(link => {
    link.addEventListener('click', function() {
        showResources(this.dataset.subject, this.dataset.course);
    });
});
