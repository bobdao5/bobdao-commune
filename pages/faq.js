import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What really is the problem? 🤔",
      content:
        "In today's rapidly evolving tech landscape, developers require a thriving community that can\n\n" +
        "- provide a cohesive space to learn.\n" +
        "- provide a collaborative space to build together.\n" +
        "- find work remotely.\n\n" +
        "BOBDAO Commune addresses this need by offering a virtual gathering spot where developers can connect, share knowledge, and stay updated with the latest trends.",
    },
    {
      title: "Gaps in the Current Landscape:",
      content:
        "- Limited Collaboration Opportunities\n" +
        "  - Too many applications to juggle with & too many steps to follow.\n" +
        "  - No proven platform to showcase your skills in a proof-based way.\n" +
        "- Too many forms to fill.\n" +
        "- A lot of event platforms to register.",
    },
    {
      title: "Solution Statement - Introducing The Commune by BOBDAO",
      content:
        "The platform aims at solving fundamental gaps that exist in daily dev and community initiatives:\n\n" +
        "- Recognify ids: The 1-stop provable profile id for users, create interactive proven profiles and reimagine identity.\n" +
        "- EventPro: A platform to host online/offline events seamlessly, find services for your events, and manage guests.\n" +
        "- CommuneHuddle: The platform to connect and network with others and showcase your work and skillsets.",
    },
    {
      title: "How can I join BOBDAO Commune?",
      content:
        "Joining BOBDAO Commune is simple! You can visit our website and sign up for an account. Once registered, you'll gain access to the virtual gathering spot and become part of our thriving developer community. Don't worry; it's free to join!",
    },
    {
      title: "What benefits do I get from being a part of BOBDAO Commune?",
      content:
        "As a member of BOBDAO Commune, you'll enjoy several benefits:\n\n" +
        "- Networking Opportunities: Connect with like-minded developers, entrepreneurs, and investors to collaborate on projects and share knowledge.\n" +
        "- Access to Events: Participate in various online and offline events organized by BOBDAO Commune, where you can learn from industry experts and showcase your skills.\n" +
        "- Talent Showcase: Utilize our CommuneHuddle platform to showcase your work, skills, and projects, making it easier for potential clients or employers to find you.\n" +
        "- Latest Trend Updates: Stay updated with the latest trends and technologies in the rapidly evolving tech landscape through our community discussions and curated content.",
    },
    {
      title: "Is BOBDAO Commune open to developers of all skill levels?",
      content:
        "Absolutely! BOBDAO Commune welcomes developers of all skill levels, from beginners to seasoned professionals. Whether you're just starting your coding journey or have years of experience, you'll find a supportive and inclusive community that encourages learning, collaboration, and growth.",
    },
    {
      title: "Can I find remote work opportunities through BOBDAO Commune?",
      content:
        "Yes! BOBDAO Commune aims to bridge the gap between talented developers and potential clients or employers. While we cannot guarantee job placements, the platform provides a space where clients and employers can discover skilled developers for remote work opportunities. By showcasing your proven profile and networking with others, you increase your chances of finding exciting remote projects.",
    },
    // You can add more FAQs here...
  ],
};

const styles = {
  bgColor: "transparent",
  titleTextColor: "blue",
  rowTitleColor: "white",
  rowContentColor: "grey",
  arrowColor: "white",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const faq = () => {
  return (
    <div className="px-40 py-20 pt-40 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <h1 className="text-white text-3xl font-extrabold">FAQ</h1>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default faq;
