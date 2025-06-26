import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { SiApplemusic } from "react-icons/si";
import Image from "next/image";
import { CollorSelector, CustomButton } from "../../components/Button/Button";
import { FormContainer } from "../../components/form/Form";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

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
  const [coverInputType, setCoverInputType] = useState<'link' | 'upload'>('link');
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [imageError, setImageError] = useState("");
  
  const ref = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    
    // Clear image error when user starts typing in cover link field
    if (fieldName === 'coverSong') {
      setImageError("");
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setImageError("Please select a valid image file");
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImageError("Image size should be less than 5MB");
        return;
      }

      setIsLoadingImage(true);
      setImageError("");
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        setInputFields(prev => ({
          ...prev,
          coverSong: result
        }));
        setIsLoadingImage(false);
      };
      reader.onerror = () => {
        setImageError("Failed to read image file");
        setIsLoadingImage(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageLinkLoad = (success: boolean) => {
    if (!success && inputFields.coverSong) {
      setImageError("Failed to load image from URL");
    } else {
      setImageError("");
    }
  };

  const clearImage = () => {
    setUploadedImage("");
    setInputFields(prev => ({
      ...prev,
      coverSong: ""
    }));
    setImageError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const submit = () => {
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
          
          {/* Enhanced Cover Image Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Image (optional)
            </label>
            
            {/* Toggle between link and upload */}
            <div className="flex space-x-4 mb-3">
              <button
                type="button"
                onClick={() => setCoverInputType('link')}
                className={`px-3 py-1 text-sm rounded ${
                  coverInputType === 'link' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                URL Link
              </button>
              <button
                type="button"
                onClick={() => setCoverInputType('upload')}
                className={`px-3 py-1 text-sm rounded ${
                  coverInputType === 'upload' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Upload File
              </button>
            </div>

            {coverInputType === 'link' ? (
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={uploadedImage ? "" : inputFields.coverSong}
                onChange={(e) => handleFormChange(e, 'coverSong')}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={!!uploadedImage}
              />
            ) : (
              <div className="space-y-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoadingImage}
                />
                <p className="text-xs text-gray-500">
                  Supported formats: JPG, PNG, GIF, WebP (Max: 5MB)
                </p>
              </div>
            )}

            {/* Loading state */}
            {isLoadingImage && (
              <div className="mt-2 text-blue-600 text-sm flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Processing image...
              </div>
            )}

            {/* Error state */}
            {imageError && (
              <div className="mt-2 text-red-600 text-sm">
                {imageError}
              </div>
            )}

            {/* Image preview */}
            {(inputFields.coverSong || uploadedImage) && !isLoadingImage && (
              <div className="mt-3 relative">
                <div className="flex items-center space-x-3 p-2 border rounded-md bg-gray-50">
                  <div className="relative w-12 h-12">
                    <Image
                      src={uploadedImage || inputFields.coverSong}
                      alt="Cover preview"
                      fill
                      className="object-cover rounded"
                      onLoad={() => handleImageLinkLoad(true)}
                      onError={() => handleImageLinkLoad(false)}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Cover image ready</p>
                    <p className="text-xs text-gray-400">
                      {uploadedImage ? "Uploaded file" : "From URL"}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={clearImage}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Other form fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Song Name *
              </label>
              <input
                type="text"
                placeholder="Enter song name"
                value={inputFields.songName}
                onChange={(e) => handleFormChange(e, 'songName')}
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  error.songName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {error.songName && (
                <p className="mt-1 text-sm text-red-600">Song name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Artist Name *
              </label>
              <input
                type="text"
                placeholder="Enter artist name"
                value={inputFields.artistName}
                onChange={(e) => handleFormChange(e, 'artistName')}
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  error.artistName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {error.artistName && (
                <p className="mt-1 text-sm text-red-600">Artist name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lyrics *
              </label>
              <textarea
                placeholder="Enter song lyrics..."
                value={inputFields.lyrics}
                onChange={(e) => handleFormChange(e, 'lyrics')}
                rows={8}
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${
                  error.lyrics ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {error.lyrics && (
                <p className="mt-1 text-sm text-red-600">Lyrics are required</p>
              )}
            </div>
          </div>

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
                  {submittedData.coverSong ? (
                    <div className="relative w-14 h-14">
                      <Image 
                        src={submittedData.coverSong} 
                        alt="Album cover" 
                        fill
                        className="object-cover rounded" 
                      />
                    </div>
                  ) : (
                    <SiApplemusic 
                      size={56} 
                      className={backgroundColor === "bg-white" ? "text-black" : "text-white"} 
                    />
                  )}
                  <div className="">
                    <h2 className={backgroundColor === "bg-white" ? "text-black text-lg font-medium" : "text-white text-lg font-medium"}>
                      {submittedData.songName}
                    </h2>
                    <h2 className={backgroundColor === "bg-white" ? "text-black text-sm font-normal" : "text-white text-sm font-normal"}>
                      {submittedData.artistName}
                    </h2>
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
                <h2 className={backgroundColor === "bg-white" ? "logo pt-5 text-xl text-black font-bold" : "logo pt-5 text-xl text-white font-bold"}>
                  Lyrify
                </h2>
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