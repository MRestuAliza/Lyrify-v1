import React from 'react';
import Image from 'next/image';
import { SiApplemusic} from 'react-icons/si';
import { InputFields } from '@/types/lyrics';

interface LyricsPreviewProps {
  data: InputFields;
  backgroundColor: string;
}

const LyricsPreview = React.forwardRef<HTMLDivElement, LyricsPreviewProps>(
  ({ data, backgroundColor }, ref) => {
    const isWhiteBg = backgroundColor === 'bg-white';
    const textColor = isWhiteBg ? 'text-black' : 'text-white';

    if (!data) return null;

    return (
      <div className="w-full max-w-lg p-4 my-5">

        <div
          ref={ref}
          className={`
            w-full aspect-square flex flex-col justify-between 
            p-6 md:p-12 rounded-3xl
            ${backgroundColor} 
            ${isWhiteBg ? 'text-black' : 'text-white'}
          `}
        >
          <header className="flex items-center space-x-4">
            {data.coverSong ? (
              <div className="relative w-16 h-16 rounded-md overflow-hidden">
                <Image src={data.coverSong} alt="Album cover" fill className="object-cover" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-gray-500/30 rounded-md flex items-center justify-center">
                <SiApplemusic size={40} className={textColor} />
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold">{data.songName}</h2>
              <h2 className="text-lg opacity-80">{data.artistName}</h2>
            </div>
          </header>

          <main className="flex-grow flex items-center py-4">
            <pre
              className={`${textColor} text-base lg:text-2xl font-bold leading-tight`}
              style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}
            >
              {data.lyrics}
            </pre>
          </main>

          <footer className={`logo text-3xl lg:text-3xl font-bold ${backgroundColor === "bg-white" ? "text-black" : "text-white "}`}>
            Lyrify
          </footer>
        </div>
      </div>
    );
  }
);

LyricsPreview.displayName = 'LyricsPreview';
export default LyricsPreview;