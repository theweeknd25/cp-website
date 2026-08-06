import { WifiOff } from "lucide-react";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

export function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-red-600 px-4 py-3 text-center text-sm font-medium text-white shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <WifiOff size={18} />
        <span>
          You're offline. Some features may not work until your internet
          connection is restored.
        </span>
      </div>
    </div>
  );
}