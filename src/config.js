/**
 * Quiz Web Template 專案設定檔
 * 所有的文字、路徑、AI 提示詞都在這裡改，不用去翻 code。
 */
export const Config = {
    // 基本應用資訊
    appTitle: "Quiz Web Template",
    appSubtitle: "選擇題目集，然後開始作答",
    githubRepoUrl: "https://github.com/Purp1eSheep/quiz-web-template",
    
    // 資料來源路徑
    manifestPath: 'assets/data/manifest.json',
    questionsCsvPath: 'assets/data/all_questions.csv',
    
    // 音效路徑
    audioPaths: {
        correct: 'assets/sfx/right.mp3',
        wrong: 'assets/sfx/wrong.mp3',
        cheer: 'assets/sfx/pass.mp3',
        sad: 'assets/sfx/notPass.mp3'
    },
    
    // UI 文字與標籤
    labels: {
        startBtn: "開始作答 →",
        nextBtn: "下一題",
        prevBtn: "上一題",
        skipBtn: "跳過",
        finishBtn: "完成作答",
        exitBtn: "退出",
        backBtn: "返回",
        browseBtn: "🔍 瀏覽全部題庫",
        analysisBtn: "📊 學習分析看板",
        resumeBanner: "👋 偵測到未完成進度",
        resumeYes: "恢復",
        resumeNo: "放棄",
        aiAssistantBtn: "🤖 AI 詳解",
        bookmarkBtn: "☆ 收藏",
        unbookmarkBtn: "★ 取消",
        isBookmarkedBadge: "⭐ 已收藏",
        isRiskyBadge: "⚠️ 易錯題"
    },
    
    // 結果結算頁面文字
    resultStrings: {
        scoreTitle: "結果",
        accuracyLabel: "答對率",
        correctCountLabel: "答對題數",
        wrongCountLabel: "答錯題數",
        backToHome: "返回主畫面",
        weaknessAnalysisTitle: "📊 弱點分析"
    },
    
    // AI 助教 Prompt 模板 (老哥你可以在這裡教 AI 怎麼說話)
    aiPromptTemplate: (q, optionsText, correctOptions, userSelectInfo) => `你是一位專業的講師，擅長釐清學生的觀念誤區。
請針對以下這題考題進行詳細解析：

【題目】
${q.question}

【選項】
${optionsText}

【正確答案】
${correctOptions}
${userSelectInfo}
【解析需求】
1. **正確答案解析**：請詳細說明為什麼「${correctOptions}」才是正確的，其背後的理論、技術細節或邏輯依據為何。
2. **錯誤陷阱分析**：${userSelectInfo ? `重點分析為什麼使用者選的答案是錯誤的。請指出該選項的觀念錯誤之處，以及它與正確答案的本質區別。` : "請分析其他錯誤選項常見的干擾點或觀念陷阱。"}
3. **觀念釐清**：用一句話總結如何區分正確與錯誤選項的關鍵特徵。

請以繁體中文回答，條列式呈現，語氣專業、精簡且直擊重點。`,

    // 匯出功能文字
    exportStrings: {
        title: "📤 錯題匯出預覽",
        description: "您可以直接複製下方文字給 AI 進行分析，或下載結構化檔案。",
        prefixText: "以下是我的錯題紀錄，請幫我分析我的弱點並提供建議：\n\n",
        copySuccess: "✅ 已複製",
        copyBtn: "📋 複製文字",
        downloadJson: "📥 下載 JSON",
        downloadCsv: "📥 下載 CSV"
    },

    // 主題描述文字 (Vibe 來源)
    themeDescriptions: {
        dark: '🌌 預設深色模式，保護眼睛。',
        light: '🔆 清晰亮色模式，適合強光環境。',
        charcoal: '🖤 炭黑柔和：專業深灰背景，色彩飽和但不刺眼。',
        twilight: '🌆 暮光沈穩：紮實深藍灰，長時間閱讀首選。',
        'slate-purple': '🔮 石板灰紫：優雅低調的暗紫色系塊。',
        nord: '🧊 北歐寒霜：乾淨低飽和的灰藍。'
    }
};
