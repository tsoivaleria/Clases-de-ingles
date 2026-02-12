document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.steps-btn');
  
    if (!buttons.length) return;
  
    const phone = '34651645170';
  
    function isMobile() {
      return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const plan = button.dataset.plan;
        const deviceType = isMobile() ? 'mobile' : 'desktop';
  
        let message = 'Hola! Quiero reservar mi clase gratis 😊';
  
        if (plan) {
          message = `Hola! Me interesa el Plan ${plan}. ¿Podemos hablar? 😊`;
        }
  
        // 📊 Analytics
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'whatsapp_click', {
            event_category: 'engagement',
            event_label: plan ? `plan_${plan}` : 'free_class',
            device: deviceType
          });
        }
  
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const certImg = document.querySelector('.certificate-img');
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.querySelector('.certificate-close');
  
    if (!certImg || !modal || !closeBtn) return;
  
    certImg.addEventListener('click', function () {
      modal.classList.add('active');
    });
  
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });
  
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.levels__button');

  if (btn) {
    btn.addEventListener('click', function () {
      window.open('https://forms.gle/3qLV6j3cxfcvEaNe8', '_blank');
      // если нужно в той же вкладке:
      // window.location.href = 'https://forms.gle/3qLV6j3cxfcvEaNe8';
    });
  }
});