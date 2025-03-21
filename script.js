// script.js
const passwordInput = document.getElementById('passwordInput');
const rules = {
    rule1: document.getElementById('rule1'),
    rule2: document.getElementById('rule2'),
    rule3: document.getElementById('rule3'),
    rule4: document.getElementById('rule4'),
    rule5: document.getElementById('rule5'),
    rule6: document.getElementById('rule6'),
    rule7: document.getElementById('rule7'),
};
const message = document.getElementById('message');
const loading = document.getElementById('loading');
const emojiOverlay = document.getElementById('emojiOverlay');

// Audio object for sound effect
const soundEffect = new Audio('supo.wav');

// Function to play sound effect
function playSoundEffect() {
    soundEffect.currentTime = 0; // Restart sound if already playing
    soundEffect.play();
}

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    // Rule 1: Pehla letter CAPITAL hona chahiye
    if (/^[A-Z]/.test(password)) {
        if (!rules.rule1.classList.contains('completed')) {
            rules.rule1.classList.add('completed');
            playSoundEffect(); // Play sound effect
        }
    } else {
        rules.rule1.classList.remove('completed');
    }

    // Rule 2: 5 small letters hone chahiye
    if ((password.match(/[a-z]/g) || []).length >= 5) {
        if (!rules.rule2.classList.contains('completed')) {
            rules.rule2.classList.add('completed');
            playSoundEffect(); // Play sound effect
        }
    } else {
        rules.rule2.classList.remove('completed');
    }

    // Rule 3: 2 numbers hone chahiye
    if ((password.match(/\d/g) || []).length >= 2) {
        if (!rules.rule3.classList.contains('completed')) {
            rules.rule3.classList.add('completed');
            playSoundEffect(); // Play sound effect
        }
    } else {
        rules.rule3.classList.remove('completed');
    }

    // Rule 4: 2 emojis hone chahiye
    const emojiRegex = /[\u{1F600}-\u{1F6FF}]/gu;
    if ((password.match(emojiRegex) || []).length >= 2) {
        if (!rules.rule4.classList.contains('completed')) {
            rules.rule4.classList.add('completed');
            playSoundEffect(); // Play sound effect
        }
    } else {
        rules.rule4.classList.remove('completed');
    }

    // Rule 5: Last mein "f***" hona chahiye
    if (password.endsWith('f***')) {
        if (!rules.rule5.classList.contains('completed')) {
            rules.rule5.classList.add('completed');
            playSoundEffect(); // Play sound effect
        }
    } else {
        rules.rule5.classList.remove('completed');
    }

    // Rule 6: Messi or Ronaldo?
    if (password.toLowerCase().includes('ronaldo')) {
        if (!rules.rule6.classList.contains('completed')) {
            rules.rule6.classList.add('completed');
            showEmoji('👍');
            playSoundEffect(); // Play sound effect
        }
    } else if (password.toLowerCase().includes('messi')) {
        if (!rules.rule6.classList.contains('completed')) {
            rules.rule6.classList.add('completed');
            showEmoji('🖕');
            playSoundEffect(); // Play sound effect
        }
    } else {
        rules.rule6.classList.remove('completed');
    }

    // Rule 7: 8 + 5 = ?
    if (password.includes('13')) { // Answer: 13
        if (!rules.rule7.classList.contains('completed')) {
            rules.rule7.classList.add('completed');
            playSoundEffect(); // Play sound effect
        }
    } else {
        rules.rule7.classList.remove('completed');
    }

    // Check if all rules are completed
    if (Object.values(rules).every(rule => rule.classList.contains('completed'))) {
        message.textContent = "Waah! Tumne password banaya hai ya rocket science? 🚀";
        // Show loading animation
        loading.style.display = 'flex';
        // Redirect to YouTube after 1 second
        setTimeout(() => {
            window.location.href = "https://www.youtube.com";
        }, 1000);
    } else {
        message.textContent = "";
    }
});

// Function to show emoji
function showEmoji(emoji) {
    emojiOverlay.textContent = emoji;
    emojiOverlay.style.opacity = 1;
    emojiOverlay.style.animation = 'blink 2s ease-in-out';

    setTimeout(() => {
        emojiOverlay.style.animation = 'fadeOut 1s ease-in-out';
        setTimeout(() => {
            emojiOverlay.style.opacity = 0;
        }, 1000);
    }, 2000);
}