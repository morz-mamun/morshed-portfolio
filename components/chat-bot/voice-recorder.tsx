"use client";
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mic, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceRecorderProps {
  onTranscript: (finalTranscript: string) => void;
  isDisabled?: boolean;
}

const SUPPORTED_LANGUAGES = [
  { code: "en-US", name: "English (US)" },
  { code: "en-GB", name: "English (UK)" },
  { code: "bn-BD", name: "Bangla (Bangladesh)" },
  { code: "bn-IN", name: "Bangla (India)" },
  { code: "hi-IN", name: "Hindi" },
  { code: "ur-PK", name: "Urdu" },
  { code: "es-ES", name: "Spanish" },
  { code: "fr-FR", name: "French" },
  { code: "de-DE", name: "German" },
  { code: "ja-JP", name: "Japanese" },
  { code: "ko-KR", name: "Korean" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "ar-SA", name: "Arabic" },
];

export function VoiceRecorder({
  onTranscript,
  isDisabled,
}: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any | null>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      setIsSupported(!!SpeechRecognition);

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        const recognition = recognitionRef.current;

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = selectedLanguage;

        recognition.onstart = () => {
          setIsRecording(true);
        };

        recognition.onresult = (event: any) => {
          let finalTranscript = "";
          let interimTranscript = "";

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            } else {
              interimTranscript += transcript;
            }
          }

          setTranscript(finalTranscript + interimTranscript);

          if (finalTranscript) {
            onTranscript(finalTranscript);
          }
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setIsRecording(false);
        };

        recognition.onend = () => {
          setIsRecording(false);
          setTranscript("");
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [selectedLanguage, onTranscript]);

  const startRecording = () => {
    if (recognitionRef.current && !isRecording) {
      recognitionRef.current.lang = selectedLanguage;
      setTranscript("");
      recognitionRef.current.start();
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
    }
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  if (!isSupported) {
    return (
      <div className="text-xs text-muted-foreground">
        Voice recognition not supported in this browser
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[140px] h-8 text-xs">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <SelectItem key={lang.code} value={lang.code} className="text-xs">
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          type="button"
          size="sm"
          variant={isRecording ? "destructive" : "outline"}
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isDisabled}
          className={cn("h-8 w-8 p-0", isRecording && "animate-pulse")}
        >
          {isRecording ? (
            <Square className="h-3 w-3" />
          ) : (
            <Mic className="h-3 w-3" />
          )}
        </Button>
      </div>
      {transcript && (
        <div className="text-xs text-muted-foreground w-full truncate border">
          {transcript}
        </div>
      )}
    </div>
  );
}
