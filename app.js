
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const out = document.getElementById('output');

  btn.addEventListener('click', () => {
    const now = new Date().toLocaleString('pl-PL');
    out.textContent = `Klik! Aktualny czas: ${now}`;
   });
