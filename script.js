
        // Custom JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for navigation links
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            

            // Form validation for eligibility check (placeholder)
            const eligibilityBtn = document.querySelector('button.btn-outline-light');
            if (eligibilityBtn) {
                eligibilityBtn.addEventListener('click', function() {
                    alert('Eligibility check form would open here.');
                });
            }

            // Apply now buttons (placeholder)
            const applyBtns = document.querySelectorAll('button.btn-primary');
            applyBtns.forEach(btn => {
                if (btn.textContent.includes('Apply') || btn.textContent.includes('Explore') || btn.textContent.includes('Check') || btn.textContent.includes('Get')) {
                    btn.addEventListener('click', function() {
                        alert('Application form would open here.');
                    });
                }
            });
        });
    