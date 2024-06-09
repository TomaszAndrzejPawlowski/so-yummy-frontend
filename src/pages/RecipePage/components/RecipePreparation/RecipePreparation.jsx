const RecipePreparation = ({ title, instructions, preview }) => {
  const steps = instructions.split("\r\n").filter((step) => step.trim() !== "");

  return (
    <>
      <ul>
        <li>
          <h3>Recipe Preparation</h3>
        </li>
        <li>
          {steps.map((step, index) => (
            <p key={index}>
              {index + 1}. {step}
            </p>
          ))}
        </li>
        <li>
          <img src={preview} alt={title} />
        </li>
      </ul>
    </>
  );
};

export default RecipePreparation;
