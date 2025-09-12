// import { Briefcase, Code, User } from "lucide-react";

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative">
//       {" "}
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           About <span className="text-primary"> Me</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold">
//               Passionate Web Developer & Tech Enthusiast
//             </h3>

//             <p className="text-muted-foreground">
//               With over 5 years of experience in web development, I specialize
//               in creating responsive, accessible, and performant web
//               applications using modern technologies.
//             </p>

//             <p className="text-muted-foreground">
//               I'm passionate about creating elegant solutions to complex
//               problems, and I'm constantly learning new technologies and
//               techniques to stay at the forefront of the ever-evolving web
//               landscape.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//               <a href="#contact" className="cosmic-button">
//                 {" "}
//                 Get In Touch
//               </a>

//               <a
//                 href=""
//                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Code className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg"> Web Development</h4>
//                   <p className="text-muted-foreground">
//                     Creating responsive websites and web applications with
//                     modern frameworks.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <User className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">UI/UX Design</h4>
//                   <p className="text-muted-foreground">
//                     Designing intuitive user interfaces and seamless user
//                     experiences.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">Project Management</h4>
//                   <p className="text-muted-foreground">
//                     Leading projects from conception to completion with agile
//                     methodologies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };





import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineering Student & Web Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a 3rd-year Software Engineering student at VIIT Pune,
              currently focusing on <strong>Web Development</strong> and{" "}
              <strong>Data Structures & Algorithms (DSA)</strong>.  
              I enjoy turning ideas into real-world projects that are simple,
              functional, and impactful.
            </p>

            <p className="text-muted-foreground">
              Apart from coding, I’m exploring{" "}
              <strong>Machine Learning, and Data Analytics</strong>  
              
              through academic projects and hackathons.  
              My goal is to build strong problem-solving and full-stack
              development skills to excel in internships and placements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
  href="/Utkarsh_Bothe_Resume.pdf"
  download="Utkarsh_Bothe_Resume.pdf"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>

            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building modern, responsive websites using HTML, CSS,
                    JavaScript, React, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Practicing DSA on LeetCode & HackerRank to strengthen logic,
                    algorithms, and placement readiness.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Hackathons</h4>
                  <p className="text-muted-foreground">
                    Actively working on full-stack projects, ML-based apps, and
                    participating in hackathons to gain real-world experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
