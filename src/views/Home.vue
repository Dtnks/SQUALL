<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Pathology × Spatial Transcriptomics</span>
        <h1>SQUALL</h1>
        <p class="tagline">
          A multimodal foundation model that connects tissue morphology with spatial gene
          expression for transferable and interpretable computational pathology.
        </p>
        <div class="hero-actions">
          <router-link class="button primary" to="/installation">Install SQUALL</router-link>
          <router-link class="button secondary" to="/tutorials">Explore tutorials</router-link>
        </div>
      </div>
      <div class="hero-mark" aria-hidden="true">
        <img :src="logo" alt="" />
      </div>
    </section>

    <section class="intro">
      <h2>One representation for morphology and molecular context</h2>
      <p>
        SQUALL is pretrained on more than 650,000 paired pathology–transcriptomics tiles.
        Modality-specific encoders, shared Transformer layers, and cross-modal reconstruction
        learn representations that can be adapted across tissues, platforms, and resolutions.
      </p>
    </section>

    <section class="capabilities" aria-label="Core capabilities">
      <article>
        <span class="card-index">01</span>
        <h3>Spatially aware clustering</h3>
        <p>Identify tissue regions and molecularly informed spatial structure from multimodal embeddings.</p>
      </article>
      <article>
        <span class="card-index">02</span>
        <h3>Gene expression prediction</h3>
        <p>Estimate spatial gene-expression patterns from H&amp;E morphology in supported workflows.</p>
      </article>
      <article>
        <span class="card-index">03</span>
        <h3>Survival modeling</h3>
        <p>Use slide-level SQUALL features with attention-based models for risk stratification.</p>
      </article>
      <article>
        <span class="card-index">04</span>
        <h3>Reusable embeddings</h3>
        <p>Export pathology–molecular representations for downstream analysis and visualization.</p>
      </article>
    </section>

    <section class="workflow">
      <div class="section-heading">
        <span>Typical workflow</span>
        <h2>From spatial data to downstream discovery</h2>
      </div>
      <ol>
        <li><strong>Prepare</strong><span>Load H&amp;E images, spatial coordinates, and expression data.</span></li>
        <li><strong>Encode</strong><span>Generate aligned morphology and molecular representations.</span></li>
        <li><strong>Adapt</strong><span>Apply SQUALL to prediction, clustering, or survival analysis.</span></li>
        <li><strong>Interpret</strong><span>Visualize spatial patterns and evaluate downstream results.</span></li>
      </ol>
    </section>

    <section class="doc-links">
      <router-link to="/installation">
        <span>Get started</span>
        <h3>Installation</h3>
        <p>Set up a reproducible environment and install the project from source.</p>
        <b>Open installation →</b>
      </router-link>
      <router-link to="/tutorials">
        <span>Learn by example</span>
        <h3>Tutorials</h3>
        <p>Follow Visium, spatial-domain, gene-expression, and survival workflows.</p>
        <b>Browse tutorials →</b>
      </router-link>
      <router-link to="/api/overview">
        <span>Reference</span>
        <h3>API documentation</h3>
        <p>Review readers, preprocessing functions, and core interfaces.</p>
        <b>View API →</b>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.home-page { max-width: 1120px; margin: 0 auto; color: #243347; }
.hero { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) 280px; gap: 48px; align-items: center; min-height: 380px; padding: 58px 64px; overflow: hidden; border-radius: 24px; background: linear-gradient(135deg, #eef6ff 0%, #f8fbff 52%, #edf8f5 100%); border: 1px solid #dce9f3; }
.hero::after { content: ''; position: absolute; width: 360px; height: 360px; right: -130px; bottom: -190px; border-radius: 50%; background: rgba(36, 111, 157, .09); }
.eyebrow, .section-heading span, .doc-links > a > span { color: #20708f; font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
h1 { margin: 8px 0 14px; color: #132a43; font-size: clamp(48px, 7vw, 76px); line-height: 1; letter-spacing: -.04em; }
.tagline { max-width: 700px; margin: 0; color: #41576d; font-size: 20px; line-height: 1.65; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.button { padding: 11px 19px; border-radius: 8px; font-weight: 700; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease; }
.button:hover { transform: translateY(-2px); }
.primary { color: white; background: #176b8a; box-shadow: 0 8px 20px rgba(23, 107, 138, .2); }
.secondary { color: #176b8a; border: 1px solid #9fc4d3; background: rgba(255,255,255,.7); }
.hero-mark { position: relative; z-index: 1; display: grid; place-items: center; }
.hero-mark img { width: min(220px, 100%); border-radius: 28px; box-shadow: 0 22px 45px rgba(35, 70, 94, .18); }
.intro { max-width: 820px; padding: 58px 4px 28px; }
.intro h2, .workflow h2 { margin: 0 0 14px; color: #17324d; font-size: 30px; line-height: 1.3; }
.intro p { margin: 0; color: #526579; font-size: 17px; }
.capabilities { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.capabilities article { padding: 24px; border: 1px solid #e0e7ed; border-radius: 14px; background: #fff; box-shadow: 0 4px 16px rgba(31, 56, 76, .04); }
.card-index { color: #77a8b9; font-size: 12px; font-weight: 800; }
.capabilities h3, .doc-links h3 { margin: 7px 0 8px; color: #203a53; font-size: 20px; }
.capabilities p, .doc-links p { margin: 0; color: #607184; }
.workflow { display: grid; grid-template-columns: .8fr 1.2fr; gap: 54px; margin-top: 64px; padding: 42px; border-radius: 18px; color: white; background: #17324d; }
.workflow .section-heading span { color: #83c6d8; }
.workflow h2 { margin-top: 7px; color: white; }
.workflow ol { display: grid; gap: 2px; margin: 0; padding: 0; list-style: none; }
.workflow li { display: grid; grid-template-columns: 100px 1fr; gap: 18px; padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,.13); }
.workflow li:last-child { border-bottom: 0; }
.workflow strong { color: #8fd0df; }
.workflow li span { color: #d9e5ee; }
.doc-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 64px; }
.doc-links a { display: flex; min-height: 230px; flex-direction: column; padding: 25px; color: inherit; text-decoration: none; border: 1px solid #dfe7ed; border-radius: 14px; background: #fbfcfd; transition: transform .18s ease, border-color .18s ease; }
.doc-links a:hover { transform: translateY(-3px); border-color: #8fb9c8; }
.doc-links b { margin-top: auto; padding-top: 22px; color: #176b8a; font-size: 14px; }
@media (max-width: 820px) { .hero { grid-template-columns: 1fr; padding: 42px 30px; }.hero-mark { display: none; }.workflow { grid-template-columns: 1fr; }.doc-links { grid-template-columns: 1fr; }.doc-links a { min-height: 190px; } }
@media (max-width: 560px) { .capabilities { grid-template-columns: 1fr; }.workflow { padding: 28px 24px; }.workflow li { grid-template-columns: 1fr; gap: 3px; } }
</style>
