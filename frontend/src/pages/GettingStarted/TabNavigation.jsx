import { Button } from "@/components/ui/button";

export function TabNavigation({ handlePrev, handleNext,handleSubmit, isTabValid, activeTab }) {
  return (
    <div className="flex justify-between mt-4">
      <Button onClick={handlePrev} disabled={activeTab === 0}>
        Prev
      </Button>
      <Button onClick={activeTab === 4 ? handleSubmit :handleNext} disabled={!isTabValid()}>
        {activeTab === 4 ? "Submit" : "Next"}
      </Button>
    </div>
  );
}
