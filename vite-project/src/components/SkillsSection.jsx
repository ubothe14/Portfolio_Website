// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 75, category: "frontend" },
//   { name: "JavaScript", level: 70, category: "frontend" },
//   { name: "React", level: 70, category: "frontend" },
//   { name: "Tailwind CSS", level: 70, category: "frontend" },


//   // Backend
//   { name: "Node.js", level: 70, category: "backend" },
//   { name: "Express", level: 70, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "SQL", level: 60, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg"> {skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div>

//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", category: "frontend" },
//   { name: "JavaScript", category: "frontend" },
//   { name: "React", category: "frontend" },
//   { name: "Tailwind CSS", category: "frontend" },

//   // Backend
//   { name: "Node.js", category: "backend" },
//   { name: "Express", category: "backend" },
//   { name: "MongoDB", category: "backend" },
//   { name: "SQL", category: "backend" },

//   // Tools
//   { name: "Git/GitHub", category: "tools" },
//   { name: "Docker", category: "tools" },
//   { name: "VS Code", category: "tools" },
//   { name: "Jupyter lab", category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );

//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-foreground hover:bg-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover text-center"
//             >
//               <h3 className="font-semibold text-lg">{skill.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



import { useState } from "react";
import { cn } from "@/lib/utils";

// Updated Skills List
const skills = [
  // Languages
  { name: " C++", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "Python", category: "languages" },
 
  

  // Frameworks & Libraries
  { name: "React", category: "frameworks" },
  { name: "Tailwind CSS", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Express", category: "frameworks" },
  { name: "Pandas", category: "frameworks" },
  { name: "NumPy", category: "frameworks" },
  { name: "Matplotlib", category: "frameworks" },
  { name: "Seaborn", category: "frameworks" },



  // Tools & Utilities
  //Power BI, MySQL, Git & GitHub, Postman, MongoDB Compass, JIRA
  { name: "Git/GitHub", category: "tools" },
  { name: "MySQL", category: "tools" },
  { name: "Power BI", category: "tools" },
  { name: "JIRA", category: "tools" },
  { name: "MongoDB Compass", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Jupyter Lab", category: "tools" },


];

const categories = ["all", "languages", "frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "frameworks"
                ? "Frameworks & Libraries"
                : category === "tools"
                ? "Tools & Utilities"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-center"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
