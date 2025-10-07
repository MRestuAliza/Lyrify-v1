# 🎵 Lyrify

**Create beautiful lyric cards for your favorite songs**

Lyrify is a modern web application that lets you create stunning visual representations of song lyrics. Perfect for sharing on social media, creating music-themed content, or simply expressing your love for music.

🌐 **Live Demo:** [https://lyrify-v1.vercel.app/](https://lyrify-v1.vercel.app/)

## ✨ Features

- **Dual Cover Image Support**: Upload images directly from your device or use URL links
- **Custom Background Colors**: Choose from a variety of background colors to match your style
- **High-Quality Export**: Download your lyric cards as high-resolution images (1280x720)
- **Real-time Preview**: See your lyric card as you create it
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Clean Typography**: Beautiful, readable fonts that make your lyrics shine
- **Image Optimization**: Built with Next.js Image optimization for better performance

## 🚀 How to Use

1. **Add Cover Art** (Optional)
   - Choose between URL link or file upload
   - Supports JPG, PNG, GIF, WebP formats (max 5MB)
   - Get instant preview of your selected image

2. **Fill in Song Details**
   - Enter the song name
   - Add the artist name
   - Paste or type the lyrics

3. **Customize Appearance**
   - Select your preferred background color
   - Preview your design in real-time

4. **Generate & Download**
   - Click "Submit" to generate your lyric card
   - Click "Download Image" to save as PNG

## 🛠️ Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/) with JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Image Processing**: html-to-image for PNG export
- **Icons**: React Icons (Apple Music icon)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏗️ Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MRestuAliza/Lyrify-v1.git
cd lyrics-share-main
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
lyrics-share-main/
├── public/             # Static assets
│   ├── favicon.ico     # Site favicon
│   ├── next.svg        # Next.js logo
│   └── vercel.svg      # Vercel logo
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Button/     # Custom buttons and color selector
│   │   │   └── Button.tsx
│   │   ├── footer/     # Footer component
│   │   │   └── Footer.tsx
│   │   ├── form/       # Form components
│   │   │   └── Form.tsx
│   │   └── Navbar/     # Navigation component
│   │       └── Navbar.tsx
│   ├── pages/          # Next.js pages
│   │   ├── About/      # About page
│   │   │   └── about.tsx
│   │   ├── Home/       # Main application page
│   │   │   └── Home.tsx
│   │   ├── _app.tsx    # Custom App component
│   │   ├── _document.tsx # Custom Document
│   │   └── index.tsx   # Homepage entry point
│   └── styles/         # Global styles and Tailwind config
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
├── next-env.d.ts       # Next.js TypeScript declarations
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── package-lock.json   # Locked dependency versions
├── postcss.config.js   # PostCSS configuration
├── README.md           # Project documentation
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Yarn dependency lock file
```

## 🔧 Configuration Files

The project includes several important configuration files:

- **`next.config.js`**: Next.js configuration for build optimization
- **`tailwind.config.ts`**: Tailwind CSS customization and theme settings
- **`tsconfig.json`**: TypeScript compiler configuration
- **`postcss.config.js`**: PostCSS plugins configuration
- **`.eslintrc.json`**: Code linting rules and standards
- **`package.json`**: Project metadata and dependencies

### Environment Variables

No environment variables are required for basic functionality.

## 🤝 Contributing

Contributions are welcome! Here are some ways you can contribute:

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📖 Improve documentation

## 📋 Future Update

- [ ] Integration with Spotify/Apple Music APIs
- [ ] Multiple layout templates
- [ ] Font customization options
- [ ] Social media sharing buttons
- [ ] User accounts and saved lyrics
- [ ] Batch processing for multiple songs
- [ ] Dark/Light mode toggle
- [ ] Animation effects

## 🐛 Known Issues

- Large image files (>5MB) may cause performance issues
- Some URL images may not load due to CORS restrictions
- Export quality may vary depending on browser

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ for music lovers everywhere**

For questions or support, please open an issue on GitHub or visit our [live demo](https://lyrify-v1.vercel.app/).
