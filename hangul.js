// Data Definitions
const CONSONANTS = [
    { name: '기역', file: '자음_01_기역.png', code: 0, char: 'ㄱ' },
    { name: '니은', file: '자음_02_니은.png', code: 2, char: 'ㄴ' },
    { name: '디귿', file: '자음_03_디귿.jpeg', code: 3, char: 'ㄷ' },
    { name: '리을', file: '자음_04_리을.png', code: 5, char: 'ㄹ' },
    { name: '미음', file: '자음_05_미음.png', code: 6, char: 'ㅁ' },
    { name: '비읍', file: '자음_06_비읍.jpeg', code: 7, char: 'ㅂ' },
    { name: '시옷', file: '자음_07_시옷.jpeg', code: 9, char: 'ㅅ' },
    { name: '이응', file: '자음_08_이응.jpeg', code: 11, char: 'ㅇ' },
    { name: '지읒', file: '자음_09_지읒.png', code: 12, char: 'ㅈ' },
    { name: '치읓', file: '자음_10_치읓.jpeg', code: 14, char: 'ㅊ' },
    { name: '키읔', file: '자음_11_키읔.jpeg', code: 15, char: 'ㅋ' },
    { name: '티읕', file: '자음_12_티읕.png', code: 16, char: 'ㅌ' },
    { name: '피읖', file: '자음_13_피읖.png', code: 17, char: 'ㅍ' },
    { name: '히읗', file: '자음_14_히읗.jpeg', code: 18, char: 'ㅎ' },
    { name: '쌍기역', file: '자음_15_쌍기역.png', code: 1, char: 'ㄲ' },
    { name: '쌍디귿', file: '자음_16_쌍디귿.png', code: 4, char: 'ㄸ' },
    { name: '쌍비읍', file: '자음_17_쌍비읍.png', code: 8, char: 'ㅃ' },
    { name: '쌍시옷', file: '자음_18_쌍시옷.png', code: 10, char: 'ㅆ' },
    { name: '쌍지읒', file: '자음_19_쌍지읒.png', code: 13, char: 'ㅉ' }
];

const VOWELS = [
    { name: '아', file: '모음_01_아.png', code: 0, char: 'ㅏ' },
    { name: '야', file: '모음_02_야.png', code: 2, char: 'ㅑ' },
    { name: '어', file: '모음_03_어.png', code: 4, char: 'ㅓ' },
    { name: '여', file: '모음_04_여.png', code: 6, char: 'ㅕ' },
    { name: '오', file: '모음_05_오.jpeg', code: 8, char: 'ㅗ' },
    { name: '요', file: '모음_06_요.png', code: 12, char: 'ㅛ' },
    { name: '우', file: '모음_07_우.jpeg', code: 13, char: 'ㅜ' },
    { name: '유', file: '모음_08_유.jpeg', code: 17, char: 'ㅠ' },
    { name: '으', file: '모음_09_으.png', code: 18, char: 'ㅡ' },
    { name: '이', file: '모음_10_이.png', code: 20, char: 'ㅣ' },
    { name: '애', file: '모음_11_애.png', code: 1, char: 'ㅐ' },
    { name: '얘', file: '모음_12_얘.png', code: 3, char: 'ㅒ' },
    { name: '에', file: '모음_13_에.png', code: 5, char: 'ㅔ' },
    { name: '예', file: '모음_14_예.png', code: 7, char: 'ㅖ' },
    { name: '와', file: '모음_15_와.png', code: 9, char: 'ㅘ' },
    { name: '왜', file: '모음_16_왜.png', code: 10, char: 'ㅙ' },
    { name: '외', file: '모음_17_외.png', code: 11, char: 'ㅚ' },
    { name: '워', file: '모음_18_워.png', code: 14, char: 'ㅝ' },
    { name: '웨', file: '모음_19_웨.png', code: 15, char: 'ㅞ' },
    { name: '위', file: '모음_20_위.png', code: 16, char: 'ㅟ' },
    { name: '의', file: '모음_21_의.jpeg', code: 19, char: 'ㅢ' }
];

// Quiz Data
const QUIZ_WORDS = [
    // Animals
    { word: '사자', emoji: '🦁', sound: '사자' },
    { word: '호랑이', emoji: '🐯', sound: '호랑이' },
    { word: '곰', emoji: '🐻', sound: '곰' },
    { word: '토끼', emoji: '🐰', sound: '토끼' },
    { word: '나비', emoji: '🦋', sound: '나비' },
    { word: '소', emoji: '🐮', sound: '소' },
    { word: '돼지', emoji: '🐷', sound: '돼지' },
    { word: '강아지', emoji: '🐶', sound: '강아지' },
    { word: '고양이', emoji: '🐱', sound: '고양이' },
    { word: '오리', emoji: '🦆', sound: '오리' },
    { word: '닭', emoji: '🐔', sound: '닭' },
    { word: '양', emoji: '🐑', sound: '양' },

    // Fruits & Food
    { word: '사과', emoji: '🍎', sound: '사과' },
    { word: '포도', emoji: '🍇', sound: '포도' },
    { word: '바나나', emoji: '🍌', sound: '바나나' },
    { word: '수박', emoji: '🍉', sound: '수박' },
    { word: '딸기', emoji: '🍓', sound: '딸기' },
    { word: '복숭아', emoji: '🍑', sound: '복숭아' },
    { word: '우유', emoji: '🥛', sound: '우유' },
    { word: '빵', emoji: '🍞', sound: '빵' },
    { word: '밥', emoji: '🍚', sound: '밥' },
    { word: '치즈', emoji: '🧀', sound: '치즈' },
    { word: '사탕', emoji: '🍬', sound: '사탕' },

    // Vehicles
    { word: '차', emoji: '🚗', sound: '차' },
    { word: '버스', emoji: '🚌', sound: '버스' },
    { word: '기차', emoji: '🚂', sound: '기차' },
    { word: '비행기', emoji: '✈️', sound: '비행기' },
    { word: '자전거', emoji: '🚲', sound: '자전거' },
    { word: '배', emoji: '🚢', sound: '배' },
    { word: '소방차', emoji: '🚒', sound: '소방차' },
    { word: '경찰차', emoji: '🚓', sound: '경찰차' },

    // Nature
    { word: '나무', emoji: '🌳', sound: '나무' },
    { word: '꽃', emoji: '🌸', sound: '꽃' },
    { word: '해', emoji: '☀️', sound: '해' },
    { word: '달', emoji: '🌙', sound: '달' },
    { word: '별', emoji: '⭐', sound: '별' },
    { word: '비', emoji: '☔', sound: '비' },
    { word: '구름', emoji: '☁️', sound: '구름' },

    // Body
    { word: '눈', emoji: '👁️', sound: '눈' },
    { word: '코', emoji: '👃', sound: '코' },
    { word: '입', emoji: '👄', sound: '입' },
    { word: '귀', emoji: '👂', sound: '귀' },
    { word: '손', emoji: '✋', sound: '손' },
    { word: '발', emoji: '🦶', sound: '발' },

    // Objects
    { word: '가방', emoji: '🎒', sound: '가방' },
    { word: '모자', emoji: '🧢', sound: '모자' },
    { word: '신발', emoji: '👟', sound: '신발' },
    { word: '양말', emoji: '🧦', sound: '양말' },
    { word: '공', emoji: '⚽', sound: '공' },
    { word: '책', emoji: '📖', sound: '책' },
    { word: '시계', emoji: '⏰', sound: '시계' },
    { word: '우산', emoji: '☂️', sound: '우산' },
    { word: '안경', emoji: '👓', sound: '안경' },

    // Family
    { word: '엄마', emoji: '👩', sound: '엄마' },
    { word: '아빠', emoji: '👨', sound: '아빠' },
    { word: '아기', emoji: '👶', sound: '아기' }
];

// App State
const state = {
    screen: 'home',
    selectedConsonant: null,
    selectedVowel: null
};

// DOM Elements
const mainContainer = document.getElementById('main-container');
const navBtns = document.querySelectorAll('.nav-btn');

// Navigation Logic
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        switchScreen(target);

        // Update Active State
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

function switchScreen(screenName) {
    state.screen = screenName;
    mainContainer.innerHTML = ''; // Clear

    switch (screenName) {
        case 'home':
            renderHome();
            break;
        case 'consonants':
            renderGrid(CONSONANTS, '자음');
            break;
        case 'vowels':
            renderGrid(VOWELS, '모음');
            break;
        case 'combine':
            renderCombine();
            break;
        case 'quiz':
            renderQuiz();
            break;
    }
}

// Render Functions
function renderHome() {
    const div = document.createElement('div');
    div.className = 'home-screen screen';
    div.innerHTML = `
        <div class="welcome-msg">
            안녕! 세희야!<br>
            오늘은 어떤 공부를 해볼까?
        </div>
        <button class="big-btn btn-jaeum" onclick="document.querySelector('[data-target=consonants]').click()">
            ㄱㄴㄷ 자음 배우기
        </button>
        <button class="big-btn btn-moeum" onclick="document.querySelector('[data-target=vowels]').click()">
            ㅏㅑㅓ 모음 배우기
        </button>
        <button class="big-btn btn-play" onclick="document.querySelector('[data-target=combine]').click()">
            ✨ 글자 만들기 놀이
        </button>
        <button class="big-btn btn-quiz" onclick="document.querySelector('[data-target=quiz]').click()">
            ❓ 단어 퀴즈
        </button>
    `;
    mainContainer.appendChild(div);
}

function renderGrid(items, type) {
    const wrapper = document.createElement('div');
    wrapper.className = 'screen';

    const title = document.createElement('h2');
    title.textContent = `${type} 목록`;
    title.style.margin = '0 0 15px 10px';
    wrapper.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'grid-container';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="images/${item.file}" alt="${item.name}">
            <span>${item.name}</span>
        `;
        card.onclick = () => playSound(item.name);
        grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    mainContainer.appendChild(wrapper);
}

function renderCombine() {
    state.selectedConsonant = null;
    state.selectedVowel = null;

    const wrapper = document.createElement('div');
    wrapper.className = 'combine-area screen';

    // Result Area
    const resultDisplay = document.createElement('div');
    resultDisplay.className = 'result-display';
    resultDisplay.textContent = '?';
    resultDisplay.onclick = () => {
        if (resultDisplay.textContent !== '?') {
            playSound(resultDisplay.textContent);
        }
    };
    wrapper.appendChild(resultDisplay);

    // Slots
    const slots = document.createElement('div');
    slots.className = 'selection-area';
    slots.innerHTML = `
        <div class="slot" id="slot-c">자음</div>
        <div class="slot" id="slot-v">모음</div>
    `;
    wrapper.appendChild(slots);

    // Reset Button
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '다시 하기 🔄';
    resetBtn.className = 'reset-btn';
    resetBtn.style.padding = '8px 16px';
    resetBtn.style.borderRadius = '15px';
    resetBtn.style.border = 'none';
    resetBtn.style.background = '#eee';
    resetBtn.style.marginBottom = '10px';
    resetBtn.onclick = () => renderCombine(); // Re-render to reset
    wrapper.appendChild(resetBtn);

    // Selection Grids
    const cTitle = document.createElement('div');
    cTitle.className = 'step-title';
    cTitle.textContent = '1. 자음을 골라보세요!';
    wrapper.appendChild(cTitle);

    const cGrid = document.createElement('div');
    cGrid.className = 'grid-container';
    cGrid.style.height = '150px';
    cGrid.style.overflowY = 'auto';
    cGrid.style.border = '1px solid #eee';
    cGrid.style.padding = '10px';
    cGrid.style.borderRadius = '10px';

    CONSONANTS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="images/${item.file}">`;
        card.onclick = () => selectConsonant(item, card);
        cGrid.appendChild(card);
    });
    wrapper.appendChild(cGrid);

    const vTitle = document.createElement('div');
    vTitle.className = 'step-title';
    vTitle.textContent = '2. 모음을 골라보세요!';
    wrapper.appendChild(vTitle);

    const vGrid = document.createElement('div');
    vGrid.className = 'grid-container';
    vGrid.style.height = '150px';
    vGrid.style.overflowY = 'auto';
    vGrid.style.border = '1px solid #eee';
    vGrid.style.padding = '10px';
    vGrid.style.borderRadius = '10px';

    VOWELS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="images/${item.file}">`;
        card.onclick = () => selectVowel(item, card);
        vGrid.appendChild(card);
    });
    wrapper.appendChild(vGrid);

    mainContainer.appendChild(wrapper);
}

function selectConsonant(item, cardEl) {
    state.selectedConsonant = item;

    // UI Update
    document.querySelectorAll('.combine-area .grid-container:nth-of-type(1) .card').forEach(c => c.classList.remove('selected'));
    cardEl.classList.add('selected');

    const slot = document.getElementById('slot-c');
    slot.textContent = item.char;
    slot.classList.add('filled');
    slot.style.borderColor = '#FF6B6B';

    checkCombine();
    playSound(item.name);
}

function selectVowel(item, cardEl) {
    state.selectedVowel = item;

    // UI Update
    document.querySelectorAll('.combine-area .grid-container:nth-of-type(2) .card').forEach(c => c.classList.remove('selected'));
    cardEl.classList.add('selected');

    const slot = document.getElementById('slot-v');
    slot.textContent = item.char;
    slot.classList.add('filled');
    slot.style.borderColor = '#4ECDC4';

    checkCombine();
    playSound(item.name);
}

function checkCombine() {
    if (state.selectedConsonant && state.selectedVowel) {
        const cCode = state.selectedConsonant.code;
        const vCode = state.selectedVowel.code;

        // Hangul Composition Formula
        // ((Initial * 21) + Medial) * 28 + Final(0) + 0xAC00
        const unicode = ((cCode * 21) + vCode) * 28 + 0xAC00;
        const char = String.fromCharCode(unicode);

        const display = document.querySelector('.result-display');

        // Animation reset
        display.style.animation = 'none';
        display.offsetHeight; /* trigger reflow */
        display.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

        display.textContent = char;
        display.style.color = '#2C3E50';

        // Play sound of the combined character
        setTimeout(() => playSound(char), 300);
    }
}

function getJamoImages(word) {
    const images = [];
    for (let i = 0; i < word.length; i++) {
        const charCode = word.charCodeAt(i);
        // Check if it's a Hangul Syllable
        if (charCode >= 0xAC00 && charCode <= 0xD7A3) {
            const offset = charCode - 0xAC00;
            const jong = offset % 28;
            const jung = ((offset - jong) / 28) % 21;
            const cho = (((offset - jong) / 28) - jung) / 21;

            // Map to our data
            // Cho (Initial) -> CONSONANTS
            const choItem = CONSONANTS.find(c => c.code === cho);
            if (choItem) images.push(choItem.file);

            // Jung (Vowel) -> VOWELS
            const jungItem = VOWELS.find(v => v.code === jung);
            if (jungItem) images.push(jungItem.file);

            // Jong (Final) -> CONSONANTS (reuse initials if possible)
            if (jong > 0) {
                const jongMap = {
                    1: 0, // ㄱ
                    2: 1, // ㄲ
                    4: 2, // ㄴ
                    7: 3, // ㄷ
                    8: 5, // ㄹ
                    16: 6, // ㅁ
                    17: 7, // ㅂ
                    19: 9, // ㅅ
                    20: 10, // ㅆ
                    21: 11, // ㅇ
                    22: 12, // ㅈ
                    23: 14, // ㅊ
                    24: 15, // ㅋ
                    25: 16, // ㅌ
                    26: 17, // ㅍ
                    27: 18  // ㅎ
                };

                if (jongMap[jong] !== undefined) {
                    const jongItem = CONSONANTS.find(c => c.code === jongMap[jong]);
                    if (jongItem) images.push(jongItem.file);
                }
            }
        }
    }
    return images;
}

function renderQuiz() {
    const wrapper = document.createElement('div');
    wrapper.className = 'quiz-screen screen';

    // Pick Random Word
    const answerData = QUIZ_WORDS[Math.floor(Math.random() * QUIZ_WORDS.length)];

    // Generate Distractors
    const options = [answerData];
    while (options.length < 4) {
        const r = QUIZ_WORDS[Math.floor(Math.random() * QUIZ_WORDS.length)];
        if (!options.includes(r)) {
            options.push(r);
        }
    }
    options.sort(() => Math.random() - 0.5);

    // Render UI
    wrapper.innerHTML = `
        <div class="quiz-question-emoji">${answerData.emoji}</div>
        <div style="margin-bottom: 20px; font-size: 1.2rem; color: #777;">이것은 무엇일까요?</div>
        <div class="quiz-options">
            ${options.map(opt => {
        const imgs = getJamoImages(opt.word);
        const imgHtml = imgs.map(src => `<img src="images/${src}" class="mini-char">`).join('');
        return `<button class="quiz-btn" onclick="checkAnswer(this, '${opt.word}', '${answerData.word}')">
                    <div class="word-imgs">${imgHtml}</div>
                </button>`;
    }).join('')}
        </div>
    `;

    mainContainer.appendChild(wrapper);

    // Play sound
    playSound("이것은 무엇일까요?");
}

function checkAnswer(btn, selected, correct) {
    if (selected === correct) {
        btn.classList.add('correct');
        playSound("딩동댕! " + correct + "입니다!");
        setTimeout(() => {
            renderQuiz();
        }, 2000);
    } else {
        btn.classList.add('wrong');
        playSound("땡! 다시 생각해보세요.");
        setTimeout(() => {
            btn.classList.remove('wrong');
        }, 500);
    }
}

function playSound(text) {
    if ('speechSynthesis' in window) {
        // Cancel previous speech to avoid queue buildup
        window.speechSynthesis.cancel();

        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'ko-KR';
        msg.rate = 0.9; // Slightly slower for kids
        msg.pitch = 1.1; // Slightly higher pitch
        window.speechSynthesis.speak(msg);
    }
}

// Init
switchScreen('home');
