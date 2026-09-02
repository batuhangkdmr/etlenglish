"use client";

import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  program: string;
  country: string;
  timing: string;
  level: string;
  message: string;
  consent: boolean;
};

const initialValues: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  program: "",
  country: "",
  timing: "",
  level: "",
  message: "",
  consent: false,
};

const steps = ["Sizi tanıyalım", "Hedefinizi belirleyelim", "Görüşmeyi planlayalım"];

export function ConsultationForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const updateValue = (key: keyof FormValues, value: string | boolean) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const goNext = () => {
    if (!formRef.current?.reportValidity()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current?.reportValidity()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="consultation-form-card flex min-h-[430px] flex-col items-center justify-center rounded-[2rem] bg-white p-7 text-center text-brand-navy shadow-[0_28px_70px_-32px_rgba(0,0,0,0.5)] sm:p-10">
        <span className="grid size-16 place-items-center rounded-full bg-brand-accent/10 text-brand-accent">
          <Check aria-hidden="true" className="size-8" strokeWidth={2.5} />
        </span>
        <p className="mt-6 text-2xl font-extrabold tracking-[-0.04em]">Başvurunuz bize ulaştı.</p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-brand-ink/65">Uzman danışmanlarımız en kısa sürede sizinle iletişime geçecek.</p>
        <button type="button" onClick={() => { setValues(initialValues); setStep(0); setSubmitted(false); }} className="mt-7 text-sm font-extrabold text-brand-accent hover:text-brand-accent-dark">Yeni bir form doldur</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={submitForm} className="consultation-form-card rounded-[2rem] bg-white p-5 text-brand-navy shadow-[0_28px_70px_-32px_rgba(0,0,0,0.5)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-accent">Ücretsiz ön görüşme</p>
          <p className="mt-1 text-lg font-extrabold tracking-[-0.035em]">Size özel yol haritanız</p>
        </div>
        <span className="text-sm font-extrabold text-brand-navy/35">0{step + 1}<span className="px-1">/</span>03</span>
      </div>

      <div className="mt-5 flex gap-1.5" aria-label={`Form adımı ${step + 1} / 3`}>
        {steps.map((label, index) => (
          <div key={label} className="flex-1">
            <div className={`h-1 rounded-full transition-colors duration-300 ${index <= step ? "bg-brand-accent" : "bg-brand-navy/10"}`} />
            <span className={`mt-2 block text-[9px] font-bold ${index === step ? "text-brand-navy" : "text-brand-navy/35"}`}>{label}</span>
          </div>
        ))}
      </div>

      <div key={step} className="consultation-step mt-7">
        {step === 0 ? (
          <div className="space-y-4">
            <Field label="Ad Soyad" required>
              <input required value={values.fullName} onChange={(event) => updateValue("fullName", event.target.value)} placeholder="Adınız ve soyadınız" className="form-input" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Telefon" required>
                <input required type="tel" value={values.phone} onChange={(event) => updateValue("phone", event.target.value)} placeholder="0545 000 00 00" className="form-input" />
              </Field>
              <Field label="E-posta" required>
                <input required type="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} placeholder="ornek@mail.com" className="form-input" />
              </Field>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-4">
            <Field label="İlgilendiğiniz program" required>
              <Select value={values.program} onChange={(value) => updateValue("program", value)} placeholder="Program seçin" options={["Dil Okulu", "Üniversite", "Yüksek Lisans", "Vize Danışmanlığı"]} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Düşündüğünüz ülke" required>
                <input required value={values.country} onChange={(event) => updateValue("country", event.target.value)} placeholder="Örn. İngiltere" className="form-input" />
              </Field>
              <Field label="Ne zaman başlamak istiyorsunuz?" required>
                <Select value={values.timing} onChange={(value) => updateValue("timing", value)} placeholder="Zaman seçin" options={["En kısa zamanda", "1-3 ay içinde", "3-6 ay içinde", "Karar aşamasındayım"]} />
              </Field>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <Field label="İngilizce seviyeniz">
              <Select value={values.level} onChange={(value) => updateValue("level", value)} placeholder="Seviye seçin" options={["Başlangıç", "Orta", "İyi", "İleri", "Bilmiyorum"]} />
            </Field>
            <Field label="Bize kısaca hedefinizden bahsedin">
              <textarea value={values.message} onChange={(event) => updateValue("message", event.target.value)} placeholder="Hayalinizdeki eğitim yolculuğunu anlatın..." rows={3} className="form-input resize-none" />
            </Field>
            <label className="flex items-start gap-2.5 text-[11px] leading-4 text-brand-ink/65">
              <input required type="checkbox" checked={values.consent} onChange={(event) => updateValue("consent", event.target.checked)} className="mt-0.5 size-4 accent-brand-accent" />
              <span>Kişisel verilerimin iletişim amacıyla kullanılmasını kabul ediyorum.</span>
            </label>
          </div>
        ) : null}
      </div>

      <div className="mt-7 flex gap-3">
        {step > 0 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-brand-navy/15 px-4 text-sm font-extrabold text-brand-navy transition-colors hover:bg-brand-mist"><ArrowLeft aria-hidden="true" className="size-4" /> Geri</button> : null}
        {step < steps.length - 1 ? <button type="button" onClick={goNext} className="group inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 text-sm font-extrabold text-white shadow-lg shadow-brand-accent/20 transition-all hover:-translate-y-0.5 hover:bg-brand-accent-dark">Devam Et <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></button> : <button type="submit" className="group inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 text-sm font-extrabold text-white shadow-lg shadow-brand-accent/20 transition-all hover:-translate-y-0.5 hover:bg-brand-accent-dark">Görüşme Talep Et <Check aria-hidden="true" className="size-4 transition-transform group-hover:scale-110" /></button>}
      </div>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <label className="block text-xs font-extrabold text-brand-navy">{label}{required ? <span className="ml-1 text-brand-accent">*</span> : null}{children}</label>;
}

function Select({ value, onChange, placeholder, options }: { value: string; onChange: (value: string) => void; placeholder: string; options: string[] }) {
  return <span className="relative mt-2 block"><select required value={value} onChange={(event) => onChange(event.target.value)} className="form-input appearance-none pr-10"><option value="">{placeholder}</option>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-brand-navy/45" /></span>;
}
