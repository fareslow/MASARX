import Link from 'next/link';
import { CalculatorWidget } from '@/components/CalculatorWidget';
import { MarketingFooter } from '@/components/MarketingFooter';
import { MarketingHeader } from '@/components/MarketingHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { getDictionary, isLocale, localizePath } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="badge">{dictionary.hero.badge}</span>
              <h1>{dictionary.hero.title}</h1>
              <p>{dictionary.hero.description}</p>

              <div className="hero-actions">
                <Link href={localizePath(locale, '/auth/sign-up')} className="button primary">
                  {dictionary.hero.primaryCta}
                </Link>
                <Link href={localizePath(locale, '/calculator')} className="button secondary">
                  {dictionary.hero.secondaryCta}
                </Link>
                <Link href={localizePath(locale, '/contact')} className="button ghost">
                  {dictionary.hero.tertiaryCta}
                </Link>
              </div>

              <div className="hero-metrics">
                {dictionary.heroMetrics.map((metric) => (
                  <div key={metric.label} className="stat-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-panel">
              <span className="eyebrow">{locale === 'ar' ? 'لماذا الآن؟' : 'Why now?'}</span>
              <h2>{locale === 'ar' ? 'لأن التشغيل اللوجستي لا يحتمل أدوات متفرقة.' : 'Because logistics operations should not live in fragmented tools.'}</h2>
              <p className="muted-paragraph">
                {locale === 'ar'
                  ? 'منصة واحدة للمبيعات، الحاسبة، التسجيل، التشغيل، التتبع، والتقارير. هذا يجعل رحلة العميل أكثر إقناعًا، ورحلة الفريق الداخلي أكثر سرعة وانضباطًا.'
                  : 'One product for acquisition, quoting, signup, operations, tracking, and analytics.'}
              </p>

              <div className="hero-panel-grid">
                {dictionary.modules.slice(0, 3).map((item) => (
                  <div key={item.title} className="hero-panel-item">
                    <strong>{item.title}</strong>
                    <p className="muted-paragraph">{item.description}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={locale === 'ar' ? 'القيمة الرئيسية' : 'Core Value'}
              title={locale === 'ar' ? 'لماذا يستخدم العملاء MASARX؟' : 'Why do teams choose MASARX?'}
              description={locale === 'ar' ? 'قيمة مفهومة من أول زيارة ثم تتجسد مباشرة داخل التشغيل اليومي.' : 'A clear value proposition that turns into daily operational leverage.'}
            />
            <div className="value-grid">
              {dictionary.valueProps.map((item) => (
                <article key={item.title} className="value-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={locale === 'ar' ? 'كيف تعمل المنصة' : 'How It Works'}
              title={locale === 'ar' ? 'سير واضح من التسجيل حتى أول شحنة' : 'A clear path from signup to your first shipment'}
              description={locale === 'ar' ? 'هذا ليس onboarding نظريًا. بل تدفق مصمم لتقليل الاحتكاك والوصول إلى القيمة بسرعة.' : 'A low-friction onboarding path designed to reach value quickly.'}
            />
            <div className="steps-grid">
              {dictionary.steps.map((item, index) => (
                <article key={item.title} className="step-card">
                  <span className="eyebrow">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={locale === 'ar' ? 'حاسبة ما قبل التسجيل' : 'Pre-signup Calculator'}
              title={locale === 'ar' ? 'احسب السعر وقارن الخيارات قبل أن تتخذ القرار' : 'Calculate shipping and compare options before you commit'}
              description={locale === 'ar' ? 'الحاسبة هنا جزء من البيع، لا مجرد عنصر تجميلي. وهي مبنية على نفس منطق التسعير المقترح داخل المنصة.' : 'The calculator is part of the sales journey, built on the same pricing logic as the app core.'}
            />
            <CalculatorWidget compact />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={locale === 'ar' ? 'التكاملات' : 'Integrations'}
              title={locale === 'ar' ? 'ابدأ بعدد أساسي من الربط واستعد للتوسع' : 'Start with core integrations and scale cleanly'}
              description={locale === 'ar' ? 'بنية مزودات موحدة لإضافة المتاجر والناقلين ومزودي الرسائل بدون تعقيد عشوائي.' : 'A unified provider layer for stores, carriers, and messaging services.'}
            />
            <div className="integration-pills">
              {dictionary.integrations.map((item) => (
                <span key={item} className="integration-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={locale === 'ar' ? 'الموديولات الأساسية' : 'Core Modules'}
              title={locale === 'ar' ? 'المنتج مبني للتشغيل اليومي وليس للعرض فقط' : 'Built for real daily operations, not just a brochure'}
              description={locale === 'ar' ? 'من إدارة الطلبات والشحنات حتى التقارير والصلاحيات، كل شيء مصمم كجزء من منتج تشغيلي قابل للنمو.' : 'Orders, shipments, reports, permissions, and integrations are treated as product modules from day one.'}
            />
            <div className="modules-grid">
              {dictionary.modules.map((item) => (
                <article key={item.title} className="module-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={locale === 'ar' ? 'الأسعار' : 'Pricing'}
              title={locale === 'ar' ? 'ابدأ سريعًا، ثم وسّع الخطة مع نمو الطلبات' : 'Start quickly, then scale plans as operations grow'}
              description={locale === 'ar' ? 'حتى في النموذج الأولي، يجب أن يكون مسار الاشتراك واضحًا وغير مربك.' : 'Even in the first release, subscription intent should be easy to understand.'}
            />
            <div className="plans-grid">
              {dictionary.plans.map((plan) => (
                <article key={plan.name} className="pricing-card">
                  <span className="eyebrow">{plan.name}</span>
                  <div className="price">{plan.price}</div>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link href={localizePath(locale, '/contact')} className="button primary">
                    {plan.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              title={locale === 'ar' ? 'إجابات سريعة قبل التسجيل' : 'Fast answers before signup'}
            />
            <div className="form-stack">
              {dictionary.faqs.map((item) => (
                <details key={item.question} open>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <div className="contact-card">
              <span className="eyebrow">{locale === 'ar' ? 'التواصل' : 'Contact'}</span>
              <h3>{locale === 'ar' ? 'ابدأ المحادثة مع الفريق التجاري' : 'Talk to the commercial team'}</h3>
              <p>{locale === 'ar' ? 'واتساب، بريد، وطلب ديمو في مكان واضح ومباشر.' : 'WhatsApp, email, and demo requests in one clear place.'}</p>
              <div className="form-stack">
                {dictionary.contactChannels.map((channel) => (
                  <div key={channel.label} className="section-card">
                    <strong>{channel.label}</strong>
                    <p>{channel.value}</p>
                    <span>{channel.hint}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <span className="eyebrow">{locale === 'ar' ? 'جاهز للتجربة؟' : 'Ready to try it?'}</span>
              <h3>{locale === 'ar' ? 'ابدأ مجانًا ثم أكمل التهيئة تدريجيًا' : 'Start free and complete setup progressively'}</h3>
              <p>{locale === 'ar' ? 'التسجيل الأولي يحتاج أقل قدر ممكن من البيانات ثم يوصلك إلى لوحة تشغيل فعلية.' : 'Initial signup keeps friction low, then expands through onboarding.'}</p>
              <div className="hero-actions">
                <Link href={localizePath(locale, '/auth/sign-up')} className="button primary">
                  {dictionary.hero.primaryCta}
                </Link>
                <Link href={localizePath(locale, '/dashboard')} className="button secondary">
                  {locale === 'ar' ? 'استعراض اللوحة' : 'View Dashboard'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
