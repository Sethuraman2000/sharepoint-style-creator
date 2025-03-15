
import { useState, useEffect } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectPhases from "./ProjectPhases";
import StatusCard from "./StatusCard";
import TrackingSection from "./TrackingSection";
import { AlertTriangle } from "lucide-react";

const ProjectDetail = () => {
  const [activePhase, setActivePhase] = useState("execution");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-pmhub-green rounded-full mb-4"></div>
          <div className="h-2 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50 animate-fade-in">
      <ProjectPhases activePhase={activePhase} setActivePhase={setActivePhase} />
      <ProjectHeader />
      
      <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 animate-slide-in">
        <StatusCard 
          status="completed" 
          title="Program in Initiation phase" 
          phase="Status: Completed"
          date="Completed On: 09-12-2024"
        />
        <StatusCard 
          status="in-progress" 
          title="Program in Planning Phase" 
          phase="Not Initiated"
        />
        <StatusCard 
          status="in-progress" 
          title="Program in Execution Phase" 
          phase="Not Initiated"
        />
        <StatusCard 
          status="pending" 
          title="Program in Closure Phase" 
          phase="Not Initiated"
        />
      </div>
      
      <div className="p-5 space-y-2 animate-slide-in">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-start gap-2 bg-orange-50 border border-orange-100 p-3 rounded-md">
            <AlertTriangle className="text-orange-500 w-5 h-5 mt-0.5" />
            <span className="text-sm text-gray-700">Kindly act on this step before due date</span>
          </div>
        ))}
      </div>
      
      <div className="flex-1 p-5 space-y-2">
        <TrackingSection number={1} title="Milestone/Plan Tracking" />
        <TrackingSection number={2} title="SLA/KPI Tracking" />
        <TrackingSection number={3} title="Risk Tracking" />
        <TrackingSection number={4} title="Metrics Tracking" />
        <TrackingSection number={5} title="EVM" />
        <TrackingSection number={6} title="FPM" />
        <TrackingSection number={7} title="OSAT" />
      </div>
    </div>
  );
};

export default ProjectDetail;
