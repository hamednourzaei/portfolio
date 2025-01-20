import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-cover bg-center flex flex-col bg-gradient-to-r from-gray-700 animate-fadeAndBounce via-gray-800 to-gray-800 pt-20">
            <Navbar />

            <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-16 px-6">
                <div className="group w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-900 shadow-lg transition-transform duration-500 hover:scale-110 relative m-3">
                    <img
                        src="/Images/profile_img.png"
                        alt="Profile"
                        className="w-full  h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-accent opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-dark-text text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        Hello, I'm Hamed!
                    </div>
                </div>

                <div className="text-center md:text-left font-sans flex flex-col items-center md:items-start gap-6">
                <h1 className="text-3xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 animate-bg">
                Frontend Developer | متخصص در طراحی و توسعه رابط‌های کاربری مدرن
  </h1>

  <p className="text-lg  text-right md:text-xl text-gray-200 max-w-2xl leading-relaxed justify-items-end ml-auto opacity-80">
  دنیای توسعه وب پر از فرصت‌های ناب برای خلاقیت و نوآوری است. ابزارهایی مدرن و کارآمد، امکان طراحی تجربه‌هایی چشم‌نواز و کاربرپسند را فراهم می‌کنند. 
  فناوری‌های پیشرفته با ارتقای سرعت و عملکرد، پروژه‌ها را به سطحی بالاتر می‌برند و مدیریت بهتر را به همراه می‌آورند. 
  یادگیری و استفاده از مفاهیم نوین برنامه‌نویسی، مسیری پویا و بی‌پایان برای رشد و خلق ایده‌های تازه فراهم می‌کند. 
  در این مسیر، هر ابزار و روش جدید، گامی به سوی آینده‌ای خلاقانه‌تر و مؤثرتر 
است
  




</p>




                    <a
                        href="https://github.com/hamedmkm"
                        className="mt-4 px-6 py-3 bg-clip-text font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 animate-bg backdrop-brightness-150 text-lg  rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500
                        justify-items-end m-5 ml-auto"
                    >
                        View My Work
                    </a>
                </div>
            </div>

            <div className="text-center py-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 z-50 shadow-md border-b border-gray-600 ">
                © 2025 Hamed Nourzaie All rights reserved.
            </div>
        </div>
    );
};

export default Home;
