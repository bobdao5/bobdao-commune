import { color } from "framer-motion";
import React from "react";

const iframe = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url('/people.jpeg')`,

        // filter: "blur(8px)",
      }}
    >
      {" "}
      <div className="text-xl text-center"></div>
      <div className="mt-16">
        <div className="font_style mt-4 text-xl text-center">
          Know more about us
        </div>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/kznohOhD6VN8otXT9gFPv"
          width="100%"
          style={{ height: "70%", minHeight: "600px", color: "blueviolet" }}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default iframe;
