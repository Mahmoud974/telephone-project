interface StepContentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const StepContent: React.FC<StepContentProps> = ({
  title,
  description,
  children,
}) => (
  <div className="text-black px-6 flex flex-col justify-between h-[400px] lg:w-[1100px] w-[700px]">
    <div className="gap-4 relative">
      <p className="font-bold text-orange-400 lg:text-center">
        {title} - {description}
      </p>
      <div className="text-lg mt-8 overflow-auto">{children}</div>
    </div>
  </div>
);

export default StepContent;
