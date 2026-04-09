# AI Resume Analyzer

A modern web application that leverages AI to provide intelligent feedback on resumes. Upload your resume and get detailed analysis on ATS compatibility, tone, content quality, structure, and skills presentation.

## 🎯 Features

- **Resume Upload**: Drag-and-drop PDF resume uploads with validation (max 20MB)
- **AI-Powered Analysis**: Comprehensive resume feedback including:
  - **ATS Score**: Optimization for Applicant Tracking Systems
  - **Tone & Style**: Evaluation of professional presentation
  - **Content Analysis**: Assessment of content quality and relevance
  - **Structure Review**: Analysis of resume formatting and organization
  - **Skills Evaluation**: Feedback on skills presentation
- **Resume Gallery**: View all uploaded resumes with their analysis scores
- **Detailed Feedback**: In-depth cards with actionable tips for improvement
- **PDF Preview**: Visual preview of uploaded resume
- **Authentication**: Secure user authentication with Puter
- **Persistent Storage**: Cloud storage integration for resumes and analysis data

## 🏗️ Tech Stack

### Frontend

- **React 19**: Modern UI library with latest features
- **React Router 7**: Full-stack routing and data fetching
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling
- **Vite**: Fast build tool and dev server

### Backend & Infrastructure

- **React Router Node**: Server-side rendering and API routes
- **Puter**: Cloud file system and authentication
- **PDF.js**: PDF rendering and processing
- **Zustand**: Lightweight state management

### Development Tools

- **pnpm**: Fast package manager
- **Vite**: Modern build tooling
- **TypeScript**: Static type checking

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── ATS.tsx         # ATS score display
│   │   ├── Details.tsx     # Resume detail view
│   │   ├── FileUploader.tsx # Drag-drop file upload
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── ResumeCard.tsx  # Resume preview card
│   │   ├── ScoreBadge.tsx  # Score badge component
│   │   ├── ScoreCircle.tsx # Circular score display
│   │   ├── ScoreGauge.tsx  # Gauge chart for scores
│   │   └── Summary.tsx     # Resume summary component
│   ├── routes/              # Route components
│   │   ├── home.tsx        # Home page with resume gallery
│   │   ├── auth.tsx        # Authentication page
│   │   ├── upload.tsx      # Resume upload and analysis
│   │   ├── resume.tsx      # Detailed resume review
│   │   └── wipe.tsx        # Data cleanup
│   ├── lib/                 # Utilities and helpers
│   │   ├── puter.ts        # Puter integration store
│   │   ├── pdf2img.ts      # PDF to image conversion
│   │   └── utils.ts        # General utilities
│   ├── root.tsx            # Root layout component
│   ├── routes.ts           # Route configuration
│   └── app.css             # Global styles
├── constants/              # Application constants and mock data
├── public/                 # Static assets
│   ├── pdf.worker.min.mjs # PDF.js worker
│   ├── icons/             # Icon assets
│   └── images/            # Image assets
├── types/                  # TypeScript type definitions
├── Dockerfile             # Docker configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── react-router.config.ts # React Router configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager
- Puter account (for cloud features)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ai-resume-analyzer
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:5173`

### Build & Deploy

**Build for production:**

```bash
pnpm build
```

**Start production server:**

```bash
pnpm start
```

**Type checking:**

```bash
pnpm typecheck
```

## 📋 Routes

| Route         | Purpose                    |
| ------------- | -------------------------- |
| `/`           | Home page - Resume gallery |
| `/auth`       | Authentication page        |
| `/upload`     | Resume upload and analysis |
| `/resume/:id` | Detailed resume review     |
| `/wipe`       | Data cleanup utility       |

## 🔄 Workflow

1. **Authentication**: User logs in via Puter authentication
2. **Upload**: User uploads a PDF resume with job details
3. **Analysis**:
   - PDF is converted to image for preview
   - AI analyzes the resume against the job description
   - Multiple scoring metrics are calculated
4. **Review**: User views detailed feedback with actionable tips
5. **Storage**: Resume data and analysis are persisted to cloud

## 🎨 Key Components

### FileUploader

Drag-and-drop component for PDF uploads with file validation and preview.

### ScoreComponents

- `ScoreBadge`: Simple badge display
- `ScoreCircle`: Circular progress indicator
- `ScoreGauge`: Gauge chart visualization

### ATS, Details, Summary

Feedback cards displaying different aspects of resume analysis with actionable tips.

## 🔐 Authentication

Authentication is handled through Puter's authentication system. The app:

- Checks authentication status on app initialization
- Redirects unauthenticated users to `/auth`
- Maintains auth state via Zustand store

## 💾 Data Storage

The application uses Puter's cloud services for:

- **File System (fs)**: Stores uploaded PDF files
- **Key-Value Store (kv)**: Stores resume metadata and analysis results
- **AI API**: Provides AI analysis and feedback generation

Data is stored with keys following the pattern: `resume:{id}`

## 🐳 Docker Support

A Dockerfile is included for containerized deployment. Build with:

```bash
docker build -t ai-resume-analyzer .
```

## 📦 Dependencies Summary

### Core Dependencies

- `react@19.2.3`: UI library
- `react-router@7.12.0`: Routing and server framework
- `typescript@5.9.2`: Type safety
- `tailwindcss@4.1.13`: Styling

### Utility Libraries

- `pdfjs-dist@5.4.530`: PDF rendering
- `react-dropzone@14.4.0`: File upload handling
- `zustand@5.0.10`: State management
- `clsx@2.1.1`: Conditional CSS classes
- `tailwind-merge@3.4.0`: Tailwind CSS merging

## 🛠️ Development

The project uses TypeScript for type safety and includes:

- Path aliases for cleaner imports (`~` for app directory)
- Vite for fast dev server and optimized builds
- React Router for full-stack features
- Tailwind CSS for rapid UI development

## 📝 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines here]

## 📧 Support

For issues or questions, please open an issue in the repository.
