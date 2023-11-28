import React from "react";

interface FormInputField {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  placeholder?: string;
}

interface FormTextField {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: boolean;
  placeholder?: string;
}

type ErrorField = {
  coverSong: boolean;
  songName: boolean;
  artistName: boolean;
  lyrics: boolean;
};

interface InputFields {
  coverSong: FormInputField["value"];
  songName: FormInputField["value"];
  artistName: FormInputField["value"];
  lyrics: FormTextField["value"];
}

interface FormContainerProps {
  inputFields: InputFields;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof InputFields) => void;
  error: ErrorField;
}

const FormInput: React.FC<FormInputField> = ({ label, value, onChange, error, placeholder }: FormInputField) => {
  return (
    <div>
      <h2 className="font-semibold text-lg">{label}</h2>
      <input type="text" value={value} onChange={onChange} className={`p-2 my-2 w-full border ${error ? "border-red-500" : "border-gray-400"} rounded-md`} placeholder={placeholder} />
      {error && <p className="text-red-500 text-sm">Please input {label}</p>}
    </div>
  );
};

const FormTextarea = ({ label, value, onChange, error, placeholder }: FormTextField) => {
  return (
    <div>
      <h2 className="font-semibold text-lg">{label}</h2>
      <textarea value={value} onChange={onChange} className={`p-2 my-2 w-full border ${error ? "border-red-500" : "border-gray-400"} rounded-md`} placeholder={placeholder} name="" id="" cols={30} rows={10}></textarea>
      {error && <p className="text-red-500 text-sm">Please input {label}</p>}
    </div>
  );
};

const FormContainer = ({ inputFields, handleFormChange, error }: FormContainerProps) => {
  return (
    <form className="form-container">
      <FormInput label="Input Link Cover Art (optional)" value={inputFields.coverSong} onChange={(e) => handleFormChange(e, "coverSong")} error={error.coverSong} placeholder="Input Link Cover Song" />
      <br />
      <FormInput label="Input Song Name" value={inputFields.songName} onChange={(e) => handleFormChange(e, "songName")} error={error.songName} placeholder="Input Song Name" />
      <br />
      <FormInput label="Input Artist Name" value={inputFields.artistName} onChange={(e) => handleFormChange(e, "artistName")} error={error.artistName} placeholder="Input Artist Name" />
      <br />
      <FormTextarea label="Input Lyrics" value={inputFields.lyrics} onChange={(e) => handleFormChange(e, "lyrics")} error={error.lyrics} placeholder="Input Lyrics" />
      <br />
    </form>
  );
};

export { FormContainer };
