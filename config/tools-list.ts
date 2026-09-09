export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: 'image' | 'pdf' | 'text' | 'developer' | 'converter' | 'calculator';
  description: string;
  isPopular?: boolean;
}

export const CATEGORIES = [
  { id: 'image', name: 'Image Tools', icon: 'Image' },
  { id: 'pdf', name: 'PDF Tools', icon: 'FileText' },
  { id: 'text', name: 'Text Tools', icon: 'Type' },
  { id: 'developer', name: 'Developer Tools', icon: 'Code' },
  { id: 'converter', name: 'Converter Tools', icon: 'RefreshCw' },
  { id: 'calculator', name: 'Calculator & Utility', icon: 'Calculator' },
];

export const TOOLS_LIST: Tool[] = [
  // Image Tools
  { id: '1', name: 'Image Compressor', slug: 'image-compressor', category: 'image', description: 'Compress JPG, PNG, and WebP images without losing quality.', isPopular: true },
  { id: '2', name: 'Image Resizer', slug: 'image-resizer', category: 'image', description: 'Resize image dimensions in pixels or percentage quickly.' },
  { id: '3', name: 'PNG to JPG', slug: 'png-to-jpg', category: 'image', description: 'Convert PNG images to JPG format instantly.' },
  { id: '4', name: 'JPG to WebP', slug: 'jpg-to-webp', category: 'image', description: 'Convert JPG images to modern WebP format for fast web loading.' },
  
  // PDF Tools
  { id: '5', name: 'PNG to PDF', slug: 'png-to-pdf', category: 'pdf', description: 'Convert PNG images into a clean, valid PDF document.', isPopular: true },
  { id: '6', name: 'JPG to PDF', slug: 'jpg-to-pdf', category: 'pdf', description: 'Convert JPG images into a high-quality PDF file.', isPopular: true },
  { id: '7', name: 'Merge PDF', slug: 'merge-pdf', category: 'pdf', description: 'Combine multiple PDF files into one single PDF.' },
  
  // Text Tools
  { id: '8', name: 'Word Counter', slug: 'word-counter', category: 'text', description: 'Count words, characters, sentences, and paragraphs in real time.', isPopular: true },
  { id: '9', name: 'Case Converter', slug: 'case-converter', category: 'text', description: 'Convert text to UPPERCASE, lowercase, Title Case, and more.' },
  { id: '10', name: 'Remove Duplicate Lines', slug: 'remove-duplicate-lines', category: 'text', description: 'Clean up your text by removing repeated duplicate lines.' },

  // Developer Tools
  { id: '11', name: 'JSON Formatter', slug: 'json-formatter', category: 'developer', description: 'Format, validate, and beautify raw JSON data.', isPopular: true },
  { id: '12', name: 'Base64 Encoder / Decoder', slug: 'base64-encoder-decoder', category: 'developer', description: 'Encode or decode text and files using Base64 format.' },
  { id: '13', name: 'UUID Generator', slug: 'uuid-generator', category: 'developer', description: 'Generate random UUIDs (v4) for software development.' },

  // Converter Tools
  { id: '14', name: 'Color Converter', slug: 'color-converter', category: 'converter', description: 'Convert colors between HEX, RGB, HSL, and CMYK formats.' },
  { id: '15', name: 'Length Converter', slug: 'length-converter', category: 'converter', description: 'Convert units between Meters, Feet, Inches, Miles, and Km.' },

  // Calculator & Utility
  { id: '16', name: 'Percentage Calculator', slug: 'percentage-calculator', category: 'calculator', description: 'Calculate percentage changes, ratios, and fractions quickly.' },
  { id: '17', name: 'Age Calculator', slug: 'age-calculator', category: 'calculator', description: 'Calculate exact age in years, months, days, and hours.' },
  { id: '18', name: 'Password Generator', slug: 'password-generator', category: 'calculator', description: 'Generate strong, customizable, and secure passwords.' }
];
