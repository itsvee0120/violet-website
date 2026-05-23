import image1 from "../../assets/web1.png";
import image2 from "../../assets/barcode.png";
import image3 from "../../assets/sanrio.png";
import image4 from "../../assets/Dashboard.jpg";
import image5 from "../../assets/image5.png";

export const projects = [
  {
    title: "Vaux - CLI & Web music sharing room",
    image: image5,
    description:
      "Vaux is a real-time, Socket.io–based synchronized music platform that enables shared YouTube queue management, voting, and host-controlled playback across web and CLI clients using a centralized Node.js backend with MPV-based local audio rendering.",
    tags: ["Next.js", "Socket.io", "Node.js", "MPV"],
    link: "https://github.com/itsvee0120/Vaux",
  },
  {
    title: "Personal Website",
    image: image1,
    description: "Built with React to showcase my skills and projects.",
    tags: ["React"],
    link: "https://github.com/itsvee0120/violet-website",
  },
  {
    title: "Barcode & QR code Generator",
    image: image2,
    description:
      "A web application that allows users to generate and download barcodes and QR codes from any input data or URL.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/itsvee0120/Barcode_QRcode_Generator",
  },
  {
    title: "Social Media Platform Project",
    image: image3,
    description:
      "This is an ongoing Sanrio's theme social media platform project",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/itsvee0120/Social-Media-Platform/",
  },
  {
    title: "Houreum - Time Bank (in maintenance)",
    image: image4,
    description:
      "Houreum Time Bank App – Track, exchange, and manage time-based tasks using React Native and Supabase.",
    tags: ["Expo Go", "React Native", "Supabase"],
    link: "https://github.com/itsvee0120/time-bank",
  },
];

export default projects;
