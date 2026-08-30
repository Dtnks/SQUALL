<template>
  <div class="installation-page">
    <header class="page-header">
      <span>Getting started</span>
      <h1>Installation</h1>
      <p>Install SQUALL from source in an isolated Conda environment.</p>
    </header>

    <div class="layout">
      <aside>
        <strong>On this page</strong>
        <a href="#requirements">Requirements</a>
        <a href="#install">Source installation</a>
        <a href="#verify">Verify</a>
        <a href="#next">Next steps</a>
      </aside>

      <article>
        <section id="requirements">
          <h2>Requirements</h2>
          <ul>
            <li>Linux or macOS</li>
            <li>Git and Conda/Miniconda</li>
            <li>Python 3.10</li>
            <li>A CUDA-capable GPU is recommended for model inference and training</li>
          </ul>
        </section>

        <section id="install">
          <h2>Install from source</h2>
          <p>Clone the project, create a dedicated environment, and install its Python dependencies.</p>
          <div class="code-block">
            <div class="code-title">Terminal</div>
            <pre><code>git clone &lt;SQUALL_REPOSITORY_URL&gt;
cd SQUALL

conda create -n squall python=3.10 -y
conda activate squall

python -m pip install --upgrade pip
pip install -r requirements.txt
pip install -e .</code></pre>
          </div>
          <div class="note">
            Replace <code>&lt;SQUALL_REPOSITORY_URL&gt;</code> with the repository URL provided by the project maintainers.
            The editable installation keeps your environment linked to the local source tree.
          </div>
        </section>

        <section id="verify">
          <h2>Verify the environment</h2>
          <p>Confirm that Python can import the project and that PyTorch detects the expected compute device.</p>
          <div class="code-block">
            <div class="code-title">Terminal</div>
            <pre><code>python -c "import torch; print('PyTorch:', torch.__version__); print('CUDA:', torch.cuda.is_available())"
python -c "import squall; print('SQUALL import successful')"</code></pre>
          </div>
          <p class="small">
            If the package import name in your source release differs, use the module name documented in that release.
          </p>
        </section>

        <section id="next">
          <h2>Next steps</h2>
          <div class="next-links">
            <router-link to="/tutorials/visium">
              <strong>Visium preprocessing</strong>
              <span>Prepare spatial transcriptomics inputs →</span>
            </router-link>
            <router-link to="/tutorials/gex-prediction">
              <strong>GEX prediction</strong>
              <span>Run a gene-expression workflow →</span>
            </router-link>
            <router-link to="/tutorials/survival">
              <strong>Survival prediction</strong>
              <span>Use SQUALL slide embeddings →</span>
            </router-link>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<style scoped>
.installation-page { max-width: 1040px; margin: 0 auto; color: #27384a; }
.page-header { padding: 38px 42px; border: 1px solid #dce8ef; border-radius: 18px; background: linear-gradient(135deg, #f1f8fc, #f9fcfb); }
.page-header span { color: #20708f; font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.page-header h1 { margin: 5px 0 8px; color: #17324d; font-size: 42px; line-height: 1.2; }
.page-header p { margin: 0; color: #5a6e80; font-size: 18px; }
.layout { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 48px; padding-top: 42px; }
aside { position: sticky; top: 20px; align-self: start; display: flex; flex-direction: column; gap: 8px; padding: 18px; border-left: 2px solid #dce7ed; }
aside strong { margin-bottom: 4px; color: #30485f; font-size: 13px; }
aside a { color: #607487; font-size: 14px; text-decoration: none; }
aside a:hover { color: #176b8a; }
article { min-width: 0; }
section { margin-bottom: 42px; scroll-margin-top: 24px; }
h2 { margin: 0 0 14px; color: #213d57; font-size: 27px; }
p { color: #536679; }
ul { padding-left: 21px; color: #536679; }
li { margin: 7px 0; }
.code-block { overflow: hidden; margin: 16px 0; border: 1px solid #dce4eb; border-radius: 10px; background: #f7f9fb; }
.code-title { padding: 7px 16px; color: #6b7b8a; border-bottom: 1px solid #dce4eb; background: #edf2f5; font-size: 12px; font-weight: 700; text-transform: uppercase; }
pre { overflow-x: auto; margin: 0; padding: 18px; }
code { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-size: 14px; }
.note { padding: 14px 17px; color: #405a70; border-left: 4px solid #3a8ba8; border-radius: 5px; background: #eef7fa; }
.small { font-size: 14px; }
.next-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.next-links a { display: flex; flex-direction: column; gap: 7px; padding: 17px; color: inherit; text-decoration: none; border: 1px solid #dee6ec; border-radius: 9px; background: #fbfcfd; }
.next-links a:hover { border-color: #8fb9c8; }
.next-links strong { color: #23445e; }
.next-links span { color: #607487; font-size: 13px; line-height: 1.5; }
@media (max-width: 760px) { .layout { grid-template-columns: 1fr; }.layout aside { display: none; }.next-links { grid-template-columns: 1fr; }.page-header { padding: 30px 26px; } }
</style>
