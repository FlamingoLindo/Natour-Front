"use client"
import BarChart from "../components/chart";
import Menu from "../components/menu";
import PizzaChart from "../components/pizzaChart";

export default function Dashboard() {
  return (
    <div>
      <Menu />
      <h1>Dashboard super real</h1>
      <div className="w-[600px] h-[400px]">
        <BarChart />
      </div>
      <div className="w-[600px] h-[400px] absolute top-16 right-4">
        <PizzaChart />
      </div>
    </div>
  );
}
