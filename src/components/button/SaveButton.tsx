import { Button } from "@/components/ui/button";
import { IconDeviceFloppy } from "@tabler/icons-react";
export function SaveButton() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>
        <IconDeviceFloppy />
        Button
      </Button>
    </div>
  );
}
