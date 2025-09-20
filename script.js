// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Don't prevent default for same-page anchor links
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    if (sections.length && navItems.length) {
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Skills data
    const skillsData = [
        { name: 'HTML5', icon: 'fab fa-html5', category: 'Frontend' },
        { name: 'CSS3/Sass', icon: 'fab fa-css3-alt', category: 'Frontend' },
        { name: 'JavaScript', icon: 'fab fa-js', category: 'Language' },
        { name: 'React', icon: 'fab fa-react', category: 'Frontend' },
        { name: 'Django', icon: 'fas fa-layer-group', category: 'Backend' },
        { name: 'Express', icon: 'fas fa-server', category: 'Backend' },
        { name: 'MongoDB', icon: 'fas fa-database', category: 'Database' },
        { name: 'PostgreSQL', icon: 'fas fa-database', category: 'Database' },
        { name: 'GraphQL', icon: 'fas fa-project-diagram', category: 'API' },
        { name: 'AWS', icon: 'fab fa-aws', category: 'Cloud' }
    ];

    // Projects data
    const projectsData = [
        {
            title: 'Business Directory',
            description: 'A full-featured online store with payment integration and admin dashboard.',
            tags: ['HTML5', 'CSS', 'Supabase'],
            image: 'images/business-d.jpg',
            demoLink: 'https://thokozanen.github.io/business-directory/',
            codeLink: 'https://github.com/thokozanen/business-directory'
        },
        {
            title: 'Task Management App',
            description: 'A productivity application for organizing tasks with team collaboration features.',
            tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            image: 'images/task.jpg',
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'A custom portfolio website with animations and theme switching.',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            image: 'images/suit.jpg',
            demoLink: '#',
            codeLink: '#'
        }
    ];

    // Populate skills
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.setAttribute('data-animate', '');
            skillCard.innerHTML = `
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-category">${skill.category}</div>
            `;
            skillsGrid.appendChild(skillCard);
        });
    }

    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-animate', '');
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demoLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.codeLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // Animate milestones on scroll
    const milestones = document.querySelectorAll('.milestone');
    if (milestones.length) {
        const milestoneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1
        });
        
        milestones.forEach(milestone => {
            milestoneObserver.observe(milestone);
        });
    }

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('[data-animate]');
    if (animateElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Form submission with Brevo
    const contactForm = document.getElementById('contact-form');
    const toastContainer = document.getElementById('toast-container');
    
    // Function to show toast notifications
    function showToast(message, type = 'info') {
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                        type === 'error' ? 'fa-exclamation-circle' : 
                        'fa-info-circle'}"></i>
        <span>${message}</span>
        </div>
        <button class="toast-close">
        <i class="fas fa-times"></i>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Add show class after a small delay
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Auto remove after 5 seconds
    const removeToast = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
        }, 300);
    }, 5000);
    
    // Close button functionality
    const closeButton = toast.querySelector('.toast-close');
    closeButton.addEventListener('click', () => {
        clearTimeout(removeToast);
        toast.classList.remove('show');
        setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
        }, 300);
    });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const btnText = submitButton.querySelector('.btn-text');
            const spinner = submitButton.querySelector('.loading-spinner');
            
            try {
                // Show loading state
                btnText.textContent = 'Sending...';
                spinner.style.display = 'inline-block';
                submitButton.disabled = true;
                
                // Prepare form data
                const formData = new FormData(contactForm);
                const formObject = Object.fromEntries(formData.entries());
                
                // IMPORTANT: In production, move this to a server-side endpoint
                // for security (never expose API keys in client-side code)
                const BREVO_API_KEY = 'YOUR_BREVO_API_KEY'; // Replace with your actual key
                const templateId = 1; // Replace with your template ID
                
                // Send email using Brevo API
                const response = await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'api-key': BREVO_API_KEY
                    },
                    body: JSON.stringify({
                        sender: {
                            name: formObject.name,
                            email: formObject.email
                        },
                        to: [{
                            email: "dev@thokozane.co.za",
                            name: "Thokozane"
                        }],
                        templateId: templateId,
                        params: {
                            name: formObject.name,
                            email: formObject.email,
                            message: formObject.message
                        },
                        subject: "New message from your website"
                    })
                });
                
                if (response.ok) {
                    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Form submission failed');
                }
            } catch (error) {
                showToast('Oops! Something went wrong. Please try again or email me directly at dev@thokozane.co.za', 'error');
                console.error('Form submission error:', error);
            } finally {
                // Reset button state
                btnText.textContent = 'Send Message';
                spinner.style.display = 'none';
                submitButton.disabled = false;
            }
        });
    }
});