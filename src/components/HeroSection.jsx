import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
{/*          
<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  <TypeAnimation
    sequence={["Hi, I'm Utkarsh Bothe"]}
    speed={50}
    cursor={true}
    repeat={0}
    className="inline-block"
  />
</h1> */}

<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  <span>Hi, I'm </span>

  <span className="text-primary">
    <TypeAnimation
      sequence={["Utkarsh"]}
      speed={50}
      cursor={false}
      repeat={0}
    />
  </span>

  <span className="text-primary ml-2">
    <TypeAnimation
      sequence={[800, "Bothe"]}
      speed={50}
      cursor={true}
      repeat={0}
    />
  </span>
</h1>


          
          
          {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Utkarsh
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Bothe
            </span>
          </h1> */}
<h2 className="text-xl md:text-2xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-3">
  Software Engineering Student | Full Stack Developer
</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Software Engineering student at VIIT Pune and Full Stack Developer specializing in React, Node.js, Express, and MongoDB. I build modern, responsive, and scalable web applications that deliver seamless user experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};