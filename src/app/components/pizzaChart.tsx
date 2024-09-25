import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar componentes necessários no Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PizzaChart = () => {
  const data = {
    labels: ['Ativos', 'Inativos'],
    datasets: [
      {
        label: 'Usuários',
        data: [100, 20], 
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', 
          'rgba(255, 99, 132, 0.6)', 
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PizzaChart;
