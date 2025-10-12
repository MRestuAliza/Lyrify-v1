import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { LyricsData } from '@/types/lyrics';

interface LyricsSearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLyricsFound: (data: LyricsData) => void;
}

const LyricsSearchModal: React.FC<LyricsSearchModalProps> = ({ isOpen, onClose, onLyricsFound }) => {
    const [query, setQuery] = useState({ title: "", artist: "" });
    const [artworkUrl, setArtworkUrl] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    if (!isOpen) return null;

    const handleSearch = async () => {
        if (!query.title || !query.artist) {
            setError("Please enter both song title and artist.");
            return;
        }
        setIsLoading(true);
        setError("");
        setResult("");
        try {
            const title = encodeURIComponent(query.title);
            const artist = encodeURIComponent(query.artist);
            const response = await fetch(`${process.env.NEXT_PUBLIC_LYRICS_API_ENDPOINT}/lyrics?title=${title}&artist=${artist}`);
            const data = await response.json();
            console.log(data);
            

            if (!response.ok || !data.data.lyrics) {
                throw new Error(data.message || "Lyrics not found for this song.");
            }
            setResult(data.data.lyrics);
            setArtworkUrl(data.data.artworkUrl || "");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopyAndUse = () => {
        navigator.clipboard.writeText(result).then(() => {
            setIsCopied(true);
            const lyricsData: LyricsData = {
                lyrics: result,
                title: query.title,
                artist: query.artist,
                artworkUrl: artworkUrl,
            };
            setTimeout(() => {
                onLyricsFound(lyricsData);
            }, 1000);
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Find Song Lyrics</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl leading-none">&times;</button>
                </div>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter song title"
                        value={query.title}
                        onChange={(e) => setQuery({ ...query, title: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Enter artist name"
                        value={query.artist}
                        onChange={(e) => setQuery({ ...query, artist: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                        onClick={handleSearch}
                        disabled={isLoading}
                        className="w-full p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 disabled:bg-indigo-300"
                    >
                        {isLoading ? "Searching..." : "Search"}
                    </button>
                    {result &&(
                        <button
                            onClick={handleCopyAndUse}
                            className="w-full mt-4 p-2 bg-green-500 text-white rounded-md flex items-center justify-center hover:bg-green-600"
                        >
                            <FaCopy className="mr-2" /> {isCopied ? "Copied! Pasting..." : "Copy & Use Lyrics"}
                        </button>
                    )}
                </div>
                <div className="mt-4 border-t pt-4 min-h-[200px] max-h-[40vh] overflow-y-auto">
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {result ? (
                        <div>
                            <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded-md text-sm text-gray-800">{result}</pre>
                        </div>
                    ) : (
                        !isLoading && <p className="text-gray-500 text-center">Lyrics will appear here...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LyricsSearchModal;