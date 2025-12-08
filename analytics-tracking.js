/**
 * 增强的 Google Analytics 追踪脚本
 * 自动追踪用户行为、事件和性能指标
 */

// 确保 gtag 函数存在
if (typeof gtag === 'undefined') {
  console.warn('Google Analytics 未加载，请确保在 HTML 中包含 GA 脚本');
}

/**
 * 追踪自定义事件
 * @param {string} eventName - 事件名称
 * @param {object} eventData - 事件数据
 */
function trackEvent(eventName, eventData = {}) {
  if (typeof gtag !== 'undefined') {
    try {
      gtag('event', eventName, eventData);
      console.log(`📊 事件已追踪: ${eventName}`, eventData);
    } catch (error) {
      console.error(`❌ 追踪事件失败 (${eventName}):`, error);
    }
  } else {
    console.warn(`⚠️ gtag 未定义，无法追踪事件: ${eventName}`);
  }
}

/**
 * 追踪页面视图
 * @param {string} pagePath - 页面路径
 * @param {string} pageTitle - 页面标题
 */
function trackPageView(pagePath, pageTitle) {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-4XWHX7S9M5', {
      'page_path': pagePath,
      'page_title': pageTitle
    });
  }
}

/**
 * 追踪异常
 * @param {string} description - 异常描述
 * @param {boolean} fatal - 是否致命
 */
function trackException(description, fatal = false) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      'description': description,
      'fatal': fatal
    });
    console.error(`❌ 异常已追踪: ${description}`);
  }
}

/**
 * 初始化所有追踪
 */
function initializeAnalyticsTracking() {
  console.log('🚀 初始化 Analytics 追踪...');

  // 1. 追踪按钮点击
  trackButtonClicks();

  // 2. 追踪链接点击
  trackLinkClicks();

  // 3. 追踪滚动深度
  trackScrollDepth();

  // 4. 追踪表单交互
  trackFormInteractions();

  // 5. 追踪语言切换
  trackLanguageSwitch();

  // 6. 追踪页面性能
  trackPagePerformance();

  // 7. 追踪用户参与度
  trackUserEngagement();

  console.log('✅ Analytics 追踪初始化完成');
}

/**
 * 追踪所有按钮点击
 */
function trackButtonClicks() {
  document.addEventListener('click', function(e) {
    const button = e.target.closest('button, [role="button"]');
    if (button) {
      const buttonText = button.textContent.trim();
      const buttonId = button.id || 'unknown';
      const buttonClass = button.className || '';

      trackEvent('button_click', {
        'button_text': buttonText,
        'button_id': buttonId,
        'button_class': buttonClass,
        'timestamp': new Date().toISOString()
      });
    }
  });
}

/**
 * 追踪外部链接点击
 */
function trackLinkClicks() {
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href) {
      const isExternal = !link.href.includes(window.location.hostname);
      
      if (isExternal) {
        trackEvent('external_link_click', {
          'link_url': link.href,
          'link_text': link.textContent.trim(),
          'timestamp': new Date().toISOString()
        });
      }
    }
  });
}

/**
 * 追踪滚动深度
 */
function trackScrollDepth() {
  let maxScroll = 0;
  let scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
  };

  window.addEventListener('scroll', function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }

    // 追踪特定的滚动深度
    [25, 50, 75, 100].forEach(percent => {
      if (maxScroll >= percent && !scrollTracked[percent]) {
        scrollTracked[percent] = true;
        trackEvent('scroll_depth', {
          'scroll_percent': percent,
          'timestamp': new Date().toISOString()
        });
      }
    });
  });
}

/**
 * 追踪表单交互
 */
function trackFormInteractions() {
  document.addEventListener('submit', function(e) {
    const form = e.target;
    const formId = form.id || 'unknown';
    const formName = form.name || 'unknown';

    trackEvent('form_submit', {
      'form_id': formId,
      'form_name': formName,
      'timestamp': new Date().toISOString()
    });
  });

  // 追踪表单字段焦点
  document.addEventListener('focus', function(e) {
    const input = e.target.closest('input, textarea, select');
    if (input) {
      trackEvent('form_field_focus', {
        'field_name': input.name || input.id || 'unknown',
        'field_type': input.type || 'unknown'
      });
    }
  }, true);
}

/**
 * 追踪语言切换
 */
function trackLanguageSwitch() {
  const languageSelector = document.getElementById('languageSelector');
  if (languageSelector) {
    languageSelector.addEventListener('change', function() {
      trackEvent('language_switched', {
        'language': this.value,
        'timestamp': new Date().toISOString()
      });
    });
  }
}

/**
 * 追踪页面性能指标
 */
function trackPagePerformance() {
  // 使用 Performance API
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        trackEvent('page_performance', {
          'page_load_time': pageLoadTime,
          'connect_time': connectTime,
          'render_time': renderTime,
          'timestamp': new Date().toISOString()
        });

        console.log(`⏱️ 页面性能 - 加载时间: ${pageLoadTime}ms, 连接时间: ${connectTime}ms, 渲染时间: ${renderTime}ms`);
      }, 0);
    });
  }

  // 使用 Web Vitals API（如果可用）
  if ('web-vital' in window) {
    // 这需要额外的库支持
  }
}

/**
 * 追踪用户参与度
 */
function trackUserEngagement() {
  let engagementTime = 0;
  let isActive = true;

  // 追踪活跃时间
  document.addEventListener('mousemove', resetEngagementTimer);
  document.addEventListener('keypress', resetEngagementTimer);
  document.addEventListener('click', resetEngagementTimer);
  document.addEventListener('scroll', resetEngagementTimer);

  function resetEngagementTimer() {
    isActive = true;
  }

  // 每 30 秒记录一次参与度
  setInterval(function() {
    if (isActive) {
      engagementTime += 30;
      
      // 每 5 分钟报告一次
      if (engagementTime % 300 === 0) {
        trackEvent('user_engagement', {
          'engagement_time_seconds': engagementTime,
          'timestamp': new Date().toISOString()
        });
      }
    }
    isActive = false;
  }, 30000);

  // 页面卸载时报告总参与时间
  window.addEventListener('beforeunload', function() {
    if (engagementTime > 0) {
      trackEvent('session_end', {
        'total_engagement_time': engagementTime,
        'timestamp': new Date().toISOString()
      });
    }
  });
}

/**
 * 追踪特定功能的使用
 */
function trackFeatureUsage(featureName, featureData = {}) {
  trackEvent('feature_usage', {
    'feature_name': featureName,
    ...featureData,
    'timestamp': new Date().toISOString()
  });
}

/**
 * 追踪用户转化
 */
function trackConversion(conversionName, conversionValue = 1) {
  trackEvent('conversion', {
    'conversion_name': conversionName,
    'conversion_value': conversionValue,
    'timestamp': new Date().toISOString()
  });
}

/**
 * 设置用户属性
 */
function setUserProperties(userId, userProperties = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-4XWHX7S9M5', {
      'user_id': userId,
      ...userProperties
    });
  }
}

/**
 * 获取当前会话信息
 */
function getSessionInfo() {
  return {
    'user_agent': navigator.userAgent,
    'language': navigator.language,
    'timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    'screen_resolution': `${window.screen.width}x${window.screen.height}`,
    'viewport': `${window.innerWidth}x${window.innerHeight}`,
    'referrer': document.referrer || 'direct',
    'timestamp': new Date().toISOString()
  };
}

/**
 * 记录会话信息
 */
function logSessionInfo() {
  const sessionInfo = getSessionInfo();
  console.log('📱 会话信息:', sessionInfo);
  
  trackEvent('session_start', sessionInfo);
}

// 当 DOM 加载完成时初始化
// 等待 gtag 加载完成后再初始化追踪
function waitForGtag() {
  if (typeof gtag !== 'undefined') {
    console.log('✅ gtag 已加载，初始化追踪...');
    initializeAnalyticsTracking();
    logSessionInfo();
  } else {
    // 如果 gtag 还没加载，等待 100ms 后重试
    setTimeout(waitForGtag, 100);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForGtag);
} else {
  // DOM 已经加载，直接等待 gtag
  waitForGtag();
}

// 导出函数供外部使用
window.analyticsTracking = {
  trackEvent,
  trackPageView,
  trackException,
  trackFeatureUsage,
  trackConversion,
  setUserProperties,
  getSessionInfo
};

console.log('✅ Analytics 追踪脚本已加载');
