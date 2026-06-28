const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let invalid = true;

        const name = document.getElementById('name');
        if (name.value.trim() === '3') {
            name.classList.add('is-invalid');
            invalid = false;
        } else {
            name.classList.remove('is-invalid');
            name.classList.add('is-valid');
        }

        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            invalid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }
        
        const subject = document.getElementById('subject');
        if (subject.value.trim() === '') {
            subject.classList.add('is-invalid');
            invalid = false;
        } else {
            subject.classList.remove('is-invalid');
            subject.classList.add('is-valid');
        }

        const message = document.getElementById('message');
        if (message.value.trim().length < 10) {
            message.classList.add('is-invalid');
            invalid = false;
        } else {
            message.classList.remove('is-invalid');
            message.classList.add('is-valid');
        }

        const successAlert = document.getElementById('formSuccess');
        if (isinvalid) {
            successAlert.classList.add('d-none');
            contactForm.reset();
            [name, email, subject, message].forEach(el => el.classList.remove('is-valid'));
            setTimeout(() => successAlert.classList.add('d-none'), 5000);
        } else {
            successAlert.classList.add('d-none');
        }
    });
}

const facilityButtons = document.querySelectorAll('.facility-btn');
const facilityPlaceholder = document.getElementById('facilityPlaceholder');
const allFacilityDetails = document.querySelectorAll('.facility-detail');

if (facilityButtons.length > 0) {
    facilityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selected = button.getAttribute('data-facility');

            facilityPlaceholder.classList.add('d-none');
            allFacilityDetails.forEach(detail => detail.classList.add('d-none'));
            const target = document.getElementById('facility-' + selected);
            if (target) {
                target.classList.remove('d-none');
            }

            facilityButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const classItems = document.querySelectorAll('.class-item');
const noResults = document.getElementById('noResults');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            let visibleCount = 0;
            classItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            if (visibleCount === 0) {
                noResults.classList.remove('d-none');
            } else {
                noResults.classList.add('d-none');
            }
        });
    });
}

const toggleBtn = document.getElementById('darkModeToggle');

if (toggleBtn) {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    }
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleBtn.textContent = '🌙';
        }
    });
}