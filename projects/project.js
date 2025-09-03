// Simple JavaScript for projects page
document.addEventListener("DOMContentLoaded", function() {
    console.log("Projects page loaded successfully");
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simple hover effects for tech tags
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Modal functionality
    const studyModal = document.getElementById('studyModal');
    const serverModal = document.getElementById('serverModal');
    const setupModal = document.getElementById('setupModal');
    const closeStudyBtn = document.getElementById('closeModal');
    const closeServerBtn = document.getElementById('closeServerModal');
    const closeSetupBtn = document.getElementById('closeSetupModal');
    const impactLinks = document.querySelectorAll('.view-impact-btn');
    const serverInfoBtn = document.querySelector('.btn-primary i.fas.fa-server').parentElement;

    // Open modal when any impact link is clicked
    impactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Check which project's impact button was clicked
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h2').textContent.toLowerCase();
            
            if (projectTitle.includes('linux')) {
                serverModal.style.display = 'block';
            } else {
                studyModal.style.display = 'block';
            }
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when close buttons are clicked
    closeStudyBtn.addEventListener('click', function() {
        studyModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    closeServerBtn.addEventListener('click', function() {
        serverModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modals when clicking outside of them
    window.addEventListener('click', function(e) {
        if (e.target === studyModal) {
            studyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === serverModal) {
            serverModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Server Info button click handler
    serverInfoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        setupModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close setup modal
    closeSetupBtn.addEventListener('click', function() {
        setupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (studyModal.style.display === 'block') {
                studyModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (serverModal.style.display === 'block') {
                serverModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (setupModal.style.display === 'block') {
                setupModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });


});
  