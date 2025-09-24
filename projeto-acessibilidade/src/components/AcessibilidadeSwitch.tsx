import React, { useState } from "react";

interface AcessibilidadeSwitchProps {
  label: string;
  initialChecked?: boolean;
}

const AcessibilidadeSwitch: React.FC<AcessibilidadeSwitchProps> = ({
  label,
  initialChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const switchId = "accessible-switch";

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "1rem",
      }}
    >
      <span id={switchId}>{label}</span>
      <button
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={switchId}
        onClick={toggleSwitch}
        className="accessible-button"
        style={{ backgroundColor: isChecked ? "var(--accent)" : "#ccc" }}
      >
        <span aria-hidden="true">{isChecked ? "Ligado" : "Desligado"}</span>
      </button>
    </div>
  );
};

export default AcessibilidadeSwitch;
