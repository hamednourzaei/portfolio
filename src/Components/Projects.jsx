import React, { useState } from "react";
import Navbar from "./Navbar";
import { ImCross } from "react-icons/im";

const Projects = () => {
  const [modalValue, setModalValue] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: " نمونه‌های آمادگی برای مصاحبه با React و Vite ",
      description:
        "پروژه Interview-Prep-Samples شامل مجموعه‌ای از نمونه‌ها و ابزارهایی است که به شما کمک می‌کند تا برای مصاحبه‌های شغلی آماده شوید. این پروژه به زبان جاوا اسکریپت و با استفاده از Vite و React ساخته شده است",
      technologies: ["React", "APSI'S", "Vite", "ESlint", "Tailwind CSS"],
      features: [
        "ثبت‌نام و ورود کاربران:",
        "کنترل دسترسی مبتنی بر نقش (RBAC):",
        "پشتیبانی از HMR برای بهبود تجربه توسعه‌دهندگان",
        "مستندات API:",
        "مدیریت خطاها:",
      ],

      github: "https://github.com/hamedmkm/Interview-Prep-Samples",
    },
    {
      title: " برنامه احراز هویت",
      description:
        "برنامه احراز هویت یک سیستم قدرتمند و ایمن برای مدیریت احراز هویت و مجوزهای کاربران است. این پروژه با استفاده از تکنولوژی‌های مدرن وب طراحی شده و از ویژگی‌هایی مانند کنترل دسترسی مبتنی بر نقش، احراز هویت توکنی امن و رابط کاربری کاربرپسند پشتیبانی می‌کند. این مخزن برای توسعه‌دهندگانی که به دنبال پیاده‌سازی یا یادگیری سیستم‌های احراز هویت مقیاس‌پذیر هستند، گزینه‌ای ایده‌آل است.",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Node.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
      features: [
        "ثبت‌نام و ورود کاربران:",
        "کنترل دسترسی مبتنی بر نقش (RBAC):",
        "احراز هویت مبتنی بر توکن:",
        "مستندات API:",
        "مدیریت خطاها:",
      ],

      github: "https://github.com/hamedmkm/authentication-app",
    },
    {
      title: "(Next.js) پروژه پیاده‌سازی کشینگ در ",
      description:
        "این پروژه به منظور پیاده‌سازی مکانیزم کشینگ در برنامه‌های Next.js توسعه یافته است. با استفاده از این پروژه، می‌توان عملکرد و سرعت بارگذاری صفحات وب را بهبود بخشید.",
      technologies: ["React", "OCR API", "Tailwind CSS", "Next.js", "SQLite"],
      features: [
        "(Next.js) پیاده‌سازی کشینگ سمت سرور برای بهبود عملکرد برنامه‌های ",
        "استفاده از Express.js به عنوان سرور بک‌اند",
        "ذخیره‌سازی داده‌ها در پایگاه‌داده SQLite",
        "ساختار پوشه‌ها و فایل‌های منظم برای توسعه آسان‌تر",
      ],

      github: "https://github.com/hamedmkm/caching-nextJS",
    },
    {
      title: "Golestan-Build-file",
      description: "این پروژه شامل فایل‌های ساخت مربوط به سیستم گلستان است.",
      technologies: ["React", "OCR API", "Tailwind CSS", "react-router"],
      features: [
        "شامل فایل‌های (index.html) و (public/) ",
        "استفاده از CSS برای استایل‌دهی صفحات",
        "سمپل وبسایت گلستان",
        "فایل بیلد شده",
      ],

      github: "https://github.com/hamedmkm/Golestan-Build-file",
    },
    {
      title: "دیجیکالا - پروژه تکمیل‌شده",
      description:
        "این پروژه یک پیاده‌سازی از رابط کاربری وب‌سایت دیجیکالا است که با استفاده از React  و  توسعه یافته است.(vite)",
      technologies: ["React", "OCR API", "Tailwind CSS", "Vite", "JavaScript"],
      features: [
        "استفاده از Vite برای راه‌اندازی سریع و بهینه پروژه",
        "پیاده‌سازی رابط کاربری مشابه وب‌سایت دیجیکالا",
        "استفاده از Tailwind CSS برای استایل‌دهی کارآمد",
        "پیکربندی ESLint برای حفظ کیفیت کد",
        "شامل فایل‌های پیکربندی مانند postcss.config.js و tailwind.config.js",
      ],

      github: "https://github.com/hamedmkm/dist",
    },
    {
      title: "فیلیمو - پروژه تکمیل‌شده",
      description:
        "این پروژه یک پیاده‌سازی از رابط کاربری وب‌سایت دیجیکالا است که با استفاده از React  و  توسعه یافته است.(vite)",
      technologies: ["React", "OCR API", "Tailwind CSS", "HTML", "CSS"],
      features: [
        "استفاده از Vite برای راه‌اندازی سریع و بهینه پروژه",
        "پیاده‌سازی رابط کاربری مشابه وب‌سایت فیلیمو",
        "استفاده از Tailwind CSS برای استایل‌دهی کارآمد",
        "پیکربندی ESLint برای حفظ کیفیت کد",
        "شامل فایل‌های پیکربندی مانند postcss.config.js و tailwind.config.js",
      ],

      github: "https://github.com/hamedmkm/filimo-completed",
    },
    {
      title: "deep-routing-in-nextjs",
      description:
        "این پروژه یک نمونه از مسیریابی عمیق در Next.js است که برای افزایش دانش شخصی ایجاد شده است.",
      technologies: ["React", "OCR API", "Tailwind CSS", "next.js", "sqllite3"],
      features: [
        "(Next.js) پیاده‌سازی مسیریابی عمیق با استفاده از ",
        "(Next.js) استفاده از پیکربندی‌های ساده برای مسیریابی در ",
        "(Next.js) ساختار ساده و تمیز برای پروژه‌های ",
      ],

      github: "https://github.com/hamedmkm/deep-routing-nextjs",
    },
    {
      title: "mutaing-data",
      description:
        "این پروژه برای ایجاد داده‌های متغیر در Next.js طراحی شده است و به شما این امکان را می‌دهد که داده‌ها را به صورت پویا و قابل تغییر در محیط Next.js مدیریت کنید.",
      technologies: ["React", "OCR API", "Tailwind CSS", "next.js", "sqllite3"],
      features: [
        "استفاده از Next.js برای مدیریت داده‌ها",
        "قابلیت تغییر داده‌ها به صورت پویا",
        "پیکربندی ساده برای شروع پروژه",
        "ساختار سازمان‌دهی شده برای توسعه‌ دهندگان",
      ],

      github: "https://github.com/hamedmkm/create-mutaing-data",
    },
    {
      title: "پورتفولیوی رزرو بلیط",
      description:
        "پروژه‌  برای رزرو بلیط ساخته شده با ری اکت   این پروژه شامل عملکردهای اصلی برای یک پلتفرم رزرو بلیط است.",
      technologies: ["React", "OCR API", "Tailwind CSS", "HTML", "CSS"],
      features: [
        "(Vite) توسعه سریع با ",
        "(Tailwind CSS) استایل‌دهی با ",
        "عملکرد پایه‌ای رزرو بلیط",
        "تنظیمات (ESLint) برای کیفیت کد",
      ],

      github: "https://github.com/hamedmkm/ticket-booking-portfolio",
    },
    {
      title: " (Crypto-list) فهرست ارزهای دیجیتال    ",
      description:
        "مجموعه‌ای گردآوری‌شده از منابع مرتبط با بلاک‌چین و ارزهای دیجیتال، شامل کدهای منبع، کیف‌پول‌ها، صرافی‌ها، مطالب آموزشی و ابزارهای مرتبط با بلاک‌چین.",
      technologies: ["React", "OCR API", "Tailwind CSS", "HTML", "CSS"],
      features: [
        "(Vite) توسعه سریع با ",
        "(Tailwind CSS) استایل‌دهی با ",
        "  reactjs: برای ذخیره و مدیریت داده‌های مربوط به ارزهای دیجیتال",
        "تنظیمات (ESLint) برای کیفیت کد",
      ],

      github: "https://github.com/hamedmkm/Crypto-list",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-10 px-5 py-20">
        <h1 className="w-full p-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 animate-bg text-center border-b">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl justify-center items-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer border-2 border-gray-200 bg-gray-800 shadow-lg w-full h-[250px] sm:h-[300px] rounded-xl flex flex-col justify-between items-center p-6 group animate-fadeAndBounce"
            >
              <div className="w-full flex flex-col justify-end items-end">
                <h1 className="text-white font-semibold text-lg ">
                  {item.title}
                </h1>
                <p className="text-[#abaaaa] text-right line-clamp-4 text-ellipsis  overflow-hidden text-lg mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="w-full flex justify-between items-center mt-6">
                <a
                  href={item.github}
                  className="p-2 bg-blue-600 text-white font-semibold rounded-lg group-hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                <button
                  className="p-2 bg-purple-600 text-white font-semibold rounded-lg group-hover:bg-purple-700 transition duration-300"
                  onClick={() => {
                    setSelectedProject(item);
                    setModalValue(true);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Details Modal */}
        {modalValue && selectedProject && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
            <div className="w-full h-[90%] max-w-4xl bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-2xl p-8 transform transition-all duration-500 scale-105">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-extrabold text-gray-800">
                  {selectedProject.title}
                </h1>
                <ImCross
                  className="cursor-pointer text-xl text-gray-600 hover:text-red-500 transition duration-300"
                  onClick={() => setModalValue(false)}
                />
              </div>

              <div className="space-y-6 max-h-[80%] overflow-y-auto">
                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold text-purple-600">
                    Description
                  </h2>
                  <p className="text-gray-700 text-lg mt-2 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="text-xl font-semibold text-blue-600">
                    Technologies
                  </h2>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold text-green-600">
                    Features
                  </h2>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* GitHub Link */}
              {selectedProject.github && (
                <div className="mt-6 text-right">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
