// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initTabs();
    initSearch();
    initNavigation();
    initSidebar();
    initTooltips();
    initAnimations();
});

// 标签切换功能
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.posts-container');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有活动状态
            tabs.forEach(t => t.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            // 这里可以添加内容切换逻辑
            console.log('切换到标签:', this.textContent);
        });
    });
}

// 搜索功能
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar i');
    
    if (searchInput) {
        // 搜索框焦点效果
        searchInput.addEventListener('focus', function() {
            searchIcon.style.color = '#0079d3';
        });
        
        searchInput.addEventListener('blur', function() {
            searchIcon.style.color = '#818384';
        });
        
        // 搜索功能
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            console.log('搜索查询:', query);
            
            // 这里可以添加实时搜索逻辑
            if (query.length > 2) {
                // 模拟搜索建议
                showSearchSuggestions(query);
            }
        });
        
        // 回车搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
}

// 显示搜索建议
function showSearchSuggestions(query) {
    // 这里可以显示搜索建议下拉框
    console.log('显示搜索建议:', query);
}

// 执行搜索
function performSearch(query) {
    console.log('执行搜索:', query);
    // 这里可以添加实际的搜索逻辑
}

// 导航功能
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const communityItems = document.querySelectorAll('.community-item');
    
    // 主导航项点击
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navItems.forEach(nav => nav.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            console.log('导航到:', this.querySelector('span').textContent);
        });
    });
    
    // 社区项点击
    communityItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            communityItems.forEach(comm => comm.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            console.log('选择社区:', this.querySelector('span').textContent);
        });
    });
}

// 侧边栏功能
function initSidebar() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    const createFeedBtn = document.querySelector('.create-feed-btn');
    
    // 侧边栏折叠/展开
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const section = this.parentElement;
            const content = section.querySelector('.recent-communities, .create-feed-btn');
            
            if (content) {
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    content.style.display = 'none';
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });
    
    // 创建自定义订阅按钮
    if (createFeedBtn) {
        createFeedBtn.addEventListener('click', function() {
            console.log('创建自定义订阅');
            // 这里可以添加创建订阅的逻辑
            showCreateFeedModal();
        });
    }
}

// 显示创建订阅模态框
function showCreateFeedModal() {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>创建自定义订阅</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <input type="text" placeholder="订阅名称" class="modal-input">
                <textarea placeholder="描述（可选）" class="modal-textarea"></textarea>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary">取消</button>
                <button class="btn-primary">创建</button>
            </div>
        </div>
    `;
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }
        .modal-content {
            background-color: white;
            border-radius: 8px;
            width: 400px;
            max-width: 90%;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid #edeff1;
        }
        .modal-header h3 {
            margin: 0;
            font-size: 18px;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #818384;
        }
        .modal-body {
            padding: 16px;
        }
        .modal-input, .modal-textarea {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #edeff1;
            border-radius: 4px;
            margin-bottom: 12px;
            font-size: 14px;
        }
        .modal-textarea {
            height: 80px;
            resize: vertical;
        }
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            padding: 16px;
            border-top: 1px solid #edeff1;
        }
        .btn-primary, .btn-secondary {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
        }
        .btn-primary {
            background-color: #0079d3;
            color: white;
        }
        .btn-secondary {
            background-color: #f6f7f8;
            color: #1c1c1c;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // 关闭模态框
    const closeBtn = modal.querySelector('.close-btn');
    const cancelBtn = modal.querySelector('.btn-secondary');
    
    function closeModal() {
        document.body.removeChild(modal);
    }
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// 工具提示功能
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('data-tooltip');
            if (tooltip) {
                showTooltip(this, tooltip);
            }
        });
        
        element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

// 显示工具提示
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background-color: #1c1c1c;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    document.body.appendChild(tooltip);
    
    // 定位工具提示
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
}

// 隐藏工具提示
function hideTooltip() {
    const tooltip = document.querySelector('.custom-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// 动画效果
function initAnimations() {
    // 帖子加载动画
    const posts = document.querySelectorAll('.post');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    posts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(post);
    });
}

// 顶部导航栏功能
function initHeader() {
    const logo = document.querySelector('.logo');
    const createBtn = document.querySelector('.create-btn');
    const userAvatar = document.querySelector('.user-avatar');
    const iconBtns = document.querySelectorAll('.icon-btn');
    
    // Logo点击
    if (logo) {
        logo.addEventListener('click', function() {
            console.log('返回首页');
            // 这里可以添加返回首页的逻辑
        });
    }
    
    // 创建按钮
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            console.log('创建新内容');
            // 这里可以添加创建内容的逻辑
        });
    }
    
    // 用户头像
    if (userAvatar) {
        userAvatar.addEventListener('click', function() {
            console.log('用户菜单');
            // 这里可以添加用户菜单的逻辑
        });
    }
    
    // 图标按钮
    iconBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            console.log('点击按钮:', icon.className);
            // 这里可以添加各个按钮的功能
        });
    });
}

// 社区卡片功能
function initCommunityCards() {
    const communityCards = document.querySelectorAll('.community-card');
    
    communityCards.forEach(card => {
        card.addEventListener('click', function() {
            const communityName = this.querySelector('.community-name').textContent;
            console.log('访问社区:', communityName);
            // 这里可以添加访问社区的逻辑
        });
    });
}

// 帖子交互功能
function initPostInteractions() {
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const title = post.querySelector('.post-title');
        const subreddit = post.querySelector('.subreddit');
        
        // 帖子标题点击
        if (title) {
            title.addEventListener('click', function() {
                console.log('查看帖子:', this.textContent);
                // 这里可以添加查看帖子的逻辑
            });
        }
        
        // 子版块点击
        if (subreddit) {
            subreddit.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('访问子版块:', this.textContent);
                // 这里可以添加访问子版块的逻辑
            });
        }
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initCommunityCards();
    initPostInteractions();
});

// 响应式功能
function initResponsive() {
    function handleResize() {
        const width = window.innerWidth;
        
        if (width <= 768) {
            // 移动端适配
            console.log('切换到移动端模式');
        } else if (width <= 1200) {
            // 平板适配
            console.log('切换到平板模式');
        } else {
            // 桌面端
            console.log('桌面端模式');
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化时调用一次
}

// 键盘快捷键
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K 聚焦搜索框
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-bar input');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // ESC 关闭模态框
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.remove();
            }
        }
    });
}

// 初始化响应式和键盘快捷键
document.addEventListener('DOMContentLoaded', function() {
    initResponsive();
    initKeyboardShortcuts();
});

// 导出函数供外部使用
window.RedditApp = {
    performSearch,
    showCreateFeedModal,
    initTabs,
    initSearch,
    initNavigation
}; 