import { Button } from "@/components/ui/button";

export function TabNavigation({ handlePrev, handleNext, isTabValid, activeTab }) {
  return (
    <div className="flex justify-between mt-4">
      <Button onClick={handlePrev} disabled={activeTab === 0}>
        Prev
      </Button>
      <Button onClick={handleNext} disabled={!isTabValid()}>
        Next
      </Button>
    </div>
  );
}
