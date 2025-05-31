
import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Command,
  FileCode,
  Github,
  Linkedin,
  Mail,
  Minimize2,
  TerminalIcon,
  Twitter,
  X,
  Info,
  ArrowDown,
  ArrowUp,
  CornerDownLeft,
} from "lucide-react";

export default function TerminalContent({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [initialAnimation, setInitialAnimation] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [showHelpTip, setShowHelpTip] = useState(true);
  const [typingAnimation, setTypingAnimation] = useState("");
  const [isTypingAnimationActive, setIsTypingAnimationActive] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Brand color
  const brandColor = "#08D9FE";

  // Example commands for typing animation
  const exampleCommands = ["help", "about", "skills", "projects", "contact"];

  // Available commands with descriptions for suggestions
  const commandsWithDescriptions = {
    help: {
      description: "Display available commands",
      execute: () => {
        return (
          <div className="py-2">
            <p className="font-medium" style={{ color: brandColor }}>
              Available commands:
            </p>
            <ul className="pl-4 space-y-1 mt-1">
              {Object.entries(commandsWithDescriptions).map(
                ([cmd, details]) => (
                  <li key={cmd} className="flex items-start">
                    <span className="text-yellow-300 min-w-[120px] inline-block">
                      {cmd}
                    </span>
                    <span className="text-gray-400">
                      - {details.description}
                    </span>
                  </li>
                )
              )}
            </ul>
            <p className="mt-2" style={{ color: brandColor }}>
              Tip: Use <span className="bg-gray-700 px-1 rounded">Tab</span> to
              autocomplete commands and{" "}
              <span className="bg-gray-700 px-1 rounded">↑/↓</span> to navigate
              command history
            </p>
          </div>
        );
      },
    },
    about: {
      description: "Display information about me",
      execute: () => {
        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ cat about.txt
            </div>
            <div className="mt-2 leading-relaxed">
              <p>
                Hello! I'm{" "}
                <span className="text-yellow-300 font-medium">
                  Morshed Alam
                </span>
                , a passionate Full Stack Developer with 7+ years of experience
                crafting web applications and digital experiences.
              </p>
              <p className="mt-2">
                I specialize in building scalable, performant applications using
                modern technologies and best practices. My approach combines
                technical expertise with a keen eye for user experience and
                business needs.
              </p>
              <p className="mt-2">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or hiking in the mountains
                with my camera.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-opacity-80"
                  style={{
                    backgroundColor: `${brandColor}20`,
                    color: brandColor,
                    borderColor: brandColor,
                  }}
                >
                  Problem Solver
                </Badge>
                <Badge
                  variant="outline"
                  className="border-opacity-80"
                  style={{
                    backgroundColor: `${brandColor}20`,
                    color: brandColor,
                    borderColor: brandColor,
                  }}
                >
                  UI/UX Enthusiast
                </Badge>
                <Badge
                  variant="outline"
                  className="border-opacity-80"
                  style={{
                    backgroundColor: `${brandColor}20`,
                    color: brandColor,
                    borderColor: brandColor,
                  }}
                >
                  Open Source Contributor
                </Badge>
                <Badge
                  variant="outline"
                  className="border-opacity-80"
                  style={{
                    backgroundColor: `${brandColor}20`,
                    color: brandColor,
                    borderColor: brandColor,
                  }}
                >
                  Continuous Learner
                </Badge>
              </div>
            </div>
          </div>
        );
      },
    },
    skills: {
      description: "List my technical skills",
      execute: () => {
        const frontendSkills = [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5/CSS3",
          "Tailwind CSS",
          "Redux",
          "Framer Motion",
        ];
        const backendSkills = [
          "Node.js",
          "Express",
          "Python",
          "Django",
          "GraphQL",
          "REST API Design",
          "PostgreSQL",
          "MongoDB",
        ];
        const devopsSkills = [
          "Docker",
          "CI/CD",
          "AWS",
          "Vercel",
          "Git",
          "GitHub Actions",
          "Linux",
        ];
        const otherSkills = [
          "UI/UX Design",
          "Figma",
          "Jest",
          "Testing Library",
          "Agile/Scrum",
          "Technical Writing",
        ];

        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ ls -la skills/
            </div>
            <div className="mt-2 space-y-4">
              <div>
                <div className="font-medium mb-1" style={{ color: brandColor }}>
                  Frontend:
                </div>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="transition-colors"
                      style={{
                        backgroundColor: `${brandColor}15`,
                        color: brandColor,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium mb-1" style={{ color: brandColor }}>
                  Backend:
                </div>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="transition-colors"
                      style={{
                        backgroundColor: `${brandColor}15`,
                        color: brandColor,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium mb-1" style={{ color: brandColor }}>
                  DevOps:
                </div>
                <div className="flex flex-wrap gap-2">
                  {devopsSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="transition-colors"
                      style={{
                        backgroundColor: `${brandColor}15`,
                        color: brandColor,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium mb-1" style={{ color: brandColor }}>
                  Other:
                </div>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="transition-colors"
                      style={{
                        backgroundColor: `${brandColor}15`,
                        color: brandColor,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      },
    },
    experience: {
      description: "Show my work experience",
      execute: () => {
        const experiences = [
          {
            role: "Senior Full Stack Developer",
            company: "TechNova Solutions",
            period: "2021 - Present",
            description:
              "Leading development of enterprise SaaS applications. Architected and implemented microservices infrastructure that improved scalability by 300%.",
            technologies: ["React", "Node.js", "GraphQL", "AWS"],
          },
          {
            role: "Full Stack Developer",
            company: "Digital Innovations Inc.",
            period: "2018 - 2021",
            description:
              "Developed and maintained multiple client applications. Reduced load times by 40% through performance optimizations.",
            technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
          },
          {
            role: "Frontend Developer",
            company: "WebCraft Studios",
            period: "2016 - 2018",
            description:
              "Created responsive web applications and e-commerce solutions. Implemented CI/CD pipelines that reduced deployment time by 70%.",
            technologies: ["JavaScript", "HTML/CSS", "Vue.js", "Webpack"],
          },
        ];

        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ cat experience.json | jq
            </div>
            <div className="mt-2 space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 pl-4 ml-2"
                  style={{ borderColor: "rgb(55, 65, 81)" }}
                >
                  <div className="text-yellow-300 font-medium">{exp.role}</div>
                  <div className="flex justify-between">
                    <span style={{ color: brandColor }}>{exp.company}</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-gray-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs bg-gray-800/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },
    projects: {
      description: "View my notable projects",
      execute: () => {
        const projects = [
          {
            name: "E-commerce Platform",
            description:
              "Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.",
            technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            link: "#",
          },
          {
            name: "AI Content Generator",
            description:
              "Web application that leverages AI to generate marketing content, with customization options and export capabilities.",
            technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
            link: "#",
          },
          {
            name: "Task Management System",
            description:
              "Collaborative project management tool with real-time updates, role-based permissions, and automated reporting.",
            technologies: ["Vue.js", "Express", "Socket.io", "Redis"],
            link: "#",
          },
        ];

        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ ls -la projects/ | grep -i "featured"
            </div>
            <div className="mt-2 space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-md p-3 bg-gray-800/30"
                >
                  <div className="text-yellow-300 font-medium">
                    {project.name}
                  </div>
                  <p className="mt-1 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-sm flex items-center gap-1 hover:underline"
                    style={{ color: brandColor }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <FileCode className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },
    education: {
      description: "Display my educational background",
      execute: () => {
        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ cat education.txt
            </div>
            <div className="mt-2 space-y-4">
              <div>
                <div className="text-yellow-300 font-medium">
                  Master of Science in Computer Science
                </div>
                <div style={{ color: brandColor }}>Stanford University</div>
                <div className="text-gray-400">2014 - 2016</div>
                <p className="mt-1 text-gray-300">
                  Specialized in Artificial Intelligence and Machine Learning
                </p>
              </div>

              <div>
                <div className="text-yellow-300 font-medium">
                  Bachelor of Science in Software Engineering
                </div>
                <div style={{ color: brandColor }}>
                  University of Washington
                </div>
                <div className="text-gray-400">2010 - 2014</div>
                <p className="mt-1 text-gray-300">
                  Minor in Human-Computer Interaction
                </p>
              </div>

              <div className="pt-2">
                <div className="font-medium mb-1" style={{ color: brandColor }}>
                  Certifications:
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>AWS Certified Solutions Architect</li>
                  <li>Google Cloud Professional Developer</li>
                  <li>MongoDB Certified Developer</li>
                </ul>
              </div>
            </div>
          </div>
        );
      },
    },
    contact: {
      description: "How to get in touch with me",
      execute: () => {
        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ echo $CONTACT_INFO
            </div>
            <div className="mt-2 space-y-3">
              <p>
                I'm always open to discussing new projects, opportunities, or
                partnerships.
              </p>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: brandColor }} />
                <a
                  href="mailto:morshed@example.com"
                  className="hover:underline"
                  style={{ color: brandColor }}
                >
                  morshed@example.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Command className="h-4 w-4" style={{ color: brandColor }} />
                <span>
                  Based in{" "}
                  <span style={{ color: brandColor }}>San Francisco, CA</span>{" "}
                  (Open to Remote)
                </span>
              </div>

              <div className="mt-4">
                <Button
                  size="sm"
                  style={{
                    background: `linear-gradient(to right, ${brandColor}, ${brandColor}cc)`,
                  }}
                  className="hover:opacity-90"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        );
      },
    },
    social: {
      description: "My social media profiles",
      execute: () => {
        const socials = [
          {
            name: "GitHub",
            icon: <Github className="h-4 w-4" />,
            url: "https://github.com/morshedalamdev",
            username: "morshedalamdev",
          },
          {
            name: "LinkedIn",
            icon: <Linkedin className="h-4 w-4" />,
            url: "https://linkedin.com/in/morshedalam",
            username: "morshedalam",
          },
          {
            name: "Twitter",
            icon: <Twitter className="h-4 w-4" />,
            url: "https://twitter.com/morshedalam",
            username: "@morshedalam",
          },
        ];

        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ curl -s https://api.social.com/users/morshedalam
            </div>
            <div className="mt-2 space-y-3">
              <p>Connect with me on these platforms:</p>

              <div className="space-y-2">
                {socials.map((social, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div style={{ color: brandColor }}>{social.icon}</div>
                    <a
                      href={social.url}
                      className="hover:underline"
                      style={{ color: brandColor }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}:{" "}
                      <span className="text-gray-300">{social.username}</span>
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-2 text-gray-400 text-sm">
                I usually respond within 24 hours.
              </p>
            </div>
          </div>
        );
      },
    },
    clear: {
      description: "Clear the terminal",
      execute: () => {
        setHistory([]);
        return null;
      },
    },
    "easter-egg": {
      description: "?",
      execute: () => {
        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ sudo grant access
            </div>
            <p className="mt-1">🎉 You found an easter egg! 🎉</p>
            <pre className="mt-2 text-yellow-300 text-xs sm:text-sm overflow-x-auto">
              {`
 __  __                _              _      _    _                 
|  \\/  | ___  _ __ ___| |__   ___  __| |    / \\  | | __ _ _ __ ___  
| |\\/| |/ _ \\| '__/ __| '_ \\ / _ \\/ _\` |   / _ \\ | |/ _\` | '_ \` _ \\ 
| |  | | (_) | |  \\__ \\ | | |  __/ (_| |  / ___ \\| | (_| | | | | | |
|_|  |_|\\___/|_|  |___/_| |_|\\___|\\__,_| /_/   \\_\\_|\\__,_|_| |_| |_|
                                                                    
`}
            </pre>
            <p className="mt-2">
              Thanks for exploring my terminal portfolio! Let's connect and
              build something amazing together.
            </p>
          </div>
        );
      },
    },
    all: {
      description: "Run all commands in sequence",
      execute: () => {
        // Execute all commands in sequence
        const allCommands = [
          "about",
          "skills",
          "experience",
          "projects",
          "education",
          "contact",
          "social",
        ];
        const allOutput = allCommands.map((cmd) => {
          const output =
            commandsWithDescriptions[
              cmd as keyof typeof commandsWithDescriptions
            ].execute();
          return (
            <div key={cmd} className="mb-6">
              {output}
            </div>
          );
        });

        return <div className="py-2">{allOutput}</div>;
      },
    },
    exit: {
      description: "Close the terminal",
      execute: () => {
        setTimeout(() => {
          onClose();
        }, 500);
        return (
          <div className="py-2">
            <div className="font-medium" style={{ color: brandColor }}>
              $ exit
            </div>
            <p className="mt-1">Closing terminal session...</p>
          </div>
        );
      },
    },
  };

  // Get filtered suggestions based on current input
  const getFilteredSuggestions = () => {
    if (!input) return [];

    const allCommands = Object.keys(commandsWithDescriptions);
    return allCommands.filter((cmd) => cmd.startsWith(input.toLowerCase()));
  };

  // Typing animation effect
  useEffect(() => {
    if (!input && isTypingAnimationActive) {
      let currentCommandIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      let typingSpeed = 150;
      const pauseTime = 1000;

      const typeNextCharacter = () => {
        const currentCommand = exampleCommands[currentCommandIndex];

        if (isDeleting) {
          // Deleting characters
          setTypingAnimation(currentCommand.substring(0, currentCharIndex - 1));
          currentCharIndex--;
          typingSpeed = 50; // Faster when deleting

          if (currentCharIndex === 0) {
            isDeleting = false;
            currentCommandIndex =
              (currentCommandIndex + 1) % exampleCommands.length;
            typingSpeed = pauseTime; // Pause before typing next command
          }
        } else {
          // Typing characters
          setTypingAnimation(currentCommand.substring(0, currentCharIndex + 1));
          currentCharIndex++;
          typingSpeed = 150; // Normal typing speed

          if (currentCharIndex === currentCommand.length) {
            isDeleting = true;
            typingSpeed = pauseTime; // Pause before deleting
          }
        }
      };

      const typingInterval = setTimeout(typeNextCharacter, typingSpeed);
      return () => clearTimeout(typingInterval);
    }
  }, [typingAnimation, input, isTypingAnimationActive]);

  // Stop typing animation when user starts typing
  useEffect(() => {
    if (input) {
      setIsTypingAnimationActive(false);
      setTypingAnimation("");
    } else {
      setIsTypingAnimationActive(true);
    }
  }, [input]);

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = (
      <div className="space-y-2">
        <div
          className="font-bold text-xl flex items-center gap-2"
          style={{ color: brandColor }}
        >
          <TerminalIcon className="h-5 w-5" /> Welcome to my interactive
          terminal!
        </div>
        <p>
          Type <span className="text-yellow-300">help</span> to see available
          commands.
        </p>
        <div className="text-gray-400 text-sm">
          v1.0.0 - Morshed Alam's Terminal Portfolio
        </div>
        <div
          className="mt-2 px-3 py-2 rounded-md border border-opacity-50"
          style={{
            backgroundColor: `${brandColor}10`,
            borderColor: brandColor,
          }}
        >
          <p
            className="flex items-center gap-1.5"
            style={{ color: brandColor }}
          >
            <Info className="h-4 w-4" />
            <span className="font-medium">Pro Tip:</span> Start typing to see
            command suggestions!
          </p>
        </div>
      </div>
    );

    setHistory([welcomeMessage]);

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Auto-type "help" command after a delay
    if (initialAnimation) {
      setTimeout(() => {
        const helpText = "help";
        let i = 0;

        const typeInterval = setInterval(() => {
          if (i < helpText.length) {
            setInput(helpText.substring(0, i + 1));
            i++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              handleCommand(helpText);
              setInitialAnimation(false);
            }, 500);
          }
        }, 100);
      }, 1000);
    }

    return () => clearInterval(cursorInterval);
  }, []);

  // Focus input when clicking on terminal
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    if (terminalRef.current) {
      terminalRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (terminalRef.current) {
        terminalRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  // Handle input changes and show/hide suggestions
  useEffect(() => {
    const filteredSuggestions = getFilteredSuggestions();
    setShowSuggestions(input.length > 0 && filteredSuggestions.length > 0);
    setSelectedSuggestionIndex(0);
  }, [input]);

  // Handle clicks outside suggestions to close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle command execution
  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "") return;

    // Add command to history
    const commandElement = (
      <div className="flex items-center gap-2 text-gray-200">
        <span style={{ color: brandColor }}>visitor@portfolio:~$</span>
        <span>{trimmedCmd}</span>
      </div>
    );

    // Add to command history for up/down navigation
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Process command
    let output;
    if (trimmedCmd in commandsWithDescriptions) {
      output =
        commandsWithDescriptions[
          trimmedCmd as keyof typeof commandsWithDescriptions
        ].execute();
    } else {
      output = (
        <div className="py-2">
          <p className="text-red-400">Command not found: {trimmedCmd}</p>
          <p>
            Type <span className="text-yellow-300">help</span> to see available
            commands.
          </p>
        </div>
      );
    }

    setHistory((prev) => [...prev, commandElement, output]);
    setInput("");
    setShowSuggestions(false);
    setShowHelpTip(false);

    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Execute selected suggestion
  const executeSelectedSuggestion = () => {
    const filteredSuggestions = getFilteredSuggestions();
    if (filteredSuggestions.length > 0) {
      const selectedSuggestion = filteredSuggestions[selectedSuggestionIndex];
      handleCommand(selectedSuggestion);
    }
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const filteredSuggestions = getFilteredSuggestions();

    if (e.key === "Enter") {
      if (showSuggestions && filteredSuggestions.length > 0) {
        executeSelectedSuggestion();
      } else {
        handleCommand(input);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (showSuggestions) {
        setSelectedSuggestionIndex((prev) =>
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
      } else if (
        commandHistory.length > 0 &&
        historyIndex < commandHistory.length - 1
      ) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (showSuggestions) {
        setSelectedSuggestionIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
      } else if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (filteredSuggestions.length === 1) {
        setInput(filteredSuggestions[0]);
        setShowSuggestions(false);
      } else if (filteredSuggestions.length > 1) {
        setInput(filteredSuggestions[selectedSuggestionIndex]);
        setShowSuggestions(false);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  // Clear terminal and reset state
  const clearTerminal = () => {
    setHistory([]);
    setInput("");
    setShowSuggestions(false);
    setShowHelpTip(true);
    setIsTypingAnimationActive(true);

    // Add welcome message back
    const welcomeMessage = (
      <div className="space-y-2">
        <div
          className="font-bold text-xl flex items-center gap-2"
          style={{ color: brandColor }}
        >
          <TerminalIcon className="h-5 w-5" /> Welcome to my interactive
          terminal!
        </div>
        <p>
          Type <span className="text-yellow-300">help</span> to see available
          commands.
        </p>
        <div className="text-gray-400 text-sm">
          v1.0.0 - Morshed Alam's Terminal Portfolio
        </div>
        <div
          className="mt-2 px-3 py-2 rounded-md border border-opacity-50"
          style={{
            backgroundColor: `${brandColor}10`,
            borderColor: brandColor,
          }}
        >
          <p
            className="flex items-center gap-1.5"
            style={{ color: brandColor }}
          >
            <Info className="h-4 w-4" />
            <span className="font-medium">Pro Tip:</span> Start typing to see
            command suggestions!
          </p>
        </div>
      </div>
    );

    setHistory([welcomeMessage]);
  };

  // Toggle minimize
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Get filtered suggestions
  const filteredSuggestions = getFilteredSuggestions();

  return (
    <div className="w-full h-full flex flex-col rounded-lg overflow-hidden border border-gray-700 shadow-xl bg-gray-900">
      {/* Terminal header */}
      <div className="bg-gray-900 border-b border-gray-700 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              aria-label="Close terminal"
              title="Close terminal"
            />
            <button
              onClick={toggleMinimize}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              aria-label="Minimize"
              title="Minimize"
            />
            <button
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              aria-label="Maximize"
              title="Maximize"
              onClick={() => {}}
            />
          </div>
          <div className="ml-2 flex items-center gap-1.5">
            <TerminalIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">
              morshed-alam-portfolio ~ terminal
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={toggleMinimize}
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Minimize"
            title="Minimize"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Close terminal"
            title="Close terminal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className={`
          bg-gray-950 text-gray-200 font-mono text-sm overflow-y-auto p-4 flex-1
          ${isMinimized ? "hidden" : ""}
        `}
      >
        <AnimatePresence>
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input line with inline suggestion */}
        <div className="flex items-center gap-2 relative">
          <span style={{ color: brandColor }}>visitor@portfolio:~$</span>
          <div className="flex-1 flex items-center relative">
            <div className="flex-1 relative">
              {/* Typing animation when input is empty */}
              {!input && typingAnimation && (
                <div className="absolute inset-0 text-gray-500 pointer-events-none">
                  {typingAnimation}
                </div>
              )}

              {/* Actual input field */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none border-none w-full focus:ring-0 p-0 relative z-10"
                autoFocus
                aria-label="Terminal input"
              />

              {/* Inline suggestion (shown behind the input) */}
              {input && filteredSuggestions.length > 0 && (
                <div className="absolute inset-0 text-gray-500 pointer-events-none">
                  {input}
                  <span>{filteredSuggestions[0].slice(input.length)}</span>
                </div>
              )}
            </div>

            {/* Blinking cursor */}
            <span
              className={`w-2 h-5 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
              style={{ backgroundColor: brandColor }}
            ></span>

            {/* Command suggestion help indicator */}
            {input && filteredSuggestions.length > 0 && (
              <div className="ml-2 flex items-center gap-1 text-gray-500 text-xs">
                <span>Tab</span>
                <CornerDownLeft className="h-3 w-3" />
              </div>
            )}
          </div>
        </div>

        {/* Command suggestions dropdown */}
        {showSuggestions && (
          <div
            ref={suggestionsRef}
            className="mt-1 w-full max-h-60 overflow-y-auto bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10"
          >
            <div className="p-1.5 text-xs text-gray-400 border-b border-gray-700 bg-gray-900/50 flex items-center justify-between">
              <span>Command suggestions</span>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5">
                  <ArrowUp className="h-3 w-3" />
                  <ArrowDown className="h-3 w-3" />
                  <span>navigate</span>
                </span>
                <span className="flex items-center gap-0.5">
                  <CornerDownLeft className="h-3 w-3" />
                  <span>select</span>
                </span>
              </div>
            </div>
            <div>
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={suggestion}
                  className={`
                    px-3 py-2 cursor-pointer flex items-center justify-between
                    ${
                      index === selectedSuggestionIndex
                        ? ""
                        : "hover:bg-gray-700/50"
                    }
                  `}
                  style={{
                    backgroundColor:
                      index === selectedSuggestionIndex
                        ? `${brandColor}30`
                        : "",
                  }}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-center gap-2">
                    <ChevronRight
                      className="h-3 w-3"
                      style={{ color: brandColor }}
                    />
                    <span className="text-yellow-300">{suggestion}</span>
                  </div>
                  <span className="text-gray-400 text-xs">
                    {
                      commandsWithDescriptions[
                        suggestion as keyof typeof commandsWithDescriptions
                      ].description
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help tip for new users */}
        {showHelpTip &&
          !showSuggestions &&
          input === "" &&
          !typingAnimation && (
            <div className="mt-4 px-3 py-2 bg-gray-800/30 border border-gray-700/50 rounded text-xs text-gray-400">
              <div
                className="flex items-center gap-1.5 mb-1"
                style={{ color: brandColor }}
              >
                <Info className="h-3.5 w-3.5" />
                <span>Start typing a command to see suggestions</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                <div className="flex items-center gap-1">
                  <span className="bg-gray-700 px-1 rounded text-gray-300">
                    Tab
                  </span>
                  <span>Complete suggestion</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="bg-gray-700 px-1 rounded text-gray-300">
                    Enter
                  </span>
                  <span>Execute command</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="bg-gray-700 px-1 rounded text-gray-300">
                    ↑/↓
                  </span>
                  <span>Navigate history/suggestions</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="bg-gray-700 px-1 rounded text-gray-300">
                    Esc
                  </span>
                  <span>Close suggestions</span>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
