/**
 * Landing Page JavaScript
 * 
 * 处理语言切换、表单提交、FAQ 交互等功能
 */

// 翻译字典
const translations = {
    zh: {
        // 导航
        nav_features: "功能",
        nav_advantages: "优势",
        nav_faq: "常见问题",
        nav_contact: "联系",
        nav_trial: "申请试用",
        
        // Hero 区域
        hero_title: "AI 手绘画画打分系统",
        hero_subtitle: "为小朋友和绘画爱好者提供专业的 AI 评分和反馈",
        hero_cta_primary: "立即试用",
        hero_cta_secondary: "开始打分",
        
        // 功能区域
        features_title: "核心功能",
        features_subtitle: "专业的 AI 技术，为您的画作提供全方位评估",
        feature1_title: "简单上传",
        feature1_desc: "支持拖拽和点击上传，轻松提交您的手绘画作",
        feature2_title: "AI 评分",
        feature2_desc: "使用先进的 AI 模型进行多维度专业评分",
        feature3_title: "AI 润色",
        feature3_desc: "自动生成优化后的润色图片，提升画作质量",
        feature4_title: "详细反馈",
        feature4_desc: "获取专业的评分标准和改进建议",
        feature5_title: "响应式设计",
        feature5_desc: "完美支持手机、平板、桌面端多种设备",
        feature6_title: "并行处理",
        feature6_desc: "评分和图片生成同时执行，大幅提升效率",
        
        // 优势区域
        advantages_title: "为什么选择我们",
        advantages_subtitle: "专业、快速、可靠的 AI 绘画评分服务",
        advantage1_title: "专业 AI 技术",
        advantage1_desc: "采用先进 AI 模型，提供专业的多维度评分",
        advantage2_title: "快速响应",
        advantage2_desc: "并行处理技术，评分和图片生成同时进行，节省等待时间",
        advantage3_title: "易于使用",
        advantage3_desc: "简洁直观的界面设计，无需专业知识即可轻松上手",
        advantage4_title: "安全可靠",
        advantage4_desc: "完善的文件验证和错误处理机制，保障数据安全",
        
        // 试用申请表单
        trial_title: "申请试用",
        trial_subtitle: "填写信息，我们会尽快与您联系",
        form_name: "姓名",
        form_name_placeholder: "请输入您的姓名",
        form_email: "邮箱",
        form_email_placeholder: "请输入您的邮箱",
        form_company: "公司",
        form_company_placeholder: "请输入您的公司名称（可选）",
        form_phone: "联系电话",
        form_phone_placeholder: "请输入您的联系电话（可选）",
        form_message: "留言",
        form_message_placeholder: "请告诉我们您的需求或问题（可选）",
        form_submit: "提交申请",
        form_success: "申请成功！我们会尽快与您联系。",
        form_error: "申请失败，请重试",
        form_network_error: "网络错误，请检查连接",
        
        // FAQ
        faq_title: "常见问题",
        faq_subtitle: "解答您可能关心的问题",
        faq1_question: "系统支持哪些图片格式？",
        faq1_answer: "系统支持 JPG、JPEG、PNG、GIF、BMP、TIFF、WEBP 等常见图片格式，文件大小不超过 10MB。",
        faq2_question: "AI 评分的标准是什么？",
        faq2_answer: "AI 会从创意与想象力、色彩运用、构图与布局、细节与完成度、表现力等多个维度对画作进行评分，每项评分范围为 1-10 分。",
        faq3_question: "评分需要多长时间？",
        faq3_answer: "通常情况下，AI 评分和图片生成会在 30-60 秒内完成。系统采用并行处理技术，两个任务同时进行，大幅缩短等待时间。",
        faq4_question: "上传的图片会被保存吗？",
        faq4_answer: "上传的图片会临时保存在服务器上用于评分和生成，处理完成后会定期清理。我们重视您的隐私，不会将图片用于其他用途。",
        faq5_question: "系统适合什么年龄段使用？",
        faq5_answer: "系统主要面向小朋友和绘画爱好者，适合所有年龄段使用。无论是儿童涂鸦还是专业画作，AI 都能提供有价值的反馈。",
        
        // 页脚
        footer_about_title: "关于我们",
        footer_about_desc: "Draw My Life 是一个专业的 AI 绘画评分系统，致力于为小朋友和绘画爱好者提供专业的评分和反馈服务。",
        footer_links_title: "快速链接",
        footer_start: "开始使用",
        footer_contact_title: "联系我们",
        footer_copyright: "© 2025 Draw My Life. 保留所有权利."
    },
    en: {
        // Navigation
        nav_features: "Features",
        nav_advantages: "Advantages",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        nav_trial: "Request Trial",
        
        // Hero Section
        hero_title: "AI Drawing Scoring System",
        hero_subtitle: "Professional AI scoring and feedback for kids and drawing enthusiasts",
        hero_cta_primary: "Try Now",
        hero_cta_secondary: "Start Scoring",
        
        // Features Section
        features_title: "Core Features",
        features_subtitle: "Professional AI technology for comprehensive artwork evaluation",
        feature1_title: "Easy Upload",
        feature1_desc: "Support drag-and-drop and click upload for easy submission",
        feature2_title: "AI Scoring",
        feature2_desc: "Multi-dimensional professional scoring using advanced AI models",
        feature3_title: "AI Enhancement",
        feature3_desc: "Automatically generate optimized enhanced images",
        feature4_title: "Detailed Feedback",
        feature4_desc: "Get professional scoring criteria and improvement suggestions",
        feature5_title: "Responsive Design",
        feature5_desc: "Perfect support for mobile, tablet, and desktop devices",
        feature6_title: "Parallel Processing",
        feature6_desc: "Scoring and image generation run simultaneously for efficiency",
        
        // Advantages Section
        advantages_title: "Why Choose Us",
        advantages_subtitle: "Professional, fast, and reliable AI drawing scoring service",
        advantage1_title: "Professional AI Technology",
        advantage1_desc: "Using advanced AI models like Qwen for professional multi-dimensional scoring",
        advantage2_title: "Fast Response",
        advantage2_desc: "Parallel processing technology saves waiting time",
        advantage3_title: "Easy to Use",
        advantage3_desc: "Simple and intuitive interface design, no expertise required",
        advantage4_title: "Safe and Reliable",
        advantage4_desc: "Complete file validation and error handling for data security",
        
        // Trial Form
        trial_title: "Request Trial",
        trial_subtitle: "Fill in the information and we'll contact you soon",
        form_name: "Name",
        form_name_placeholder: "Please enter your name",
        form_email: "Email",
        form_email_placeholder: "Please enter your email",
        form_company: "Company",
        form_company_placeholder: "Please enter your company name (optional)",
        form_phone: "Phone",
        form_phone_placeholder: "Please enter your phone number (optional)",
        form_message: "Message",
        form_message_placeholder: "Tell us your needs or questions (optional)",
        form_submit: "Submit Application",
        form_success: "Application successful! We'll contact you soon.",
        form_error: "Application failed, please try again",
        form_network_error: "Network error, please check your connection",
        
        // FAQ
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Answers to questions you may have",
        faq1_question: "What image formats are supported?",
        faq1_answer: "The system supports common image formats including JPG, JPEG, PNG, GIF, BMP, TIFF, WEBP, with a maximum file size of 10MB.",
        faq2_question: "What are the AI scoring criteria?",
        faq2_answer: "AI evaluates artworks across multiple dimensions including creativity and imagination, color usage, composition and layout, detail and completion, and expressiveness. Each criterion is scored from 1-10.",
        faq3_question: "How long does scoring take?",
        faq3_answer: "Typically, AI scoring and image generation complete within 30-60 seconds. The system uses parallel processing technology to run both tasks simultaneously, significantly reducing wait time.",
        faq4_question: "Are uploaded images saved?",
        faq4_answer: "Uploaded images are temporarily stored on the server for scoring and generation, and are regularly cleaned up after processing. We value your privacy and will not use images for other purposes.",
        faq5_question: "What age group is the system suitable for?",
        faq5_answer: "The system is primarily designed for children and drawing enthusiasts, suitable for all ages. Whether it's children's doodles or professional artwork, AI can provide valuable feedback.",
        
        // Footer
        footer_about_title: "About Us",
        footer_about_desc: "Draw My Life is a professional AI drawing scoring system dedicated to providing professional scoring and feedback services for children and drawing enthusiasts.",
        footer_links_title: "Quick Links",
        footer_start: "Get Started",
        footer_contact_title: "Contact Us",
        footer_copyright: "© 2025 Draw My Life. All rights reserved."
    }
};

// 当前语言
let currentLanguage = localStorage.getItem('language') || 'zh';

/**
 * 切换语言
 * @param {string} lang - 语言代码 ('zh' 或 'en')
 */
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageButtons();
}

/**
 * 更新页面语言
 */
function updatePageLanguage() {
    // 更新所有带 data-i18n 属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    // 更新所有带 data-i18n-placeholder 属性的元素
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            el.placeholder = translations[currentLanguage][key];
        }
    });
    
    // 更新 HTML lang 属性
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
}

/**
 * 更新语言按钮状态
 */
function updateLanguageButtons() {
    const zhBtn = document.getElementById('langZh');
    const enBtn = document.getElementById('langEn');
    
    if (currentLanguage === 'zh') {
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
    }
}

/**
 * 切换移动端菜单
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

/**
 * 切换 FAQ 项
 * @param {HTMLElement} button - FAQ 问题按钮
 */
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('i');
    
    // 切换答案显示
    answer.classList.toggle('active');
    
    // 切换图标
    if (answer.classList.contains('active')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

/**
 * 显示成功消息
 * @param {string} message - 消息内容
 */
function showSuccessMessage(message) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.className = 'bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg';
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    
    // 3秒后自动隐藏
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
}

/**
 * 显示错误消息
 * @param {string} message - 消息内容
 */
function showErrorMessage(message) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg';
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    
    // 5秒后自动隐藏
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
}

/**
 * 提交试用申请表单
 * @param {Event} event - 表单提交事件
 */
async function submitTrialForm(event) {
    event.preventDefault();
    
    // 获取表单数据
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        company: document.getElementById('company').value.trim() || null,
        phone: document.getElementById('phone').value.trim() || null,
        message: document.getElementById('message').value.trim() || null,
    };
    
    // 基本验证
    if (!formData.name || !formData.email) {
        showErrorMessage(translations[currentLanguage].form_error);
        return;
    }
    
    // 前端邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showErrorMessage(currentLanguage === 'zh' ? '邮箱格式不正确' : 'Email format is incorrect');
        return;
    }
    
    // 禁用提交按钮
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLanguage === 'zh' ? '提交中...' : 'Submitting...';
    
    try {
        const response = await fetch('/api/landing/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        if (response.ok) {
            const result = await response.json();
            showSuccessMessage(translations[currentLanguage].form_success);
            // 重置表单
            document.getElementById('trialForm').reset();
        } else {
            const error = await response.json();
            showErrorMessage(error.detail || translations[currentLanguage].form_error);
        }
    } catch (error) {
        console.error('提交失败:', error);
        showErrorMessage(translations[currentLanguage].form_network_error);
    } finally {
        // 恢复提交按钮
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

/**
 * 平滑滚动到指定元素
 * @param {string} targetId - 目标元素 ID
 */
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言
    updatePageLanguage();
    updateLanguageButtons();
    
    // 绑定表单提交事件
    const trialForm = document.getElementById('trialForm');
    if (trialForm) {
        trialForm.addEventListener('submit', submitTrialForm);
    }
    
    // 处理导航链接的平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                smoothScrollTo(targetId);
                // 关闭移动端菜单
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // 添加滚动时导航栏阴影效果
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });
});
