import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
     before:rounded-full before:border-yellow before:border-2 before:left-[-50%]
      before:top-[-50%]`;
  return (
    <div className="flex flex-col fixed gap-6 top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
        rounded-full w-3 h-3`}
        onClick={() => setSelectedPage("home")}
        href={`#home`}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        }
        rounded-full w-3 h-3`}
        onClick={() => setSelectedPage("skills")}
        href={`#skills`}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        }
        rounded-full w-3 h-3`}
        onClick={() => setSelectedPage("projects")}
        href={`#projects`}
      />
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
        }
        rounded-full w-3 h-3`}
        onClick={() => setSelectedPage("testimonials")}
        href={`#testimonials`}
      />
      <AnchorLink
        className={`${
          selectedPage === "contacts" ? selectedStyles : "bg-dark-grey"
        }
        rounded-full w-3 h-3`}
        onClick={() => setSelectedPage("contacts")}
        href={`#contacts`}
      />
    </div>
  );
};

export default DotGroup;
