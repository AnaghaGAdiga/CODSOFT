// Sample data for job listings
const jobListings = [
    {
        title: "Frontend Developer",
        company: "ABC Tech",
        location: "New York",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Backend Developer",
        company: "XYZ Solutions",
        location: "San Francisco",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Full Stack Developer",
        company: "123 Software",
        location: "London",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];

// Function to display featured jobs
function displayFeaturedJobs() {
    const featuredJobsList = document.getElementById("home").querySelector("ul");
    featuredJobsList.innerHTML = "";

    jobListings.forEach((job) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
            <p>Description: ${job.description}</p>
        `;
        featuredJobsList.appendChild(li);
    });
}

// Function to display job listings
function displayJobListings() {
    const jobListingsList = document.getElementById("job-listings").querySelector("ul");
    jobListingsList.innerHTML = "";

    jobListings.forEach((job) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
            <p>Description: ${job.description}</p>
            <button onclick="applyForJob('${job.title}')">Apply Now</button>
        `;
        jobListingsList.appendChild(li);
    });
}

// Function to handle job applications
function applyForJob(jobTitle) {
    alert(`You have applied for the job: ${jobTitle}`);
}

// Function to display employer dashboard content
function displayEmployerDashboard() {
    // Add your code here to display employer dashboard content
    
        const employerDashboard = document.getElementById("employer-dashboard");
        employerDashboard.style.display = "block";
    
        const editAccountBtn = document.getElementById("editAccountBtn");
        const createJobPostingBtn = document.getElementById("createJobPostingBtn");
    
        // Add event listeners for button clicks
        editAccountBtn.addEventListener("click", function() {
            // Add logic to handle editing account
            // Get the modal
const editAccountModal = document.getElementById("editAccountModal");

// Get the button that opens the modal
const editAccountBtn = document.getElementById("editAccountBtn");

// Get the <span> element that closes the modal
const closeEditAccountModal = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
editAccountBtn.onclick = function() {
    editAccountModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeEditAccountModal.onclick = function() {
    editAccountModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == editAccountModal) {
        editAccountModal.style.display = "none";
    }
}

// Function to handle editing account
function editAccount(event) {
    event.preventDefault();
    // Get the form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Add your logic here to update the account information
    // For now, just display an alert
    alert(`Account updated with email: ${email} and password: ${password}`);

    // Close the modal
    editAccountModal.style.display = "none";
}

// Add event listener to the form
document.getElementById("editAccountForm").addEventListener("submit", editAccount);

            alert("Edit Account clicked");
        });
    
        createJobPostingBtn.addEventListener("click", function() {
            // Add logic to handle creating job posting
            alert("Create Job Posting clicked");
        });
    
    
    // Call the function to display employer dashboard content
    displayEmployerDashboard();
}

// Function to display candidate dashboard content
function displayCandidateDashboard() {
    // Add your code here to display candidate dashboard content
}

// Add event listeners for document load and button clicks
document.addEventListener("DOMContentLoaded", function() {
    displayFeaturedJobs();
    displayJobListings();
});

// You can add more functionality as needed
