# Bitasmbl-AI-Powered-Study-Notes-Generator-c51edc-Nodar_Mebunia

## Description
Build a web application that allows students to input lectures, textbooks, or articles and automatically generate concise, structured study notes. The system uses AI summarization and keyword extraction to create easy-to-review content while maintaining readability and context.

## Tech Stack
- Material-UI
- Python
- React

## Requirements
- Allow users to input text content from lectures, articles, or textbooks
- Support exporting notes in a downloadable format (PDF or TXT)
- Provide options to edit and reorganize generated notes
- Highlight important keywords and key concepts in the generated notes
- Automatically generate summarized study notes from the input content

## Installation
Follow these steps to set up the project locally. This guide assumes a repository hosted under the provided repo owner username.

1. Clone the repository (replace with SSH if preferred):

   git clone https://github.com/MrBitasmblTester/Bitasmbl-AI-Powered-Study-Notes-Generator-c51edc-Nodar_Mebunia.git
   cd Bitasmbl-AI-Powered-Study-Notes-Generator-c51edc-Nodar_Mebunia

2. Frontend (React + Material-UI)

   - Navigate to the frontend folder (create one if not present):

     cd frontend

   - Install dependencies:

     npm install

   - Install Material-UI packages:

     npm install @mui/material @emotion/react @emotion/styled

3. Backend (Python)

   - Navigate to the backend folder (create one if not present):

     cd ../backend

   - Create and activate a virtual environment:

     # macOS / Linux
     python3 -m venv env
     source env/bin/activate

     # Windows (PowerShell)
     python -m venv env
     .\env\Scripts\Activate.ps1

   - Install Python dependencies from requirements.txt:

     pip install -r requirements.txt

   Note: Ensure a requirements.txt file exists in backend/ listing the Python packages you choose for the web API and any AI integration.

## Usage
Start and use the application following these common minimal patterns for the selected stacks.

1. Start the backend API (from the backend/ directory):

   # activate virtual environment first if not active
   # macOS / Linux
   source env/bin/activate
   # Windows (PowerShell)
   .\env\Scripts\Activate.ps1

   # Run the backend application (example entry point)
   python app.py

   The backend should expose API endpoints (see API Endpoints below) to accept input text and return generated notes and keywords.

2. Start the frontend (from the frontend/ directory):

   cd ../frontend
   npm start

   By default, the React app will typically run at http://localhost:3000. Use the UI to paste or upload lecture/article/textbook content, request summarization/keyword extraction, edit and reorganize generated notes, and export notes as PDF or TXT.

3. Exporting notes

   - Use the frontend UI's export controls to download generated notes in PDF or TXT format. Export may be implemented client-side (browser download) or via a backend export endpoint that returns the formatted file.

## Implementation Steps
1. Clone the repository into your local environment using the provided repo owner username and create frontend/ and backend/ directories if they do not already exist.
2. Initialize the React frontend in frontend/ and install dependencies. Add Material-UI to the frontend and set up a responsive layout for input and notes display.
3. Build frontend components in React:
   - Input component for pasting or uploading lecture/article/textbook content.
   - Controls to submit text for summarization and keyword extraction.
   - Notes editor/viewer that allows editing and reorganizing generated notes (drag/drop or ordering UI driven by React state).
   - Highlighting mechanism in the notes viewer to visually emphasize keywords and key concepts.
   - Export controls to download notes as PDF or TXT.
4. Prepare the Python backend in backend/:
   - Create a virtual environment and a requirements.txt file listing the Python packages you will use for the web API and any AI integration.
   - Implement a lightweight API application (in a file such as app.py) that exposes endpoints for summarization, keyword extraction, and export.
5. Implement AI summarization and keyword extraction logic in the Python backend as a dedicated module. This module should accept raw text and return:
   - A concise, structured summary formatted for study notes.
   - A set of important keywords and key concepts to highlight.
   (Integration with an AI provider or local model should be implemented according to available resources and project constraints.)
6. Implement backend endpoints (see API Endpoints below) to receive input text, invoke the summarization/keyword extraction module, and return JSON responses consumable by the React frontend.
7. Connect the frontend to the backend using fetch calls from React to the backend endpoints for summarization, keyword extraction, and exporting. Handle responses to populate the notes editor and keyword highlights.
8. Implement client-side editing and reorganization features in React so users can refine generated notes before export. Persist changes in component state and enable re-generation if needed.
9. Implement export functionality that supports PDF and TXT formats. This can be done client-side (e.g., generate a TXT blob or render HTML to PDF) or by sending the finalized notes to a backend export endpoint that returns a downloadable file.
10. Test end-to-end: paste long-form text, request summarization, verify keywords are highlighted, edit/reorganize notes, and export as PDF and TXT.

## API Endpoints (Optional)
- POST /api/summarize
  - Description: Accepts raw input text (lectures, articles, textbooks) and returns a structured summarized study notes response.
- POST /api/keywords
  - Description: Accepts raw input text and returns extracted important keywords and key concepts for highlighting.
- POST /api/export
  - Description: Accepts finalized notes and a format parameter (pdf or txt) and returns a downloadable file or file URL.