// Cynbit website — navigation, service filter and enquiry form
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initServiceFilter();
  initEnquiryForm();
});

function initNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.firstElementChild.textContent = open ? 'Close' : 'Menu';
    });
  }

  document.querySelectorAll('.nav__link--toggle').forEach((btn) => {
    const item = btn.closest('.nav__item');
    const setOpen = (open) => {
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      document.querySelectorAll('.nav__item.is-open').forEach((i) => {
        if (i !== item) {
          i.classList.remove('is-open');
          i.querySelector('.nav__link--toggle').setAttribute('aria-expanded', 'false');
        }
      });
      setOpen(willOpen);
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { setOpen(false); btn.focus(); }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item')) {
      document.querySelectorAll('.nav__item.is-open').forEach((i) => {
        i.classList.remove('is-open');
        i.querySelector('.nav__link--toggle').setAttribute('aria-expanded', 'false');
      });
    }
  });
}

function initServiceFilter() {
  const filters = document.querySelectorAll('.filter');
  const rows = document.querySelectorAll('.service-row');
  if (!filters.length) return;
  filters.forEach((f) => {
    f.addEventListener('click', () => {
      const target = f.dataset.target;
      const active = f.getAttribute('aria-pressed') === 'true';
      filters.forEach((x) => x.setAttribute('aria-pressed', 'false'));
      rows.forEach((r) => r.classList.remove('is-match', 'is-dim'));
      if (active || target === 'all') return;
      f.setAttribute('aria-pressed', 'true');
      rows.forEach((r) => r.classList.add(r.id === target ? 'is-match' : 'is-dim'));
      document.getElementById(target)?.scrollIntoView({ block: 'center' });
    });
  });
}

function initEnquiryForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const summary = document.getElementById('error-summary');
  const summaryText = document.getElementById('error-count');
  const alertBox = document.getElementById('form-alert');
  const submit = form.querySelector('button[type="submit"]');
  const success = document.getElementById('success');
  const formView = document.getElementById('form-view');
  let sending = false;

  // Pre-select a service when arriving from a service page (?service=ai)
  const param = new URLSearchParams(location.search).get('service');
  if (param) {
    const opt = form.querySelector(`input[name="service"][value="${param}"]`);
    if (opt) opt.checked = true;
  }

  const rules = {
    name: (v) => v.trim().length >= 2 || 'Please enter your name.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter an email like name@company.com.',
    message: (v) => v.trim().length >= 15 || 'Tell us briefly what you’d like to build or improve (at least a sentence).',
  };

  const setError = (field, msg) => {
    const wrap = field.closest('.field');
    wrap.classList.toggle('has-error', Boolean(msg));
    const el = wrap.querySelector('.error-msg');
    if (el) el.textContent = msg ? '⚠ ' + msg : '';
    const input = wrap.querySelector('input, textarea');
    if (input && input.type !== 'radio') input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  };

  const validateField = (input) => {
    const rule = rules[input.name];
    if (!rule) return true;
    const result = rule(input.value);
    setError(input, result === true ? '' : result);
    return result === true;
  };

  Object.keys(rules).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener('blur', () => { if (input.value) validateField(input); });
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('has-error')) validateField(input);
    });
  });

  const serviceFieldset = form.querySelector('fieldset.field');
  form.querySelectorAll('input[name="service"]').forEach((r) =>
    r.addEventListener('change', () => serviceFieldset.classList.remove('has-error')));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (sending) return; // prevent duplicate submissions
    alertBox.classList.remove('is-visible');

    let firstInvalid = null;
    let errors = 0;
    Object.keys(rules).forEach((name) => {
      const input = form.elements[name];
      if (!validateField(input)) { errors++; firstInvalid ??= input; }
    });
    const serviceChosen = form.querySelector('input[name="service"]:checked');
    serviceFieldset.classList.toggle('has-error', !serviceChosen);
    if (!serviceChosen) { errors++; firstInvalid ??= form.querySelector('input[name="service"]'); }

    if (errors) {
      summaryText.textContent = `Please fix ${errors} field${errors > 1 ? 's' : ''} to send your enquiry`;
      summary.classList.add('is-visible');
      summary.focus();
      firstInvalid?.focus({ preventScroll: true });
      return;
    }
    summary.classList.remove('is-visible');

    sending = true;
    const label = submit.textContent;
    submit.disabled = true;
    submit.textContent = 'Sending your enquiry…';

    try {
      await sendEnquiry(new FormData(form));
      const name = form.elements.name.value.trim().split(' ')[0];
      document.getElementById('success-name').textContent = name;
      document.getElementById('success-email').textContent = form.elements.email.value.trim();
      document.getElementById('success-service').textContent = serviceChosen.nextElementSibling.textContent;
      document.getElementById('success-company').textContent = form.elements.company.value.trim() || '—';
      formView.hidden = true;
      success.hidden = false;
      success.focus();
      window.scrollTo({ top: 0 });
    } catch (err) {
      // Values are kept so the visitor can retry without retyping
      alertBox.classList.add('is-visible');
    } finally {
      sending = false;
      submit.disabled = false;
      submit.textContent = label;
    }
  });
}

// Demo submission. Replace with Cynbit's real enquiry endpoint.
function sendEnquiry(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (navigator.onLine === false ? reject(new Error('offline')) : resolve(data)), 1200);
  });
}
