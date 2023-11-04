import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mb-[21.6rem] mx-auto">
        <div className=" mb-14">
          <h1 className="font-bold text-3xl md:text-5xl pb-4">About Lyrify</h1>
          <p className="text-base md:text-lg">
            Lyrify inspired from Spotify Share Lyrics, Lyrify is a tool that you can share lyrics from your favorite song and you can put which part you like and share it to your friend, or your social media account you have.{" "}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-3xl md:text-5xl pb-4">FAQ Lyrify</h1>
          <div className="py-3">
            <h3 className="font-semibold text-lg">What's Input Link Cover Art form means?</h3>
            <p className="text-base md:text-lg">
              Input Link Cover Art from is a form provided to allow users to input a link image of the cover art of a song. This feature enables users to upload cover art images with their preferences. However, it's an optional option
              because we have already prepared the default image.
            </p>
          </div>
          <div className="py-3">
            <h3 className="font-semibold text-lg">How do I insert a cover art image of the song I want?</h3>
            <p className="text-base md:text-lg">
              When you are looking for song lyrics, open the image menu, select the image you want, right click if you are using a computer until the open image in new tab menu appears. If you are using a smartphone, hold down on the image
              until the open image in new tab menu appears. and copy the image link and paste it in Lyrify
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
