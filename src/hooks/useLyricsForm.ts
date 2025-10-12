import { useState, useRef } from "react";
import { InputFields, ErrorType } from "@/types/lyrics";

export const useLyricsForm = () => {
  const [inputFields, setInputFields] = useState<InputFields>({
    coverSong: "",
    songName: "",
    artistName: "",
    lyrics: "",
  });

  const [submittedData, setSubmittedData] = useState<InputFields | null>(null);
  const [error, setError] = useState<ErrorType>({});
  const [coverInputType, setCoverInputType] = useState<'link' | 'upload'>('link');
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [imageError, setImageError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateError = (values: InputFields): ErrorType => {
    const errors: ErrorType = {};
    if (!values.songName) errors.songName = true;
    if (!values.artistName) errors.artistName = true;
    if (!values.lyrics) errors.lyrics = true;
    return errors;
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof InputFields) => {
    const { value } = event.target;
    setInputFields((prev) => ({ ...prev, [fieldName]: value }));
    if (fieldName === 'coverSong') {
      setImageError("");
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setImageError("Please select a valid image file");
      return;
    }
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
      setInputFields(prev => ({ ...prev, coverSong: result }));
      setIsLoadingImage(false);
    };
    reader.onerror = () => {
      setImageError("Failed to read image file");
      setIsLoadingImage(false);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setUploadedImage("");
    setInputFields(prev => ({ ...prev, coverSong: "" }));
    setImageError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const submit = () => {
    const validationErrors = validateError(inputFields);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(inputFields);
    } else {
      setSubmittedData(null);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    inputFields,
    error,
    submittedData,
    coverInputType,
    uploadedImage,
    isLoadingImage,
    imageError,
    isModalOpen,
    fileInputRef,

    setInputFields,
    setCoverInputType,
    handleFormChange,
    handleImageUpload,
    clearImage,
    submit,
    openModal,
    closeModal,
  };
};