import "../../components-css/ProjectsScreenContent.css";
import project1_image from "../../assets/mint.png";
import project2_image from "../../assets/arduino.png";
import project3_image from "../../assets/mintflow.png";
import project4_image from "../../assets/HCDBMS.png";
import project5_image from "../../assets/lowlevel.png";

const projectData = [
    {
        id: 1,
        image: project1_image,
        text: "Mint-Chat is a real-time messaging application built using React, TypeScript, and Socket.IO on the frontend. It interacts with an Express backend to enable real-time communication, display conversations, and manage messages.",
    },
    {
        id: 2,
        image: project2_image,
        text: "My Arduino Project Repo showcases a collection of simple yet foundational Arduino code examples designed for learning and experimentation with embedded systems. Each code snippet highlights essential functionalities and features common in microcontroller-based projects.",
    },
    {
        id: 3,
        image: project3_image,
        text: "MintFlow-Learn is dynamic flashcard system built using the MERN stack, designed to streamline learning and memory retention. Users can seamlessly select and load cards from various decks and engage in an interactive experience by flipping individual cards to reveal answers.",
    },
    {
        id: 4,
        image: project4_image,
        text: "The Health Center Database Management System is a robust database management solution built with the MERN stack (with MySQL as the database). This system enables seamless interaction with an underlying database and ensures role-specific data access for users within the health center. Admin users have full control, including the ability to view, edit, insert, and delete records. Regular users are granted restricted access, allowing them to view only the records relevant to their specific roles.",
    },
    {
        id: 5,
        image: project5_image,
        text: "In my low-level project repo, I focus on building a deeper understanding of C programming by recreating standard functions and working with memory management, pointers, data structures, and algorithms. These projects allow me to gain hands-on experience with the inner workings of C, providing a more profound appreciation for how computer systems operate at a low level. The repository showcases my work in this area, highlighting functions I've reimplemented from scratch, including those dealing with memory allocation, string manipulation, and more.",
    },
];

function ProjectsScreenContent() {
    return (
        <div id="projects-screen-content">
            <div id="projects-header-text">
                <h1>Projects</h1>
            </div>

            <div id="projects-content">
                {projectData.map((project) => (
                    <div key={project.id} className="project-content">
                        {project.id % 2 === 0 ? (
                            <>
                                <div className="project-text">
                                    {project.text}
                                </div>
                                <div className="project-image rotate-minus-5">
                                    <img
                                        src={project.image}
                                        alt={`Project ${project.id}`}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="project-image rotate-5">
                                    <img
                                        src={project.image}
                                        alt={`Project ${project.id}`}
                                    />
                                </div>
                                <div className="project-text">
                                    {project.text}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsScreenContent;
