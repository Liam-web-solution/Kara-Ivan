function Contact() {
    return (
        <section id="contact" className="py-14">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <h3 className="text-white text-2xl font-bold text-center mb-4">Let&apos;s Connect</h3>
                <p className="text-slate-300 text-center mb-8">Have a project in mind or just want to say hello? Send a message — I&apos;m always open to discussing new ideas and opportunities.</p>


                <form onSubmit={"mailto:kharivan3@gmail.com"} className="bg-slate-800/50 p-6 rounded-lg shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input placeholder="Name" className="bg-slate-900/60 placeholder-slate-400 text-white rounded-md px-4 py-3 border border-slate-700/40 focus:outline-none focus:ring-2 focus:ring-sky-500 transition" />

                        <input placeholder="Email" className="bg-slate-900/60 placeholder-slate-400 text-white rounded-md px-4 py-3 border border-slate-700/40 focus:outline-none focus:ring-2 focus:ring-sky-500 transition" />
                   </div>

                    <textarea placeholder="Message" rows={5} className="mt-4 w-full bg-slate-900/60 placeholder-slate-400 text-white rounded-md px-4 py-3 border border-slate-700/40 focus:outline-none focus:ring-2 focus:ring-sky-500 transition" />


                    <div className="mt-4 text-right">
                        <button type="submit" className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md      shadow-md transition-transform transform hover:-translate-y-1">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
        );
}

export default Contact