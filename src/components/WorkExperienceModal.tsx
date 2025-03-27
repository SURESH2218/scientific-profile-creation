import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WorkExperience from "./WorkExperience";

interface WorkExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkExperienceModal: React.FC<WorkExperienceModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Work Experience
          </DialogTitle>
        </DialogHeader>
        <WorkExperience />
      </DialogContent>
    </Dialog>
  );
};

export default WorkExperienceModal;
