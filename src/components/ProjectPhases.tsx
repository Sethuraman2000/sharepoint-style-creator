
import { useState } from "react";

interface ProjectPhasesProps {
  activePhase: string;
  setActivePhase: (phase: string) => void;
}

const ProjectPhases = ({ activePhase, setActivePhase }: ProjectPhasesProps) => {
  const phases = [
    { id: "flow", label: "My Project Flow / Status" },
    { id: "initiation", label: "Initiation phase" },
    { id: "planning", label: "Planning Phase" },
    { id: "execution", label: "Execution Phase" },
    { id: "closure", label: "Closure Phase" },
  ];

  const handlePhaseClick = (phaseId: string) => {
    setActivePhase(phaseId);
  };

  return (
    <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 animate-fade-in">
      {phases.map((phase) => (
        <button
          key={phase.id}
          className={`phase-tab whitespace-nowrap ${
            activePhase === phase.id ? "active" : ""
          }`}
          onClick={() => handlePhaseClick(phase.id)}
        >
          {phase.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectPhases;
