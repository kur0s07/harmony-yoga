import { useEffect, useRef, useState } from "react";
import { useInView } from "./hooks/useInView";
import { Leaf, Users, Monitor, Phone, Mail, MapPin, Check } from "lucide-react";

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.15 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 via-stone-100 to-green-200">
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="40" fill="#d1fae5" />
          <circle cx="80" cy="80" r="50" fill="#e7e5e4" />
        </svg>
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-medium tracking-widest text-green-700 uppercase">Harmony Yoga</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <h1 className="text-4xl md:text-6xl font-normal text-stone-800 leading-tight mb-6">
            Занятия йогой<br />для новичков
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-lg md:text-xl text-stone-700 mb-10 max-w-xl mx-auto leading-relaxed">
            Начните свой путь к гармонии тела и разума. Мягкое погружение в практику йоги под руководством опытного тренера.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={450}>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Записаться
          </button>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-green-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src="https://images.pexels.com/photos/3822169/pexels-photo-3822169.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Тренер по йоге"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-stone-100 rounded-full -z-10" />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={150}>
              <h2 className="text-3xl md:text-4xl font-normal text-stone-800 mb-6">Обо мне</h2>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <p className="text-stone-700 text-lg leading-relaxed mb-4">
                Меня зовут Анна, и я сертифицированный инструктор по йоге с многолетним опытом практики и преподавания. Мой путь в йоге начался 8 лет назад, и с тех пор я помогаю людям находить баланс, силу и внутренний покой.
              </p>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                Обучалась в Индии и Европе, изучала хатха-йогу, виньяса-флоу и медитативные практики. Верю, что йога — это не только физические упражнения, но путь к осознанности и гармонии в повседневной жизни.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="text-3xl font-light text-green-700 mb-2">5</div>
                  <div className="text-sm text-stone-700">лет опыта</div>
                </div>
                <div className="bg-stone-50 rounded-xl p-6">
                  <div className="text-3xl font-light text-stone-700 mb-2">1000+</div>
                  <div className="text-sm text-stone-700">учеников</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Групповая",
      price: "1 500 ₽",
      period: "за занятие",
      features: ["До 8 человек", "Все уровни", "Йога-мат в подарок"],
      accent: "bg-stone-50 border-stone-200",
      iconBg: "bg-stone-100 text-stone-600",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Индивидуальная",
      price: "3 500 ₽",
      period: "за занятие",
      features: ["Персональная программа", "Гибкий график", "Особое внимание"],
      accent: "bg-green-50 border-green-200",
      iconBg: "bg-green-100 text-green-600",
      popular: true,
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Онлайн-курс",
      price: "4 900 ₽",
      period: "в месяц",
      features: ["4 занятия в неделю", "Записи в архиве", "Поддержка чат"],
      accent: "bg-stone-50 border-stone-200",
      iconBg: "bg-stone-100 text-stone-600",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-stone-800 mb-4">Услуги</h2>
            <p className="text-stone-700 text-lg">Выберите формат, который подходит именно вам</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 150}>
              <div
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${s.accent}`}
              >
                {s.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-medium px-4 py-1 rounded-full">
                    Популярное
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl ${s.iconBg} flex items-center justify-center mb-6`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-2">{s.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light text-stone-800">{s.price}</span>
                  <span className="text-stone-500 ml-2">{s.period}</span>
                </div>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-stone-600">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Введите имя";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits) newErrors.phone = "Введите телефон";
    else if (phoneDigits.length < 10 || phoneDigits.length > 12)
      newErrors.phone = "Телефон должен содержать от 10 до 12 цифр";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-normal text-stone-800 mb-6">Контакты</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-stone-700 text-lg leading-relaxed mb-8">
                Оставьте заявку, и я свяжусь с вами в ближайшее время, чтобы обсудить детали и ответить на все вопросы.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-stone-600">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4 text-stone-600">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <span>hello@harmony-yoga.ru</span>
                </div>
                <div className="flex items-center gap-4 text-stone-600">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <span>Москва, ул. Гармонии, 12</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            {submitted ? (
              <div className="bg-green-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-2">Спасибо!</h3>
                <p className="text-stone-600">Я получила вашу заявку и скоро свяжусь с вами.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-stone-50 rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-stone-800 outline-none transition-all focus:ring-2 focus:ring-green-300 ${
                      errors.name ? "border-red-300" : "border-stone-200"
                    }`}
                    placeholder="Ваше имя"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-stone-800 outline-none transition-all focus:ring-2 focus:ring-green-300 ${
                      errors.phone ? "border-red-300" : "border-stone-200"
                    }`}
                    placeholder="79991234567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Комментарий</label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData((prev) => ({ ...prev, comment: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-800 outline-none transition-all focus:ring-2 focus:ring-green-300 resize-none"
                    placeholder="Что бы вы хотели узнать?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
                >
                  Отправить
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-stone-800 text-stone-400">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-5 h-5 text-green-400" />
          <span className="text-stone-200 font-medium">Harmony Yoga</span>
        </div>
        <p>© 2025 Harmony Yoga. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
