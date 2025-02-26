// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的留言！我们会尽快回复。');
            this.reset();
        });
    }
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333';
    }
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
}); 