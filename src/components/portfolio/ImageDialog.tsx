
import {
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog";

interface ImageDialogProps {
  imageSrc: string | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageDialog = ({ imageSrc, isOpen, onOpenChange }: ImageDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] p-1 bg-white/95 dark:bg-portfolio-deep-blue/95 backdrop-blur-sm border-portfolio-purple/30">
        <DialogClose className="absolute right-3 top-3 z-10 rounded-full bg-white/80 dark:bg-portfolio-deep-blue/80 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-portfolio-purple/20" />
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          {imageSrc && (
            <img 
              src={imageSrc} 
              alt="Proyecto ampliado" 
              className="w-full h-full object-contain animate-fade-in"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
