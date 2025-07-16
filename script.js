// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
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

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
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
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
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

    // Skills data
    const skillsData = [
        { name: 'HTML5', icon: 'fab fa-html5', category: 'Frontend' },
        { name: 'CSS3/Sass', icon: 'fab fa-css3-alt', category: 'Frontend' },
        { name: 'JavaScript', icon: 'fab fa-js', category: 'Language' },
        //{ name: 'Python', icon: 'fab fa-python', category: 'Language' },
        { name: 'React', icon: 'fab fa-react', category: 'Frontend' },
        //{ name: 'Next.js', icon: 'fas fa-globe', category: 'Frontend' },
        { name: 'Django', icon: 'fas fa-layer-group', category: 'Backend' },
        { name: 'Express', icon: 'fas fa-server', category: 'Backend' },
        { name: 'MongoDB', icon: 'fas fa-database', category: 'Database' },
        { name: 'PostgreSQL', icon: 'fas fa-database', category: 'Database' },
        { name: 'GraphQL', icon: 'fas fa-project-diagram', category: 'API' },
        //{ name: 'Git', icon: 'fab fa-git-alt', category: 'Tool' },
        { name: 'AWS', icon: 'fab fa-aws', category: 'Cloud' },
        //{ name: 'Google Cloud', icon: 'fab fa-google', category: 'Cloud' }
    ];

    // Projects data
    const projectsData = [
        {
            title: 'E-commerce Platform',
            description: 'A full-featured online store with payment integration and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'images/perfume.jpg'
        },
        {
            title: 'Task Management App',
            description: 'A productivity application for organizing tasks with team collaboration features.',
            tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            image: 'images/task.jpg'
        },
        {
            title: 'Portfolio Website',
            description: 'A custom portfolio website with animations and theme switching.',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            image: 'images/suit.jpg'
        }
    ];

    // Populate skills
    const skillsGrid = document.querySelector('.skills-grid');
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

    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
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
                    <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Animate milestones on scroll
    const milestones = document.querySelectorAll('.milestone');
    
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

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('[data-animate]');
    
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

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});