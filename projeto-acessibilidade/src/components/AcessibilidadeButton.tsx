import React from "react";

interface AcessibilidadeButtonProps {
  label: string;
  onClick: () => void;
}

const AcessibilidadeButton: React.FC<AcessibilidadeButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button className="acessible-button" onClick={onClick} aria-label={label}>
      {label}
    </button>
  );
};

export default AcessibilidadeButton;
