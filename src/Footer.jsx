function Footer() {
  return (
    <footer className="py-8 mt-8 border-t border-slate-700/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
        <div> &lt;&lt;© {new Date().getFullYear()} Kara Ivan. All rights reserved &gt;&gt;</div>
        <div className="flex items-center gap-4">
          <a 
            href="mailto:kharivan3@gmail.com" 
            className="hover:text-white transition text-white-950 font-bold "

          >
            E-mail
          </a>

          <a className="text-white-950 font-bold" href="https://wa.me/256726239783" target="_blank "> WhatsApp</a>

          <a className="text-white-950 font-bold" href="https://github.com/Liam-web-solution">Github</a>

        </div>
      </div>
    </footer>
  );
}
export default Footer 

