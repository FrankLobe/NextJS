import Link from "next/link";
import { BsAwardFill, BsBank, BsBook, BsEnvelope, BsHouse, BsLaptop, BsPcDisplayHorizontal } from "react-icons/bs";

const Navigation = ({ PageName }) => {
  const NavLinkActive = "nav-link active";
  const NavLinkInactive = "nav-link";
  const IconClassName = "m-2";

  let CertificationClass = NavLinkInactive;
  let ContactClass = NavLinkInactive;
  let EducationClass = NavLinkInactive;
  let EmploymentClass = NavLinkInactive;
  let ExperienceClass = NavLinkInactive;
  let HomeClass = NavLinkInactive;
  let SkillClass = NavLinkInactive;

  switch (PageName) {
    case "Certification":
      CertificationClass = NavLinkActive;
      break;
    case "Contact":
      ContactClass = NavLinkActive;
      break;
    case "Education":
      EducationClass = NavLinkActive;
      break;
    case "Employment":
      EmploymentClass = NavLinkActive;
      break;
    case "Experience":
      ExperienceClass = NavLinkActive;
      break;
    case "Home":
      HomeClass = NavLinkActive;
      break;
    case "Skill":
      SkillClass = NavLinkActive;
      break;
    default:
      HomeClass = NavLinkActive;
  }

  return (
    <nav className="navbar bg-dark navbar-dark margin-top mb-4">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <nav>
          <ul className="navbar-nav">
            <li className="nav-item pr-4">
              <Link className={HomeClass} href="/">
                <BsHouse className={IconClassName} />
                Home
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className={SkillClass} href="/skill">
                <BsLaptop className={IconClassName} />
                Skill
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className={EmploymentClass} href="/employment">
                <BsBank className={IconClassName} />
                Employment
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className={ExperienceClass} href="/experience">
                <BsPcDisplayHorizontal className={IconClassName} />
                Experience
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className={CertificationClass} href="/certification">
                <BsAwardFill className={IconClassName} />
                Certification
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className={EducationClass} href="/education">
                <BsBook className={IconClassName} />
                Education
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className={ContactClass} href="/contact">
                <BsEnvelope className={IconClassName} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navigation;
