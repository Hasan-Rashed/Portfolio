import Bounce from 'react-reveal/Bounce';

const Qualifications = () => {
  return (
    <div className="bg-slate-200 select-none">
        <div className="container py-10 px-5 justify-center grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
                <h1 className="text-2xl font-bold py-2 md:py-5 text-gray-600 text-start md:text-center">Educational Qualifications</h1>
            </div>

            <div className="md:col-span-2">
                <Bounce bottom>
                    <div className="py-3 md:py-5">
                        <h1 className="text-xl py-1 font-bold text-gray-600 text-start">Bachelor of Science in Computer Science & Engineering(CSE)</h1>
                        <strong className="font-bold text-gray-600">Britannia University</strong>
                        <p className="text-gray-600">Teachers of my university are so much friendly and I build my Computer Science base with the silent care of them. This place change my entire life. I find my most valuable thing of life here. I love this institution from the core of my heart. Thank you so much Britannia University.</p>
                        <p className="text-gray-600 font-semibold text-justify">Session: Feb-2019 - Feb-2023</p>
                    </div>
                </Bounce>

                <Bounce bottom>
                    <div className="py-3 md:py-5">
                        <h1 className="text-xl py-1 font-bold text-gray-600 text-start">Higher Secondary Certificate (HSC)</h1>
                        <p className="font-bold text-gray-600">Ibn Taimiya School & College, Cumilla</p>
                        <strong className="text-gray-600">Science</strong>
                        <p className="text-gray-600">Session: Apr-2016 - Apr-2018</p>
                    </div>
                </Bounce>

                <Bounce bottom>
                    <div className="py-3 md:py-5">
                        <h1 className="text-xl py-1 font-bold text-gray-600 text-start">SENIOR SECONDARY CERTIFICATE (SSC)</h1>
                        <p className="font-bold text-gray-600">Bijoypur High School, Cumilla</p>
                        <strong className="text-gray-600">Science</strong>
                        <p className="text-gray-600">Session: Jan-2010 - Mar-2016</p>
                    </div>
                </Bounce>

                
                {/* Certifications */}
                <div>

                </div>
            </div>
        </div>  
    </div>
  )
}

export default Qualifications