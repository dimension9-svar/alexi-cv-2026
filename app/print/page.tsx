import { cv } from "@/lib/cv-data";
import { PrintToolbar } from "@/components/PrintToolbar";

export default function PrintPage() {
  return (
    <>
      <PrintToolbar />

      <div className="stage">
        {/* PAGE 1 */}
        <article className="page">
          <div className="print-top-strip"><i /><i /><i /></div>
          <div className="print-strip-label">CV / 2026 / ZA</div>

          <header className="header">
            <div>
              <div className="print-eyebrow">{cv.edition}</div>
              <h1 className="print-name">{cv.name}<span className="dot">.</span></h1>
              <p className="print-role">{cv.role}</p>
              <p className="print-tagline">{cv.tagline}</p>
            </div>
            <div className="print-header-right">
              <div
                className="print-portrait"
                style={{ backgroundImage: "url(/portrait.jpg)" }}
                aria-label={`Portrait of ${cv.name}`}
              />
              <div className="print-contact">
                <span className="label">LOCATION</span>
                <span>{cv.location}</span>
                <span className="label" style={{ marginTop: 6 }}>PHONE</span>
                <span><a href={`tel:${cv.phoneTel}`}>{cv.phone}</a></span>
                <span className="label" style={{ marginTop: 6 }}>EMAIL</span>
                <span><a href={`mailto:${cv.email}`}>{cv.email}</a></span>
              </div>
            </div>
          </header>

          <div className="print-stats">
            {cv.stats.map((s, i) => (
              <div key={i} className="print-stat">
                <span className="num">{s.num}</span>
                <span className="lbl">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="print-body">
            <aside className="print-sidebar">
              <div className="print-sidebar-top">
                <span>At a Glance</span>
                <span className="dots"><i /><i /><i /></span>
              </div>

              <section className="print-sidebar-section">
                <h3 className="print-h-label"><span>Languages</span><span className="count">03</span></h3>
                {cv.languages.map((l) => (
                  <div key={l.name} className="print-row">
                    <span>{l.name}</span>
                    <span className="val-mono">{l.level}</span>
                  </div>
                ))}
              </section>

              <section className="print-sidebar-section">
                <h3 className="print-h-label"><span>Education</span></h3>
                <div className="print-edu">
                  {cv.education.map((e, i) => (
                    <div key={i} className="print-edu-block">
                      <p className="school">{e.school}</p>
                      <p className="detail">{e.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="print-sidebar-section">
                <h3 className="print-h-label"><span>Regions Served</span></h3>
                {cv.regions.map((r) => (
                  <div key={r.name} className="print-row">
                    <span>{r.name}</span>
                    <span className="val-mono">{r.years}</span>
                  </div>
                ))}
              </section>
            </aside>

            <main>
              <section className="print-main-section">
                <h2><span>Profile</span></h2>
                <div className="print-profile">
                  <p className="print-summary-lead">
                    Sales and key account professional with <em>10+ years</em> in building materials, contractor sales, retail operations, and regional account management across South Africa.
                  </p>
                  <p className="print-summary">{cv.profileBody}</p>
                </div>
              </section>

              <section className="print-main-section">
                <h2><span>Core Competencies</span><span className="count">{cv.skills.length.toString().padStart(2, "0")}</span></h2>
                <div className="print-skills">
                  {cv.skills.map((s) => (
                    <div key={s.name} className="print-skill">
                      <span>{s.name}</span>
                      <span className="print-skill-bar"><i style={{ width: `${s.value}%` }} /></span>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>

          <div className="print-page-foot">
            <span>{cv.name} — Curriculum Vitae</span>
            <span>01 / 02</span>
          </div>
        </article>

        {/* PAGE 2 */}
        <article className="page">
          <div className="print-top-strip"><i /><i /><i /></div>
          <div className="print-strip-label">CV / 2026 / ZA</div>

          <header className="print-page2-head">
            <div>
              <div className="print-eyebrow">Continued · Page Two</div>
              <h2 className="title">Experience <em>&amp;</em> References</h2>
            </div>
            <div className="print-contact">
              <span className="label">CONTACT</span>
              <span>{cv.name}</span>
              <span><a href={`mailto:${cv.email}`}>{cv.email}</a></span>
              <span><a href={`tel:${cv.phoneTel}`}>{cv.phone}</a></span>
            </div>
          </header>

          <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 26, flex: 1 }}>
            <section className="print-main-section">
              <h2><span>Experience</span><span className="count">2014 — Present</span></h2>
              {cv.experience.map((j, i) => (
                <article key={i} className="print-job">
                  <div className="print-job-head">
                    <h3 className="print-job-title">{j.title} · <em>{j.company}</em></h3>
                    <div className="print-job-meta">{j.period}<br />{j.location}</div>
                  </div>
                  <p className="print-job-blurb">{j.blurb}</p>
                  <ul>{j.bullets.map((b, k) => <li key={k}>{b}</li>)}</ul>
                </article>
              ))}
            </section>

            <section className="print-main-section">
              <h2><span>References</span><span className="count">02</span></h2>
              <div className="print-refs">
                {cv.references.map((r) => (
                  <div key={r.name} className="print-ref-card">
                    <p className="print-ref-name">{r.name}</p>
                    <p className="print-ref-meta">{r.company}<br />{r.phone}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="print-page-foot">
            <span>{cv.name} — Curriculum Vitae</span>
            <span>02 / 02</span>
          </div>
        </article>
      </div>
    </>
  );
}
