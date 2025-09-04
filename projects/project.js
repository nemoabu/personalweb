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
    
    // C7 tooltip position adjustment
    const c7InfoIcons = document.querySelectorAll('.c7-info');
    
    // Function to adjust tooltip position
    function adjustTooltipPosition(icon) {
        const tooltip = icon.parentNode.querySelector('.c7-tooltip');
        if (!tooltip) return;
        
        // Get positions and dimensions
        const iconRect = icon.getBoundingClientRect();
        const tooltipHeight = tooltip.offsetHeight;
        const tooltipWidth = tooltip.offsetWidth;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const spaceAbove = iconRect.top;
        const spaceBelow = windowHeight - iconRect.bottom;
        const spaceLeft = iconRect.left;
        const spaceRight = windowWidth - iconRect.right;
        
        // Decide whether to show above or below
        if (spaceBelow > tooltipHeight + 20 || spaceBelow > spaceAbove) {
            // Show below
            tooltip.classList.add('tooltip-bottom');
            tooltip.classList.remove('tooltip-top');
        } else {
            // Show above
            tooltip.classList.add('tooltip-top');
            tooltip.classList.remove('tooltip-bottom');
        }
        
        // Adjust horizontal position if near screen edges
        if (spaceLeft < tooltipWidth / 2) {
            // Too close to left edge
            tooltip.style.left = '0';
            tooltip.style.transform = 'translateX(0)';
            // Adjust the arrow position
            const arrowLeft = iconRect.left + (iconRect.width / 2);
            tooltip.style.setProperty('--arrow-left', arrowLeft + 'px');
        } else if (spaceRight < tooltipWidth / 2) {
            // Too close to right edge
            tooltip.style.left = 'auto';
            tooltip.style.right = '0';
            tooltip.style.transform = 'translateX(0)';
            // Adjust the arrow position
            const arrowRight = spaceRight + (iconRect.width / 2);
            tooltip.style.setProperty('--arrow-right', arrowRight + 'px');
        } else {
            // Default centered position
            tooltip.style.left = '50%';
            tooltip.style.right = 'auto';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.removeProperty('--arrow-left');
            tooltip.style.removeProperty('--arrow-right');
        }
    }
    
    // Add event listeners to icons
    c7InfoIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            adjustTooltipPosition(this);
        });
    });
    
    // Recalculate on window resize
    window.addEventListener('resize', function() {
        // If any tooltip is visible, recalculate its position
        const activeIcon = document.querySelector('.c7-info:hover');
        if (activeIcon) {
            adjustTooltipPosition(activeIcon);
        }
    });

    // Modal functionality
    const muscl3Modal = document.getElementById('muscl3Modal');
    const serverModal = document.getElementById('serverModal');
    const setupModal = document.getElementById('setupModal');
    const doomsdayModal = document.getElementById('doomsdayModal');
    const closeMuscl3Btn = document.getElementById('closeMuscl3Modal');
    const closeServerBtn = document.getElementById('closeServerModal');
    const closeSetupBtn = document.getElementById('closeSetupModal');
    const closeDoomsdayBtn = document.getElementById('closeDoomsdayModal');
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
            } else if (projectTitle.includes('muscl3')) {
                muscl3Modal.style.display = 'block';
            }
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when close buttons are clicked
    closeMuscl3Btn.addEventListener('click', function() {
        muscl3Modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    closeServerBtn.addEventListener('click', function() {
        serverModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modals when clicking outside of them
    window.addEventListener('click', function(e) {
        if (e.target === muscl3Modal) {
            muscl3Modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === serverModal) {
            serverModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === doomsdayModal) {
            doomsdayModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Server Info button click handler
    serverInfoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        setupModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Doomsday Documentation button click handler
    const doomsdayBtn = document.querySelector('.view-doomsday-btn');
    if (doomsdayBtn) {
        doomsdayBtn.addEventListener('click', function(e) {
            e.preventDefault();
            doomsdayModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close setup modal
    closeSetupBtn.addEventListener('click', function() {
        setupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close doomsday modal
    closeDoomsdayBtn.addEventListener('click', function() {
        doomsdayModal.style.display = 'none';
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
            if (doomsdayModal.style.display === 'block') {
                doomsdayModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });


});
  