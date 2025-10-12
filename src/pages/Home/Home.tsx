import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import LyricsForm from '@/components/lyrics/LyricsForm';
import LyricsPreview from '@/components/lyrics/ LyricsPreview';
import LyricsSearchModal from '@/components/lyrics/LyricsSearchModal';
import { useLyricsForm } from '@/hooks/useLyricsForm';
import { LyricsData } from '@/types/lyrics';

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-white');
  const previewRef = useRef<HTMLDivElement>(null);
  const formProps = useLyricsForm();
  const {
    submittedData,
    isModalOpen,
    openModal,
    closeModal,
    setInputFields,
  } = formProps;
  const handleLyricsFound = (data: LyricsData) => {
    setInputFields(prev => ({
      ...prev,
      lyrics: data.lyrics,
      songName: data.title,
      artistName: data.artist,
      coverSong: data.artworkUrl || prev.coverSong,
    }));
    closeModal();
  };

  const downloadImage = async () => {
    if (!previewRef.current) {
      alert("Please generate a preview before downloading.");
      return;
    }
    try {
      const dataUrl = await toPng(previewRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });

      const link = document.createElement('a');
      const cleanSongName = formProps.inputFields.songName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
      link.download = `${cleanSongName || 'untitled'}-lyrics.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
      alert("Failed to download image. The cover image might be protected (CORS). Try uploading an image instead.");
    }
  };

  return (
    <>
      <Navbar />
      <LyricsSearchModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLyricsFound={handleLyricsFound}
      />
      <div className="flex flex-col items-center justify-start min-h-screen px-4">
        <h1 className="font-normal logo text-black text-4xl xl:text-5xl mt-8 mb-4">Lyrify</h1>
        <LyricsForm
          {...formProps}
          onOpenModal={openModal}
          changeBackground={setBackgroundColor}
          downloadImage={downloadImage}
        />
        
        {submittedData && (
          <LyricsPreview
            ref={previewRef}
            data={submittedData}
            backgroundColor={backgroundColor}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;