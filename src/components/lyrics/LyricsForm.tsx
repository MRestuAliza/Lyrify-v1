import React from "react";
import Image from "next/image";
import { CollorSelector, CustomButton } from "../ui/Button"; // Pastikan path import ini benar
import { InputFields, ErrorType } from "@/types/lyrics";
import {FaSearch } from "react-icons/fa";

interface LyricsFormProps {
  inputFields: InputFields;
  error: ErrorType;
  coverInputType: 'link' | 'upload';
  uploadedImage: string;
  isLoadingImage: boolean;
  imageError: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  setCoverInputType: (type: 'link' | 'upload') => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof InputFields) => void;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearImage: () => void;
  submit: () => void;
  downloadImage: () => void;
  onOpenModal: () => void;
  changeBackground: (color: string) => void;
}

const LyricsForm: React.FC<LyricsFormProps> = ({
  inputFields,
  error,
  coverInputType,
  uploadedImage,
  isLoadingImage,
  imageError,
  fileInputRef,
  onOpenModal,
  setCoverInputType,
  handleFormChange,
  handleImageUpload,
  clearImage,
  submit,
  downloadImage,
  changeBackground,
}) => {
  return (
    <div className="max-w-xl flex-col justify-center border p-4 my-5 w-full">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Image (optional)
        </label>
          <div className="space-y-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              disabled={isLoadingImage}
            />
            <p className="text-xs text-gray-500">Supported formats: JPG, PNG, GIF, WebP (Max: 5MB)</p>
          </div>
        {isLoadingImage && (
          <div className="mt-2 text-blue-600 text-sm flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
            Processing image...
          </div>
        )}
        {imageError && <div className="mt-2 text-red-600 text-sm">{imageError}</div>}
        {(inputFields.coverSong || uploadedImage) && !isLoadingImage && (
          <div className="mt-3 relative">
            <div className="flex items-center space-x-3 p-2 border rounded-md bg-gray-50">

                <div className="relative w-12 h-12">
                <Image
                  src={uploadedImage || inputFields.coverSong} 
                  alt="Cover"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Cover image ready</p>
                <p className="text-xs text-gray-400">{uploadedImage ? "Uploaded file" : "From URL"}</p>
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
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Song Name *</label>
          <input
            type="text"
            placeholder="Enter song name"
            value={inputFields.songName}
            onChange={(e) => handleFormChange(e, 'songName')}
            className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${error.songName ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error.songName && <p className="mt-1 text-sm text-red-600">Song name is required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Artist Name *</label>
          <input
            type="text"
            placeholder="Enter artist name"
            value={inputFields.artistName}
            onChange={(e) => handleFormChange(e, 'artistName')}
            className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${error.artistName ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error.artistName && <p className="mt-1 text-sm text-red-600">Artist name is required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lyrics *</label>
            <button type="button" onClick={onOpenModal} className="flex items-center px-2 py-1 text-xs text-indigo-600 bg-indigo-100 rounded hover:bg-indigo-200" title="Find lyrics online"><FaSearch className="mr-1" /> Find Lyrics</button>
          <textarea
            placeholder="Enter song lyrics..."
            value={inputFields.lyrics}
            onChange={(e) => handleFormChange(e, 'lyrics')}
            rows={8}
            className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${error.lyrics ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error.lyrics && <p className="mt-1 text-sm text-red-600">Lyrics are required</p>}
        </div>
      </div>

      <div className="flex flex-col pb-5 space-y-4">
        <div>
          <h2 className="font-bold pb-2 text-lg">Select Background Color:</h2>
          <CollorSelector changeBackground={changeBackground} />
        </div>
        <CustomButton onClick={submit} className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" label="Generate Preview" />
        <CustomButton onClick={downloadImage} className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600" label="Download Image" />
      </div>
    </div>
  );
};

export default LyricsForm;