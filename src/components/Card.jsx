export default function Card({
  isChecked,
  plan,
  selectedPlan,
  setSelectedPlan,
}) {
  function handlePlan(PlanName) {
    setSelectedPlan(PlanName === selectedPlan ? "" : PlanName);
  }

  return (
    <div
      className={`flex items-center flex-col w-[140px] text-sm h-[100px]  border border-gray-400 rounded-lg hover:bg-gray-100 cursor-pointer p-3  ${
        selectedPlan === plan.name ? "activeCard" : ""
      }`}
      onClick={() => handlePlan(plan.name)}
    >
      <img
        style={{ width: plan.id === 3 ? "50px" : "60px" }}
        src={`${plan.img}`}
        alt=""
      />
      <p>{plan.name}</p>
      {isChecked ? (
        <>
          {/* <div> ${plan.priceYearly}/yr</div>
        <p className="yearly" div > 2 months free</p> */}
        </>
      ) : (
        <div>{/* ${plan.priceMonthly}/mo */}</div>
      )}
    </div>
  );
}
