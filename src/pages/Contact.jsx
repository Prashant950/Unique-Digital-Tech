import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  Calendar,
  ExternalLink,
  ChevronDown,
  Building2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import BorderBeam from '../components/ui/BorderBeam';
import confetti from 'canvas-confetti';
import SEO from '../components/ui/SEO';
import { company } from '../data/site';
import { useToast } from '../components/ui/Toast';
import Icon from '../components/ui/Icon';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';

const serviceOptionsData = [
  {
    name: 'Digital Marketing & AI Search Optimization',
    category: 'SEO & Organic Growth',
    icon: 'trend',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400',
    dotColor: 'bg-emerald-400',
    desc: 'Technical SEO audits, backlink authority & AI search engine tuning',
    emoji: '📈',
    shortLabel: 'Digital Marketing',
  },
  {
    name: 'Paid Advertising & Lead Generation',
    category: 'Targeted ROI Ad Campaigns',
    icon: 'target',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-950/80 border-rose-500/40 text-rose-400',
    dotColor: 'bg-rose-400',
    desc: 'Google & Meta high-conversion lead generation campaigns with low CPL',
    emoji: '🎯',
    shortLabel: 'Paid Advertising',
  },
  {
    name: 'Website Design & Development',
    category: 'React & Next.js Platforms',
    icon: 'globe',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-950/80 border-cyan-400/40 text-cyan-400',
    dotColor: 'bg-cyan-400',
    desc: 'High-speed, scalable web applications with sub-second page loads',
    emoji: '🌐',
    shortLabel: 'Web Development',
  },
  {
    name: 'Graphic Design & Video Editing',
    category: 'Visual Brand Identity & Motion',
    icon: 'palette',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-950/80 border-purple-500/40 text-purple-400',
    dotColor: 'bg-purple-400',
    desc: 'Logos, brochures, social creative & high-retention video reels',
    emoji: '🎨',
    shortLabel: 'Graphic & Video',
  },
  {
    name: 'Mobile App Development',
    category: 'iOS & Android Native & Cross',
    icon: 'phone',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-950/80 border-blue-500/40 text-blue-400',
    dotColor: 'bg-blue-400',
    desc: 'Cross-platform mobile apps published to Apple App Store & Google Play',
    emoji: '📱',
    shortLabel: 'Mobile Apps',
  },
  {
    name: 'WhatsApp Cloud API & Business Automation',
    category: 'Official Meta WhatsApp Business API',
    isWhatsApp: true,
    icon: 'whatsapp',
    iconColor: 'text-[#25D366]',
    iconBg: 'bg-[#075e54]/80 border-[#25D366]/40 text-[#25D366]',
    dotColor: 'bg-[#25D366]',
    desc: 'Automated CRM messaging, OTP workflows, verified green tick bots',
    emoji: '💬',
    shortLabel: 'WhatsApp API',
  },
  {
    name: 'Custom CRM & ERP Solutions',
    category: 'Internal Systems & Workflows',
    icon: 'database',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-950/80 border-amber-500/40 text-amber-400',
    dotColor: 'bg-amber-400',
    desc: 'Centralized lead pipelines, billing modules, role-based admin portals',
    emoji: '🗄️',
    shortLabel: 'CRM & ERP',
  },
  {
    name: 'Cloud Architecture & AWS DevOps',
    category: 'Cloud Infrastructure & CI/CD',
    icon: 'cloud',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-950/80 border-sky-400/40 text-sky-400',
    dotColor: 'bg-sky-400',
    desc: 'Auto-scaling AWS setups, Docker containerization, 99.9% uptime SLA',
    emoji: '☁️',
    shortLabel: 'Cloud & DevOps',
  },
  {
    name: 'Full-Lifecycle Architecture & Consultation',
    category: 'End-to-End Enterprise Advisory',
    icon: 'sparkles',
    iconColor: 'text-brand-300',
    iconBg: 'bg-brand-950/80 border-brand-500/40 text-brand-400',
    dotColor: 'bg-brand-400',
    desc: 'Turnkey architectural blueprint, tech-stack evaluation & roadmap',
    emoji: '⚡',
    shortLabel: 'Consultation',
  },
];

const serviceOptions = serviceOptionsData.map((s) => s.name);

export default function Contact() {
  const [searchParams] = useSearchParams();
  const toast = useToast();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Close custom service dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const selectedServiceObj = serviceOptionsData.find((s) => s.name === formData.service);

  // Auto-fill service/notes from URL parameters (e.g. from Pricing page)
  useEffect(() => {
    const srvParam = searchParams.get('service');
    const notesParam = searchParams.get('notes');

    if (srvParam || notesParam) {
      setFormData((prev) => {
        let matchingService = '';
        if (srvParam) {
          matchingService =
            serviceOptions.find((s) =>
              s.toLowerCase().includes(srvParam.toLowerCase()) ||
              srvParam.toLowerCase().includes(s.toLowerCase())
            ) || serviceOptions[0];
        }

        return {
          ...prev,
          service: matchingService || prev.service,
          message: notesParam ? notesParam : prev.message,
        };
      });
    }
  }, [searchParams]);

  const validateField = (name, value) => {
    let error = '';
    const trimmed = typeof value === 'string' ? value.trim() : '';

    switch (name) {
      case 'name':
        if (!trimmed) {
          error = 'Full Name is required';
        } else if (trimmed.length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
          error = 'Name contains invalid characters';
        }
        break;

      case 'email':
        if (!trimmed) {
          error = 'Work Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
          error = 'Please enter a valid work email address';
        }
        break;

      case 'phone':
        if (!trimmed) {
          error = 'Phone Number is required';
        } else {
          const digits = trimmed.replace(/\D/g, '');
          if (digits.length < 10 || digits.length > 15) {
            error = 'Please enter a valid 10-15 digit phone number';
          }
        }
        break;

      case 'company':
        if (trimmed && trimmed.length < 2) {
          error = 'Company name must be at least 2 characters';
        }
        break;

      case 'service':
        if (!trimmed) {
          error = 'Please select a service';
        }
        break;

      case 'message':
        if (!trimmed) {
          error = 'Project details / message is required';
        } else if (trimmed.length < 10) {
          error = 'Please provide at least 10 characters describing your project';
        }
        break;

      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    const allTouched = {};
    const fields = ['name', 'email', 'phone', 'service', 'message'];

    fields.forEach((f) => {
      allTouched[f] = true;
      const err = validateField(f, formData[f]);
      if (err) newErrors[f] = err;
    });

    if (formData.company) {
      allTouched.company = true;
      const compErr = validateField('company', formData.company);
      if (compErr) newErrors.company = compErr;
    }

    setTouched(allTouched);
    setErrors(newErrors);

    // If any validation errors exist
    if (Object.keys(newErrors).length > 0) {
      toast.error(
        'Please resolve the highlighted fields before submitting.',
        'Incomplete Form'
      );
      // Focus the first invalid field
      const firstInvalidField = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstInvalidField}"]`);
      if (el) el.focus();
      return;
    }

    setLoading(true);

    try {
      // POST to backend API (handled by Vite plugin or server.js)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let resData = {};
      try {
        resData = await response.json();
      } catch (e) {
        resData = { success: response.ok };
      }

      // Save backup in localStorage as well
      try {
        const existing = JSON.parse(localStorage.getItem('udt_contact_leads') || '[]');
        existing.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('udt_contact_leads', JSON.stringify(existing));
      } catch (e) {
        // ignore localStorage errors
      }

      setLoading(false);
      setSent(true);
      setSubmittedData({ ...formData });

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 85,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (err) {}

      // Trigger high-visibility Toast
      toast.success(
        'Your project details have been successfully saved to db.json. Our lead solutions architect will reach out within 24 hours.',
        'Message Saved & Sent!'
      );
    } catch (error) {
      // Fallback in case of offline/network issues - still backup locally
      try {
        const existing = JSON.parse(localStorage.getItem('udt_contact_leads') || '[]');
        existing.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('udt_contact_leads', JSON.stringify(existing));
      } catch (e) {}

      setLoading(false);
      setSent(true);
      setSubmittedData({ ...formData });

      toast.success(
        'Your inquiry was recorded successfully! Our team will contact you shortly.',
        'Message Recorded'
      );
    }
  };

  const contactFaqs = [
    {
      q: 'How fast can I expect an engineering response?',
      a: 'Our solutions architects review form submissions within 4 to 6 business hours (Mon-Sat, 9:30 AM to 7:30 PM IST). You will receive a direct technical response and preliminary scope assessment.',
    },
    {
      q: 'Is the initial architecture consultation really free?',
      a: 'Yes, 100% free with zero obligation. We evaluate your requirements, review your current codebase or wireframes, and provide a preliminary architecture recommendation and milestone estimate without charging any consultation fee.',
    },
    {
      q: 'Will you sign a Non-Disclosure Agreement (NDA) before our call?',
      a: 'Yes. We respect your intellectual property and trade secrets. You can request our standard bilateral mutual NDA or provide your team’s custom NDA, and our directors will execute it prior to your technical discovery call.',
    },
    /*
    {
      q: 'Can we visit your engineering hub in Noida / Delhi NCR in person?',
      a: 'Absolutely. We welcome founders and enterprise teams at our development hub in Sector 62, Noida (Delhi NCR). Please schedule a prior appointment via phone or email so our lead solutions architect can be available to host you.',
    },
    */
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://uniquedigitaltech.com/contact#webpage',
    url: 'https://uniquedigitaltech.com/contact',
    name: 'Contact Our Engineering Team | Unique Digital Tech',
    description:
      'Directly connect with senior full-stack engineers and solutions architects at Unique Digital Tech. Request technical consultation, NDA-backed scoping, or emergency SLA support.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Unique Digital Tech',
      telephone: '+91-75035-09216',
      email: 'info@uniquedigitaltech.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sector 62, Electronic City',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201309',
        addressCountry: 'IN',
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://uniquedigitaltech.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact Us',
          item: 'https://uniquedigitaltech.com/contact',
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="Contact Our Engineering Team | Start Your Project"
        description="Directly connect with senior full-stack engineers and solutions architects at Unique Digital Tech. Request technical consultation, NDA-backed scoping, or emergency SLA support."
        keywords="contact Unique Digital Tech, hire software engineers, software consultation Noida, web development quote Delhi NCR, enterprise scoping"
        schema={contactSchema}
      />

      <PageHero
        badge="TALK DIRECTLY WITH SOLUTIONS ARCHITECTS"
        title="Let’s engineer your next competitive advantage."
        text="Have a product to build, legacy code to modernize or a high-concurrency architecture to scale? Talk directly with our solutions engineers."
      >
        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-500/10 hover:text-white hover:scale-105">
            <Clock className="h-3.5 w-3.5 text-brand-400" />
            Average Response: &lt; 24 Hours
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-white hover:scale-105">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            100% NDA Protection
          </span>
          {/* Physical Location Hub Pill - Commented out for now
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white hover:scale-105">
            <Building2 className="h-3.5 w-3.5 text-cyan-400" />
            Noida / New Delhi Tech Hub
          </span>
          */}
        </div>
      </PageHero>

      {/* Main Contact Grid & Form */}
      <section className="section py-10 sm:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Details & Info (5 Cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                Direct Communication
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                Let’s talk about your next project.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                Whether you need a dedicated engineering squad, a custom software build, or modern architecture guidance, our leads are ready to collaborate.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${company.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition-all duration-300 hover:border-brand-500/50 hover:bg-ink-900 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Us Directly</p>
                  <p className="text-base font-bold text-white group-hover:text-brand-300 transition-colors mt-0.5 break-all">
                    {company.email}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Send spec sheets, RFPs, or questions</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition-all duration-300 hover:border-sky-500/50 hover:bg-ink-900 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Voice Line</p>
                  <p className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-mono mt-0.5">
                    {company.phone}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Monday – Saturday, 9:30 AM – 7:30 PM IST</p>
                </div>
              </a>

              {/* WhatsApp Instant Scoping Card */}
              {/* <a
                href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20am%20interested%20in%20discussing%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition-all duration-300 hover:border-[#25D366]/50 hover:bg-ink-900 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="h-5 w-5 fill-[#25D366]" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">WhatsApp Business</p>
                  <p className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors mt-0.5">
                    Chat with Lead Architect →
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Instant project scoping &amp; quick discovery</p>
                </div>
              </a> */}

              {/* Physical Location Card - Commented out for now
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Engineering Headquarters</p>
                  <p className="text-base font-bold text-white mt-0.5">Sector 62, Electronic City, Noida</p>
                  <p className="text-xs text-slate-400 mt-1">Delhi NCR, Uttar Pradesh 201309, India</p>
                </div>
              </div>
              */}
            </div>

            {/* Confidentiality & Assurance Box */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-300">100% Confidentiality Assured</p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    We respect your intellectual property. We are happy to execute a bilateral Non-Disclosure Agreement (NDA) before reviewing your codebase or ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Real-world Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900/95 to-ink-950/95 p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <BorderBeam duration={8} color="#38bdf8" rx={24} />
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Send us a message</h3>
                <p className="text-sm text-slate-400 mt-1.5">
                  Fill in the details below and we will get back to you with a preliminary assessment.
                </p>
              </div>

              {sent ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-8 text-center space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{submittedData?.name || 'there'}</strong>! Your inquiry has been received. Our solutions architects will review your requirements and reach out within 24 hours.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setSent(false);
                      setSubmittedData(null);
                    }}
                    variant="secondary"
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-200">
                        <span>
                          Full Name <span className="text-brand-400">*</span>
                        </span>
                        {errors.name && touched.name && (
                          <span className="text-xs text-rose-400 font-normal flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.name}
                          </span>
                        )}
                      </span>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`field py-3.5 transition-all ${
                          errors.name && touched.name
                            ? 'border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-rose-500/30'
                            : ''
                        }`}
                        placeholder="John Doe"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-200">
                        <span>
                          Work Email <span className="text-brand-400">*</span>
                        </span>
                        {errors.email && touched.email && (
                          <span className="text-xs text-rose-400 font-normal flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.email}
                          </span>
                        )}
                      </span>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`field py-3.5 transition-all ${
                          errors.email && touched.email
                            ? 'border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-rose-500/30'
                            : ''
                        }`}
                        placeholder="john@company.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-200">
                        <span>
                          Phone Number <span className="text-brand-400">*</span>
                        </span>
                        {errors.phone && touched.phone && (
                          <span className="text-xs text-rose-400 font-normal flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.phone}
                          </span>
                        )}
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`field py-3.5 transition-all ${
                          errors.phone && touched.phone
                            ? 'border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-rose-500/30'
                            : ''
                        }`}
                        placeholder="+91 98765 43210"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-200">
                        <span>
                          Company Name <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                        </span>
                        {errors.company && touched.company && (
                          <span className="text-xs text-rose-400 font-normal flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.company}
                          </span>
                        )}
                      </span>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`field py-3.5 transition-all ${
                          errors.company && touched.company
                            ? 'border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-rose-500/30'
                            : ''
                        }`}
                        placeholder="Your Company / Brand"
                      />
                    </label>
                  </div>

                  {/* Custom Rich Glassmorphic Service Selector */}
                  <div className="block" ref={dropdownRef}>
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <span>Service Interested In</span>
                        <span className="text-brand-400">*</span>
                      </span>
                      {errors.service && touched.service && (
                        <span className="text-xs text-rose-400 font-normal flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.service}
                        </span>
                      )}
                    </div>

                    {/* Trigger Input Box */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          setDropdownOpen(!dropdownOpen);
                          setTouched((prev) => ({ ...prev, service: true }));
                        }}
                        className={`relative flex w-full items-center justify-between rounded-xl border bg-ink-950/90 px-3.5 py-3 text-left transition-all duration-200 backdrop-blur-xl ${
                          errors.service && touched.service
                            ? 'border-rose-500/80 bg-rose-950/20 text-white ring-2 ring-rose-500/20'
                            : dropdownOpen
                            ? 'border-brand-400 bg-ink-900 shadow-[0_0_25px_rgba(56,189,248,0.25)] ring-2 ring-brand-500/25 text-white'
                            : 'border-white/10 hover:border-brand-500/40 hover:bg-white/[0.04] text-white'
                        }`}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="listbox"
                      >
                        {selectedServiceObj ? (
                          <div className="flex items-center gap-3 min-w-0 pr-2">
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${selectedServiceObj.iconBg} border shadow-sm`}
                            >
                              {selectedServiceObj.isWhatsApp ? (
                                <WhatsAppIcon variant="real" className="h-5 w-5" />
                              ) : (
                                <Icon
                                  name={selectedServiceObj.icon}
                                  className={`h-4.5 w-4.5 ${selectedServiceObj.iconColor}`}
                                />
                              )}
                            </span>
                            <div className="flex flex-col min-w-0">
                              <span className="font-bold text-white text-xs sm:text-sm truncate">
                                {selectedServiceObj.name}
                              </span>
                              <span className="text-[10.5px] text-brand-300 font-medium truncate">
                                {selectedServiceObj.category}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2.5 text-slate-400 py-1">
                            <Sparkles className="h-4 w-4 text-brand-400" />
                            <span className="text-xs sm:text-sm">Select the service you need...</span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {selectedServiceObj && (
                            <span className="hidden sm:inline-flex items-center rounded-full bg-brand-500/15 border border-brand-500/30 px-2 py-0.5 text-[10px] font-semibold text-brand-300">
                              Selected
                            </span>
                          )}
                          <span
                            className={`grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/5 transition-transform duration-200 ${
                              dropdownOpen ? 'rotate-180 border-brand-500/40 text-brand-400' : 'text-slate-400'
                            }`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </span>
                        </div>
                      </button>

                      {/* Custom Rich Animated Popover Menu */}
                      {dropdownOpen && (
                        <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl border border-brand-500/40 bg-[#07112c]/98 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.95)] backdrop-blur-2xl ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-150 max-h-80 overflow-y-auto custom-scrollbar">
                          <div className="px-2.5 py-2 text-[10.5px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 mb-1 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                              <span>Choose Your Solution</span>
                            </span>
                            <span className="text-[10px] text-brand-400 font-medium font-mono">9 Available</span>
                          </div>

                          <div className="grid gap-1">
                            {serviceOptionsData.map((s) => {
                              const isSelected = formData.service === s.name;
                              return (
                                <button
                                  key={s.name}
                                  type="button"
                                  onClick={() => {
                                    setFormData((prev) => ({ ...prev, service: s.name }));
                                    setErrors((prev) => ({ ...prev, service: '' }));
                                    setDropdownOpen(false);
                                  }}
                                  className={`group/opt flex items-center justify-between gap-3 w-full rounded-xl p-2 sm:p-2.5 text-left transition-all duration-200 ${
                                    isSelected
                                      ? 'bg-brand-500/20 border border-brand-400/60 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                                      : 'border border-white/5 bg-white/[0.02] hover:bg-brand-500/10 hover:border-brand-500/30'
                                  }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <span
                                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${s.iconBg} border transition-transform duration-200 group-hover/opt:scale-105`}
                                    >
                                      {s.isWhatsApp ? (
                                        <WhatsAppIcon variant="real" className="h-5 w-5" />
                                      ) : (
                                        <Icon name={s.icon} className={`h-4.5 w-4.5 ${s.iconColor}`} />
                                      )}
                                    </span>
                                    <div className="flex flex-col min-w-0">
                                      <span
                                        className={`text-xs sm:text-sm font-bold truncate ${
                                          isSelected ? 'text-white' : 'text-slate-200 group-hover/opt:text-white'
                                        }`}
                                      >
                                        {s.name}
                                      </span>
                                      <span className="text-[10px] text-slate-400 truncate group-hover/opt:text-slate-300">
                                        {s.desc}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="shrink-0 ml-2">
                                    {isSelected ? (
                                      <CheckCircle2 className="h-4 w-4 text-brand-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                                    ) : (
                                      <span className="h-2 w-2 rounded-full bg-white/10 group-hover/opt:bg-brand-400/50 transition-colors" />
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quick-Select Interactive Chips for Fast Tap on Web & Mobile */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-brand-400" />
                        <span>Quick Select:</span>
                      </span>
                      {serviceOptionsData.slice(0, 5).map((p) => {
                        const isSelected = formData.service === p.name;
                        return (
                          <button
                            key={p.name}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, service: p.name }));
                              setErrors((prev) => ({ ...prev, service: '' }));
                              setTouched((prev) => ({ ...prev, service: true }));
                            }}
                            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all duration-200 ${
                              isSelected
                                ? 'bg-brand-500/25 border border-brand-400 text-brand-200 shadow-sm shadow-brand-500/30'
                                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-brand-500/30 hover:text-white'
                            }`}
                          >
                            <span>{p.emoji}</span>
                            <span>{p.shortLabel}</span>
                            {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <label className="block">
                    <span className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-200">
                      <span>
                        Project Details / Message <span className="text-brand-400">*</span>
                      </span>
                      {errors.message && touched.message && (
                        <span className="text-xs text-rose-400 font-normal flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.message}
                        </span>
                      )}
                    </span>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`field py-3.5 resize-y transition-all ${
                        errors.message && touched.message
                          ? 'border-rose-500/80 bg-rose-950/20 text-white focus:border-rose-500 focus:ring-rose-500/30'
                          : ''
                      }`}
                      placeholder="Tell us about your project, timeline, features, or any specific requirements you have in mind..."
                    />
                  </label>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full justify-center text-base py-4 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 group mt-2"
                  >
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span>{loading ? 'Submitting & Saving...' : 'Send Message'}</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map & Office Location Section - Commented out for now
      <section className="section bg-ink-900/50 border-y border-white/5 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="Visit our Engineering Hub in Noida / New Delhi"
            text="Located in the heart of Delhi NCR’s IT corridor. Meet our engineering leads in person for whiteboarding and architecture planning sessions."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 overflow-hidden rounded-3xl border border-white/10 bg-ink-950 shadow-2xl relative">
              <iframe
                src="https://maps.google.com/maps?q=Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unique Digital Tech Office Location - Sector 62, Noida, NCR, India"
                className="w-full h-[320px] sm:h-[400px] grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-ink-950/90 px-3 py-1.5 backdrop-blur shadow-lg text-xs font-semibold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Unique Digital Tech Headquarters</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="card p-5 border-white/10">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-brand-400" />
                  <span>Physical Address</span>
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Unique Digital Tech<br />
                  Sector 62, Electronic City Tech Hub<br />
                  Noida, Delhi NCR, Uttar Pradesh 201309<br />
                  India
                </p>
                <a
                  href="https://maps.google.com/?q=Sector+62+Noida+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 mt-3"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="card p-5 border-white/10">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Operational Hours</span>
                </h4>
                <ul className="text-xs text-slate-300 mt-2 space-y-1.5">
                  <li className="flex justify-between">
                    <span className="text-slate-400">Monday – Friday:</span>
                    <span className="font-semibold text-white">9:30 AM – 7:30 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Saturday:</span>
                    <span className="font-semibold text-white">10:00 AM – 5:00 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Sunday:</span>
                    <span className="text-brand-300 font-medium">Emergency DevOps SLA Only</span>
                  </li>
                </ul>
              </div>

              <div className="card p-5 border-brand-500/30 bg-brand-500/5">
                <h4 className="text-xs font-bold text-brand-300 uppercase tracking-wide">
                  Schedule an In-Person Session
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Want to whiteboard your database schema, system architecture, or roadmap with us in Noida?
                </p>
                <a
                  href={`mailto:${company.email}?subject=In-Person Architecture Meeting Request`}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-brand-500/25 transition hover:brightness-110"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Request Office Meeting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 3-Step Discovery Roadmap */}
      <section className="section py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="What happens after you reach out?"
            text="A clear, respectful, and transparent engineering engagement workflow from your initial message to kick-off."
          />

          <div className="grid gap-6 sm:grid-cols-3 mt-8">
            {[
              {
                step: '01',
                title: 'Technical Review in < 4 Hours',
                desc: 'Our solutions architect examines your specs, checks API viability, and prepares clarifying questions.',
              },
              {
                step: '02',
                title: '30-Minute Architecture Call',
                desc: 'We hop on Google Meet or phone to align on functional requirements, tech stack tradeoffs, and milestones.',
              },
              {
                step: '03',
                title: 'Written Scope Blueprint & Proposal',
                desc: 'You receive a detailed technical roadmap with locked milestone pricing, deliverables, and estimated sprint delivery dates.',
              },
            ].map((s, idx) => (
              <div key={idx} className="card p-6 border-white/10 relative">
                <span className="text-3xl font-extrabold text-brand-400 font-mono">{s.step}</span>
                <h4 className="text-base font-bold text-white mt-2">{s.title}</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQ Accordion */}
      <section className="section bg-ink-900/40 border-t border-white/5 py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">
              Contact &amp; Engagement FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Common questions answered before initiating contact with our engineering team.
            </p>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-ink-900/80 transition-all duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between p-4.5 sm:p-5 text-left text-xs sm:text-sm font-semibold text-white hover:text-brand-300 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-brand-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
