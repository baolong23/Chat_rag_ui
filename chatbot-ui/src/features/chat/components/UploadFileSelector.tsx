import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UploadedFileSelectorProps {
  selectedFile: string;
  onSelectFile: (filename: string) => void;
}

export default function UploadedFileSelector({ selectedFile, onSelectFile }: UploadedFileSelectorProps) {
  const [fileList, setFileList] = useState<string[]>([]);

  const fetchFiles = async () => {
    try {
      const res = await fetch(
        "https://bqmpqyj0p7.execute-api.us-east-1.amazonaws.com/dev/file"
      );
      const data = await res.json();
      console.log("Fetched files:", data);
      setFileList(data || []);
    } catch (error) {
      console.error("Failed to fetch file list:", error);
    }
  };

  return (
    <div className="mb-4 w-full mt-3">
      <Label className="text-sm">Chọn file đã upload:</Label>
      <Select value={selectedFile} onValueChange={onSelectFile} onOpenChange={(open) => {
          if (open) {
            fetchFiles(); // gọi API khi dropdown được mở
          }
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Chọn một file" />
        </SelectTrigger>
        <SelectContent>
          {fileList.map((file) => (
            <SelectItem key={file} value={file}>
              {file}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}