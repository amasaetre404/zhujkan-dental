<template>
  <section class="hero-promotion" aria-labelledby="compensation-heading">
    <div class="hero-promotion__heading">
      <span class="hero-promotion__badge">Акция</span>
      <h2 id="compensation-heading">Компенсация на лечение</h2>
    </div>
    <div class="hero-promotion__offer">
      <p class="hero-promotion__amount">20 000 <span>₽</span></p>
      <p class="hero-promotion__condition">При лечении от <strong>400 000 ₽</strong></p>
    </div>
    <p class="hero-promotion__details">Условия — в коммерческом предложении.</p>
  </section>
</template>

<style scoped>
.hero-promotion { padding: 20px 22px; border: 1px solid var(--color-brand-border); border-radius: 22px; background: var(--color-brand-soft); }
.hero-promotion__heading { display: flex; align-items: center; gap: 8px; }
.hero-promotion__badge { flex-shrink: 0; padding: 3px 8px; border: 1px solid var(--color-brand-border); border-radius: 999px; color: var(--color-brand-dark); font-size: 11px; font-weight: 500; line-height: 1.4; }
.hero-promotion h2 { color: var(--color-ink); font-size: 13px; font-weight: 500; line-height: 1.4; letter-spacing: -.015em; }
.hero-promotion__offer { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; margin-top: 16px; }
.hero-promotion__amount { color: var(--color-brand-dark); font-size: 40px; font-weight: 500; line-height: 1; letter-spacing: -.055em; white-space: nowrap; }
.hero-promotion__amount span { font-size: .7em; }
.hero-promotion__condition { color: var(--color-ink); font-size: 13px; line-height: 1.5; }
.hero-promotion__condition strong { font-weight: 600; white-space: nowrap; }
.hero-promotion__details { margin-top: 12px; color: var(--color-muted); font-size: 11px; line-height: 1.6; }
@media (max-width: 700px) {
  .hero-promotion { padding: 18px 20px; }
  .hero-promotion__offer { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 16px; }
  .hero-promotion__amount { font-size: 36px; }
  .hero-promotion__condition { max-width: 125px; }
}
@media (max-width: 360px) {
  .hero-promotion { padding-inline: 16px; }
  .hero-promotion__amount { font-size: 32px; }
}
</style>