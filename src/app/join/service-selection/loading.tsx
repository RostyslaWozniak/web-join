import { Loader } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader className="animate-spin" size="36" />
    </div>
  );
}
