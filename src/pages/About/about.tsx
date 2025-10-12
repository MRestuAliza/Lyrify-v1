import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import React from "react";

const About = () => {
  const aboutParagraph: string = `Inspired by Spotify's "Share Lyrics" feature, Lyrify is a free web tool that allows you to create artistic images from your favorite song lyrics. You can pick the part you love most, customize its look, and share it with your friends or on your social media accounts.`;
  const faqs = [
    {
      question: "How does Lyrify work?",
      answer: `The process is simple: 1. Fill in Song Details (Song Name & Artist). 2. Add Lyrics (manually or auto-search). 3. Add an Album Cover (optional). 4. Choose a Background Color. 5. Click "Generate Preview" and then "Download Image" to save the result.`,
    },
    {
      question: "How do I add an album cover?",
      answer: `There are three ways: (1) Automatically when using the "Find Lyrics" feature. (2) Upload an image file directly from your device (most recommended). (3) Manually via a link by copying the image URL from a new browser tab and pasting it into the provided field.`,
    },
    {
      question: "Do I have to type the lyrics myself?",
      answer: `Not necessarily. Use the "Find Lyrics" button to search for lyrics, song titles, and artists automatically. If found, you can instantly use them by pressing the "Copy & Use Lyrics" button.`,
    },
    {
      question: "Can I customize the visual appearance?",
      answer: `Absolutely. You can change the background color of the preview image. There are several solid and gradient color options to choose from to give it a personal touch.`,
    },
    {
      question: "What format will the image be downloaded in?",
      answer: `The image will be downloaded in PNG (.png) format to ensure high quality and sharpness, making it ideal for sharing on social media.`,
    },
    {
      question: "Why did my download fail?",
      answer: `The most common cause is an image access issue (CORS Policy), especially if you're using an image from a protected URL. The best solution is to upload the cover image directly from your device.`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
        <div className="mb-12">
          <h1 className="font-bold text-3xl md:text-5xl pb-4">About Lyrify</h1>
          <p className="text-base md:text-lg leading-relaxed">{aboutParagraph}</p>
        </div>
        
        <div>
          <h1 className="font-bold text-3xl md:text-5xl pb-4">Lyrify FAQ</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg md:text-xl mb-1">{faq.question}</h3>
                <p className="text-base md:text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;