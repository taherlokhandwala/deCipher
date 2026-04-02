# 📖 deChiper

**deChiper** is an advanced AI-powered document analysis and voice interaction platform. It allows users to upload PDF documents, extract meaningful insights, and interact with their content through AI-driven voice assistants. Whether you're a student, researcher, or professional, deChiper helps you "decipher" complex information faster and more intuitively.

---

## 🚀 Key Features

-   **📄 Smart PDF Parsing**: Automatically extracts text and generates high-quality cover images from uploaded PDF files.
-   **🎙️ AI Voice Interaction**: Integrated with **Vapi.ai** for real-time voice-based conversations about your documents.
-   **📂 Structured Organization**: Segmented data storage for efficient search and retrieval of document content.
-   **🔐 Secure Authentication**: Robust user management and authentication powered by **Clerk**.
-   **💎 Subscription Plans**: Tiered access levels (Free, Standard, Pro) with configurable limits on document uploads and AI usage.
-   **☁️ Cloud Storage**: Seamless file and image management using **Vercel Blob**.
-   **🔍 Document Search**: Fast, regex-based filtering to find specific books or documents in your library.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
-   **Authentication**: [Clerk](https://clerk.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Storage**: [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
-   **Voice AI**: [Vapi.ai](https://vapi.ai/)
-   **PDF Processing**: [PDF.js](https://mozilla.github.io/pdf.js/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

---

## 🏁 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   **Node.js** (v20 or higher recommended)
-   **npm** or **pnpm**
-   A **MongoDB** database (Local or Atlas)
-   Accounts for **Clerk**, **Vercel Blob**, and **Vapi.ai**

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/decipher.git
    cd decipher
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env.local` file in the root directory and add the following:
    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key

    # Database
    MONGODB_URI=your_mongodb_connection_string

    # Storage (Vercel Blob)
    decipher_READ_WRITE_TOKEN=your_vercel_blob_token

    # Vapi AI
    NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
    NEXT_PUBLIC_ASSISTANT_ID=your_vapi_assistant_id
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
