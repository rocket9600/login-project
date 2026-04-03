document.addEventListener('DOMContentLoaded', function() {
    // Efecto de partículas
    createParticles();
    
    // Animación de entrada para los elementos del formulario
    animateFormElements();
    
    // Efecto de hover en el contenedor
    const loginContainer = document.querySelector('.login-container');
    loginContainer.addEventListener('mouseenter', () => {
        loginContainer.style.transform = 'translateY(-5px)';
    });
    loginContainer.addEventListener('mouseleave', () => {
        loginContainer.style.transform = 'translateY(0)';
    });
});

// Función para alternar la visibilidad de la contraseña
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Función para crear partículas animadas
function createParticles() {
    const colors = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.7)'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio entre 2px y 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición aleatoria en la pantalla
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Color aleatorio
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Animación
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
        
        // Añadir al body
        document.body.appendChild(particle);
        
        // Crear keyframes dinámicamente
        const keyframes = `
            @keyframes float {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
                    opacity: 0.5;
                }
                100% {
                    transform: translate(0, 0) rotate(360deg);
                    opacity: 1;
                }
            }
        `;
        
        // Añadir keyframes al estilo
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
    }
}

// Función para animar los elementos del formulario
function animateFormElements() {
    const formGroups = document.querySelectorAll('.form-group');
    const loginBtn = document.querySelector('.login-btn');
    const socialLogin = document.querySelector('.social-login');
    const registerLink = document.querySelector('.register-link');
    
    // Animación escalonada para los grupos del formulario
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateX(-20px)';
        group.style.transition = `all 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            group.style.opacity = '1';
            group.style.transform = 'translateX(0)';
        }, 100);
    });
    
    // Animación para el botón
    loginBtn.style.opacity = '0';
    loginBtn.style.transform = 'translateY(20px)';
    loginBtn.style.transition = 'all 0.5s ease 0.4s';
    
    setTimeout(() => {
        loginBtn.style.opacity = '1';
        loginBtn.style.transform = 'translateY(0)';
    }, 500);
    
    // Animación para el login social
    socialLogin.style.opacity = '0';
    socialLogin.style.transform = 'scale(0.9)';
    socialLogin.style.transition = 'all 0.5s ease 0.6s';
    
    setTimeout(() => {
        socialLogin.style.opacity = '1';
        socialLogin.style.transform = 'scale(1)';
    }, 600);
    
    // Animación para el enlace de registro
    registerLink.style.opacity = '0';
    registerLink.style.transition = 'all 0.5s ease 0.8s';
    
    setTimeout(() => {
        registerLink.style.opacity = '1';
    }, 800);
}

// Validación del formulario
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        shakeForm();
        return;
    }
    
    // Simulación de login exitoso
    simulateLogin();
});

// Efecto de sacudida para errores
function shakeForm() {
    const form = document.querySelector('.login-form');
    form.style.transform = 'translateX(10px)';
    
    setTimeout(() => {
        form.style.transform = 'translateX(-10px)';
    }, 100);
    
    setTimeout(() => {
        form.style.transform = 'translateX(8px)';
    }, 200);
    
    setTimeout(() => {
        form.style.transform = 'translateX(-8px)';
    }, 300);
    
    setTimeout(() => {
        form.style.transform = 'translateX(5px)';
    }, 400);
    
    setTimeout(() => {
        form.style.transform = 'translateX(-5px)';
    }, 500);
    
    setTimeout(() => {
        form.style.transform = 'translateX(0)';
    }, 600);
}

// Simulación de login exitoso
function simulateLogin() {
    const loginContainer = document.querySelector('.login-container');
    const loginBtn = document.querySelector('.login-btn');
    
    // Cambiar el texto del botón
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Iniciando sesión...';
    loginBtn.disabled = true;
    
    // Simular retraso de red
    setTimeout(() => {
        // Efecto de éxito
        loginContainer.style.background = 'rgba(76, 175, 80, 0.1)';
        loginBtn.innerHTML = '<i class="fas fa-check"></i> ¡Éxito!';
        loginBtn.style.background = 'linear-gradient(to right, #4CAF50, #2E7D32)';
        
        // Animación de confeti
        createConfetti();
        
        // Redirección simulada
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // Cambiar por tu URL real
        }, 1500);
    }, 2000);
}

// Efecto de confeti para login exitoso
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#4CAF50', '#FFC107', '#FF5722', '#E91E63'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('particle');
        
        // Tamaño y forma aleatoria
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Forma cuadrada o circular
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else {
            confetti.style.borderRadius = '0';
        }
        
        // Posición inicial (arriba del botón)
        const btnRect = document.querySelector('.login-btn').getBoundingClientRect();
        confetti.style.left = `${btnRect.left + btnRect.width/2}px`;
        confetti.style.top = `${btnRect.top}px`;
        
        // Color aleatorio
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Animación
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 10 + 5;
        const x = Math.cos(angle) * velocity * 10;
        const y = Math.sin(angle) * velocity * 10 + 5;
        
        const duration = Math.random() * 3 + 2;
        confetti.style.animation = `confettiFall ${duration}s ease-out forwards`;
        
        // Añadir keyframes dinámicamente
        const keyframes = `
            @keyframes confettiFall {
                to {
                    transform: translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        document.body.appendChild(confetti);
        
        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
            style.remove();
        }, duration * 1000);
    }
}


























































































