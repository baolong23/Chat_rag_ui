// 📁 features/chat/components/UploadPanel.tsx
import { Input } from "@/components/ui/input";

interface UploadPanelProps {
  onUpload: (file: File) => void;
  file: File | null;
  isUploading: boolean;
}

export default function UploadPanel({ onUpload, file, isUploading }: UploadPanelProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div className="mb-6">
      <label className="block font-semibold mb-2 text-gray-700">Upload a file</label>
      <div className="flex items-center gap-4">
        <Input type="file" onChange={handleChange} className="cursor-pointer" />
        {file && <span className="text-sm text-gray-600">📄 {file.name}</span>}
        {isUploading && <span className="text-sm text-blue-500 animate-pulse">Uploading...</span>}
      </div>
    </div>
  );
}
