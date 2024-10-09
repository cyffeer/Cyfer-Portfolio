// Smooth scrolling for navigation links
function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Adding event listeners to navigation links
document.getElementById("link1").addEventListener('click', () => {
    scrollToElement('.features'); // Scroll to Projects section
});

document.getElementById("link2").addEventListener('click', () => {
    scrollToElement('.education-section'); // Scroll to Education section
});

document.getElementById("link3").addEventListener('click', () => {
    scrollToElement('.experience-section'); // Scroll to Leadership section
});

document.getElementById("link4").addEventListener('click', () => {
    scrollToElement('.certifications-section'); // Scroll to Certifications/Awards section
});

// Scroll reveal animations
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
});

// Ripple effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600); // Remove ripple after animation
    });
});

// Card hover effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'rotateY(5deg) scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) scale(1)';
    });
});


// Function to show details for the clicked certification
function showDetail(card) {
    const certificationDetails = {
        "IT Specialist in Java": {
            title: "IT Specialist - Java",
            issuer: "Certiport - A Pearson VUE Business",
            issued: "Issued Nov 2022",
            credentialLink: "https://www.credly.com/badges/bb50519b-1b48-488e-8633-75a210a51c44/linked_in_profile",
            skills: "Java"
        },
        "IT Specialist in Python": {
            title: "IT Specialist - Python",
            issuer: "Certiport - A Pearson VUE Business",
            issued: "Issued Jun 2023",
            credentialLink: "https://www.credly.com/badges/ffbea54f-f91c-4da6-8401-2567a6bb127b/linked_in_profile",
            skills: "Python"
        },
        "DevNet Associate": {
            title: "DevNet Associate",
            issuer: "Cisco",
            issued: "Issued Dec 2023",
            credentialLink: "https://www.credly.com/badges/63f8c158-278c-4cd0-b5fc-6eeba9bf6c6b/linked_in_profile",
            skills: "Networking, Programming"
        },
        "CCNA: Introduction to Networks": {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco",
            issued: "Issued Jul 2023",
            credentialLink: "https://www.credly.com/badges/7f9cb748-bc71-432a-b1ad-1ac1e378b051/linked_in_profile",
            skills: "Networking, Programming"
        },
        "CCSMA Dean's Lister (Bronze)": {
            title: "CCSMA Dean's Lister (Bronze)",
            issuer: "FEU Institute of Technology",
            issued: "Issued May 2024",
            credentialLink: "https://drive.google.com/file/d/19RQPPFxpIYZrflmxUQIHHtwO0noPYA_k/view?usp=sharing",
            skills: "Academic Excellence"
        },
    };

    // Get the title of the clicked certification
    const title = card.querySelector('h5').innerText;

    // Get the details div and update its content
    const detailsDiv = document.getElementById('details');
    const detail = certificationDetails[title];

    // Populate details in the details panel
    detailsDiv.innerHTML = `
        <h5>${detail.title}</h5>
        <p>${detail.issuer}</p>
        <p>${detail.issued}</p>
        <div class="button-container">
            <button class="button" onclick="window.open('${detail.credentialLink}', '_blank')">Show Credential</button>
        </div>
        <p><strong>Skills:</strong> ${detail.skills}</p>
    `;

    // Show the credential button
    const credentialButtonContainer = document.querySelector('.credential-button-container');
    credentialButtonContainer.style.display = 'block';
}

// Change background color based on mouse movement
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    background.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(30, 30, 30, 0.8), rgba(0, 0, 0, 0.5))`;
});

