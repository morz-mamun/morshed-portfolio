export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        const offset = 100;
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
    }
};
