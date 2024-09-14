import React, { useState } from "react";
import styles from "./EmployeeDetails.module.css";
import ExperienceIcon from "@/icons/ExperienceIcon";
import ProjectIcon from "@/icons/ProjectIcon";
import CustomerSatisfaction from "@/icons/CustomerSatisfaction";
import CarouselEmployee from "../CarouselEmployee/CarouselEmployee";
import PhoneIcon from "@/icons/PhoneIcon";
import EmailIcon from "@/icons/EmailIcon";
import CompanyLogo from "@/icons/CompanyLogo";
import ExportedImage from "next-image-export-optimizer";

const EmployeeDetails: React.FC = () => {
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(5);
  const [isAllProjectsVisible, setIsAllProjectsVisible] = useState(false);

  const handleToggleProjects = () => {
    if (isAllProjectsVisible) {
      setVisibleProjectsCount(5);
      setIsAllProjectsVisible(false);
    } else {
      const newCount = visibleProjectsCount + 5;
      if (newCount >= projects.length) {
        setVisibleProjectsCount(projects.length);
        setIsAllProjectsVisible(true);
      } else {
        setVisibleProjectsCount(newCount);
      }
    }
  };

  const items = [
    { description: `Lorem ipsum dolor semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.` },
    { description: `Lorem ipsum dolor  risus semper elit auctor porttitor risus semper accumsan condimentum accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.` },
    { description: `Lorem ipsum dolor  risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.` },
    { description: `Lorem ipsum dolor  risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.` },
    { description: `Lorem ipsum dolor  risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.` },
  ];

  const projects = [
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus elit auctor elit auctor porttitor risus semper accumsan condimentum porttitor risus semper accumsan condimentum semper accumsan condimentumelit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
    {
      image: "/company-svgrepo-com.svg",
      title: "Lorem ipsum dolor ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit auctor porttitor risus semper accumsan condimentum, dui convallis orci consequat velit interdum quis fusce morbi himenaeos aenean maecenas.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.mainInfo}>
          <div className={styles.description}>
            <span className={styles.employeeName}>Джон Доу</span>
            <span className={styles.position}>Директор</span>
          </div>
          <div className={styles.infoInNumbers}>
            <div className={styles.dataInNumbers}>
              <div className={styles.iconContainer1}>
                <ExperienceIcon />
              </div>
              <div className={styles.texts}>
                <span className={styles.number}>7+ </span>
                <span className={styles.text}>лет опыта</span>
              </div>
            </div>
            <div className={styles.dataInNumbers}>
              <div className={styles.iconContainer2}>
                <ProjectIcon />
              </div>
              <div className={styles.texts}>
                <span className={styles.number}>70+ </span>
                <span className={styles.text}>проектов</span>
              </div>
            </div>
            <div className={styles.dataInNumbers}>
              <div className={styles.iconContainer3}>
                <CustomerSatisfaction />
              </div>
              <div className={styles.texts}>
                <span className={styles.number}>50+ </span>
                <span className={styles.text}>клиентов</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.firstImageContainer}>
          <ExportedImage width={400} height={400} sizes="100vw"
            className={styles.firstImage} src="/employee1.jpg" alt="" />
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.sectionName}>
          <span className={styles.name}>Сертификаты</span>
        </div>
        <div className={styles.containerThird}>
          <div className={styles.secondImageContainer}>
            <ExportedImage width={0} height={0} sizes="100vw"
              className={styles.secondImage} src="/employee2.jpg" alt="" />
          </div>
          <div className={styles.certificatesContainer}>
            <CarouselEmployee items={items} />
          </div>
        </div>
      </div>
      <div className={styles.fourthSection}>
        <span className={styles.name}>Проекты</span>
        <div className={styles.containerFourth}>
          {projects.slice(0, visibleProjectsCount).map((project, index) => (
            <div
              key={index}
              className={styles.projectContainer}
            >
              <div className={styles.companyImage}>
                <CompanyLogo />
              </div>
              <div className={styles.projectDescription}>
                <div className={styles.companyName}>{project.title}</div>
                <div className={styles.projectName}>{project.description}</div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 5 && (
          <div className={styles.btnDiv}>
            <button
              onClick={handleToggleProjects}
              className={`${styles.buttonToggle} ${styles.learnMore}`}
            >
              <span className={styles.circle} aria-hidden="true">
                <span
                  className={
                    isAllProjectsVisible
                      ? `${styles.icon} ${styles.arrowClose}`
                      : `${styles.icon} ${styles.arrowOpen}`
                  }
                ></span>
              </span>
              <span className={styles.buttonText}>
                {isAllProjectsVisible ? "Скрыть" : "Показать еще"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
