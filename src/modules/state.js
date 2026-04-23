import { Config } from '../config.js';

// --- 1. DOM Cache ---
export const DOM = {
    screens: {
        select: document.getElementById('select-screen'),
        browser: document.getElementById('browser-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    },
    topBar: document.getElementById('top-bar'),
    settingsDrop: document.getElementById('settings-dropdown'),
    quizList: document.getElementById('quiz-list'),
    startBtn: document.getElementById('start-btn'),
    // Quiz Elements
    progress: document.getElementById('progress-bar'),
    counter: document.getElementById('q-counter'),
    qText: document.getElementById('question-text'),
    optionsWrap: document.getElementById('options'),
    expWrap: document.getElementById('explanation-container'),
    nextBtn: document.getElementById('next-btn'),
    prevBtn: document.getElementById('prev-btn'),
    // Modals
    aiModal: document.getElementById('ai-modal'),
    aiPromptText: document.getElementById('ai-prompt-text'),
    // Resume Banner
    resumeBanner: document.getElementById('resume-banner'),
    resumeYesBtn: document.getElementById('resume-yes-btn'),
    resumeNoBtn: document.getElementById('resume-no-btn')
};

// --- 2. Application State ---
export const State = {
    quizSets: [],
    globalQuestions: [],
    activeQuestions: [],
    currentIdx: 0,
    answers: [],
    currentSelection: new Set(),
    isComprehensive: false,
    audioEnabled: false,
    audio: {
        correct: new Audio(Config.audioPaths.correct),
        wrong: new Audio(Config.audioPaths.wrong),
        cheer: new Audio(Config.audioPaths.cheer),
        sad: new Audio(Config.audioPaths.sad)
    },
    charts: { progress: null, unit: null, risk: null },
    redirectTimer: null
};
