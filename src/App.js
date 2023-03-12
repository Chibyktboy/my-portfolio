import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Ezechindu Chibuike",
    location: "Nigeria",
    tagline: "I'm a Developer",
    email: "cezechindu@gmail.com",
    availability: "Open for work",
    brand:
      "My name is Ezechindu Chibuike, and I'm a frontend web developer with one year of experience in designing and developing websites. I have a passion for creating clean, user-friendly, and responsive websites that deliver a great user experience,I have expertise in HTML, CSS ,Bootsrap ,Tailwind, JavaScript, React, Git etc and I am constantly learning new technologies and techniques to improve my work. I enjoy collaborating with my clients to understand their needs and provide them with customized solutions that align with their goals.As a frontend developer, my aim is to deliver websites that not only look great but also function seamlessly. I believe that a website should be user-friendly, fast-loading, and accessible to everyone, regardless of their abilities or devices.In addition to my technical skills, I am also an effective communicator and team player. I understand the importance of clear communication, timely delivery, and open feedback in ensuring a successful project.When I'm not coding, I enjoy swimming, playing music,football, and reading books. I believe that creativity and inspiration can come from various sources, and I try to incorporate these experiences into my work.itate to contact me if you have any questions or want to discuss a project!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
