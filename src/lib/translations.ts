// translations.ts
export const translations = {
  header: {
    preview: {
      en: "Live Preview",
      de: "Live-Vorschau",
      zh: "实时预览",
      ja: "ライブプレビュー",
      ko: "실시간 미리보기",
      ar: "المعاينة المباشرة",
    },
  },
  rating: {
    question: {
      en: "How would you rate your experience?",
      de: "Wie bewerten Sie Ihre Erfahrung?",
      zh: "您如何评价您的体验？",
      ja: "ご利用体験をどのように評価しますか？",
      ko: "경험을 어떻게 평가하시겠습니까?",
      ar: "كيف تقيم تجربتك؟",
    },
  },
  testimonialType: {
    question: {
      en: "Choose how you’d like to share your testimonial",
      de: "Wählen Sie, wie Sie Ihr Feedback teilen möchten",
      zh: "选择您想要分享推荐的方式",
      ja: "推薦をどのように共有しますか？",
      ko: "후기를 어떤 방식으로 공유하시겠습니까?",
      ar: "اختر الطريقة التي تود بها مشاركة شهادتك",
    },
    text: {
      en: "Text",
      de: "Text",
      zh: "文字",
      ja: "テキスト",
      ko: "텍스트",
      ar: "نص",
    },
    video: {
      en: "Video",
      de: "Video",
      zh: "视频",
      ja: "ビデオ",
      ko: "비디오",
      ar: "فيديو",
    },
  },
  form: {
    testimonial: {
      en: "Your testimonial *",
      de: "Ihr Erfahrungsbericht *",
      zh: "您的推荐 *",
      ja: "あなたの推薦 *",
      ko: "후기 *",
      ar: "شهادتك *",
    },
    name: {
      en: "Your Name",
      de: "Ihr Name",
      zh: "您的姓名",
      ja: "お名前",
      ko: "이름",
      ar: "اسمك",
    },
    email: {
      en: "Your Email",
      de: "Ihre E-Mail",
      zh: "您的邮箱",
      ja: "メールアドレス",
      ko: "이메일",
      ar: "بريدك الإلكتروني",
    },
    designation: {
      en: "Your Designation",
      de: "Ihre Position",
      zh: "您的职位",
      ja: "あなたの役職",
      ko: "직함",
      ar: "المسمى الوظيفي",
    },
    company: {
      en: "Your Company",
      de: "Ihr Unternehmen",
      zh: "您的公司",
      ja: "会社名",
      ko: "회사",
      ar: "شركتك",
    },
    socialLink: {
      en: "Your Social Link",
      de: "Ihr Social-Media-Link",
      zh: "您的社交链接",
      ja: "ソーシャルリンク",
      ko: "소셜 링크",
      ar: "رابطك الاجتماعي",
    },
    submit: {
      en: "Submit Testimonial",
      de: "Feedback absenden",
      zh: "提交推荐",
      ja: "推薦を送信",
      ko: "후기 제출",
      ar: "إرسال الشهادة",
    },
  },
  footer: {
    watermark: {
      en: "Powered by Testimo",
      de: "Bereitgestellt von Testimo",
      zh: "由 Testimo 提供支持",
      ja: "Testimo 提供",
      ko: "Testimo 제공",
      ar: "بدعم من Testimo",
    },
  },
};

// helper
export const getTranslation = (
  lang: keyof typeof translations.header.preview,
  path: string
): string => {
  const keys = path.split(".");
  let result: unknown = translations;
  for (const k of keys) {
    if (typeof result === "object" && result !== null && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return translations.header.preview.en;
    }
  }
  if (
    typeof result === "object" &&
    result !== null &&
    lang in (result as Record<string, unknown>)
  ) {
    return (
      (result as Record<string, string>)[lang] ||
      (result as Record<string, string>)["en"] ||
      path
    );
  }
  return translations.header.preview.en;
};
