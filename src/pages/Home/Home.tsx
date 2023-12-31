import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { SiApplemusic } from "react-icons/si";
import { CollorSelector, CustomButton } from "../../components/Button/Button";
import { FormContainer } from "../../components/form/Form";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

// interface ErrorType {
//   songName?: boolean;
//   artistName?: boolean;
//   lyrics?: boolean;
// }
type ErrorType = {
  coverSong?: boolean;
  songName?: boolean;
  artistName?: boolean;
  lyrics?: boolean;
};

interface InputFields {
  coverSong: string;
  songName: string;
  artistName: string;
  lyrics: string;
}

const Home = () => {
  const [inputFields, setInputFields] = useState<InputFields>({
    coverSong: "",
    songName: "",
    artistName: "",
    lyrics: "",
  });
  const [backgroundColor, setBackgroundColor] = useState("bg-white");
  const [submittedData, setSubmittedData] = useState<InputFields | null>(null);
  const [error, setError] = useState<ErrorType>({
    coverSong: false,
    songName: false,
    artistName: false,
    lyrics: false,
  });
  const ref = useRef<HTMLDivElement>(null);

  const validateError = (values: InputFields) => {
    let errors: ErrorType = {};
    if (!values.songName) {
      errors.songName = true;
    }
    if (!values.artistName) {
      errors.artistName = true;
    }
    if (!values.lyrics) {
      errors.lyrics = true;
    }
    return errors;
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof InputFields) => {
    const value = event.target.value;
    setInputFields((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(inputFields);
    const validationErrors = validateError(inputFields);
    setError(validationErrors);
  };

  const changeBackground = (color: string) => {
    setBackgroundColor(color);
  };

  const downloadImage = async () => {
    try {
      if (ref.current) {
        const dataUrl = await toPng(ref.current, {
          pixelRatio: 2,
          quality: 0.95,
        });

        const width = 1280;
        const height = 720;
        const cleanSongName = inputFields.songName.replace(/\s+/g, "-");

        const link = document.createElement("a");
        link.download = `${cleanSongName}-Lyrics`;
        link.href = dataUrl;
        link.style.width = `${width}px`;
        link.style.height = `${height}px`;
        link.click();
      }
    } catch (error) {
      if (!navigator.onLine) {
        alert("Failed to download lyrics. Please check your internet connection and try again.");
      } else {
        alert("Failed to download lyrics. Please look for another image.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-around">
        <h1 className="font-normal logo text-black sm:grid-cols-3 text-4xl xl:text-5xl">Lyrify</h1>
        <div className="max-w-xl flex-col justify-center border p-4 my-5">
          <FormContainer inputFields={inputFields} handleFormChange={handleFormChange} error={error} />
          <div className="flex flex-col pb-5">
            <h2 className="font-bold pb-5 text-lg">Select Background Color: </h2>
            <CollorSelector changeBackground={changeBackground} />
            <CustomButton onClick={submit} className="p-2 bg-blue-500 text-white rounded-md" label="Submit" />
            <CustomButton onClick={downloadImage} className="p-2 bg-green-500 text-white rounded-md mt-4" label="Download Image" />
          </div>
          {submittedData && inputFields.songName && inputFields.artistName && inputFields.lyrics && Object.keys(error).length === 0 && (
            <div ref={ref} className={`lyrics min-h-screen mx-auto px-9 md:px-0 flex items-center justify-center ${backgroundColor}`}>
              <div
                className={
                  backgroundColor === "bg-black"
                    ? "min-w-screen border-white border p-6 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
                    : "min-w-screen p-6 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
                }
              >
                <div className="flex items-center pb-3 space-x-3">
                  {submittedData.coverSong ? <img src={submittedData.coverSong} alt="" className="w-14" /> : <SiApplemusic size={56} className={backgroundColor === "bg-white" ? "text-black" : "text-white"} />}
                  <div className="">
                    <h2 className={backgroundColor === "bg-white" ? "text-black text-lg font-medium" : "text-white text-lg font-medium"}>{submittedData.songName}</h2>
                    <h2 className={backgroundColor === "bg-white" ? "text-black text-sm font-normal" : "text-white text-sm font-normal"}>{submittedData.artistName}</h2>
                  </div>
                </div>
                <pre
                  className={backgroundColor === "bg-white" ? "text-black font-semibold " : "text-white font-semibold"}
                  style={{
                    maxWidth: "400px",
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {submittedData.lyrics}
                </pre>
                <h2 className={backgroundColor === "bg-white" ? "logo pt-5 text-xl text-black font-bold" : "logo pt-5 text-xl text-white font-bold"}>Lyrify</h2>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
