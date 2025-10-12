import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import React from "react";

const Guide = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
        <div className="mb-12 text-center">
          <h1 className="font-bold text-3xl md:text-5xl pb-2">Lyrify User Guide</h1>
          <p className="text-lg text-gray-600">
            Turn your favorite song lyrics into beautiful, shareable images.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl pb-3 border-b mb-4">
              Step 1: Fill in Basic Song Information
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-2">
              The first step is to provide the details of the song you want to feature.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-base md:text-lg">
              <li>
                <strong>Song Name</strong>: Type the title of the song into the first field. This is required.
              </li>
              <li>
                <strong>Artist Name</strong>: Type the name of the singer or band in the second field. This is also required.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-bold text-2xl md:text-3xl pb-3 border-b mb-4">
              Step 2: Add the Lyrics
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              You have two easy ways to add lyrics to your project.
            </p>
            <h3 className="font-semibold text-xl mb-2">Method A: Manual Input (Type or Paste)</h3>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              If you already have the lyrics, you can type or copy-paste them directly into the large text box labeled "Lyrics". You don't need to include the entire song—just pick your favorite part.
            </p>
            <h3 className="font-semibold text-xl mb-2">Method B: Automatic with the "Find Lyrics" Feature</h3>
            <p className="text-base md:text-lg leading-relaxed">
              If you don't know the lyrics or want a faster method, click the <strong>"Find Lyrics"</strong> 🔎 button. A pop-up will appear where you can search for the song. If found, click <strong>"Copy & Use Lyrics"</strong> to automatically fill everything in.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl md:text-3xl pb-3 border-b mb-4">
              Step 3: Add an Album Cover (Optional)
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-2">
              An album cover will make your image look more professional. The best and most reliable method is to <strong>Upload a File</strong> directly from your device (JPG, PNG, GIF, WebP, Max 5MB).
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl md:text-3xl pb-3 border-b mb-4">
              Step 4: Customize the Appearance
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Now it's time to give your image a personal touch. Below the form, find the <strong>"Select Background Color"</strong> section and click on any color palette to change the preview's background.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl md:text-3xl pb-3 border-b mb-4">
              Step 5: Preview and Download
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-base md:text-lg">
              <li>
                <strong>Generate Preview</strong>: Click this button to see the final result of your image below the form.
              </li>
              <li>
                <strong>Download Image</strong>: If you're happy with the preview, click this button to save the high-quality PNG image to your device.
              </li>
            </ol>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Your lyric image is now ready to be shared on Instagram Stories, Twitter, or wherever you like!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guide;