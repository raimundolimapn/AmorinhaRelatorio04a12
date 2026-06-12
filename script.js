// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Chart default options
Chart.defaults.font.family = "'Helvetica Neue', Helvetica, Arial, sans-serif";
Chart.defaults.color = '#5F5E5A';

const colors = {
  purple: '#534AB7',
  purpleMid: '#AFA9EC',
  teal: '#1D9E75',
  teaMid: '#5DCAA5',
  grayBg: '#F5F5F3',
  grayBorder: '#D3D1C7',
  grayText: '#5F5E5A',
  dark: '#2C2C2A',
  white: '#FFFFFF',
  amber: '#BA7517',
  amberLt: '#FAEEDA',
  red: '#A32D2D',
};

// 1. REGIÕES CHART
const ctxRegioes = document.getElementById('chartRegioes');
if (ctxRegioes) {
  const regioes = ['Minas Gerais', 'Goiás', 'Mato Grosso\\ndo Sul', 'Mato Grosso', 'São Paulo'];
  const alcance = [30421, 26347, 13885, 2485, 215];
  const invest = [450.11, 276.27, 115.68, 22.39, 1.38];

  new Chart(ctxRegioes, {
    type: 'bar',
    data: {
      labels: regioes,
      datasets: [
        {
          label: 'Alcance',
          data: alcance,
          backgroundColor: colors.teal,
          yAxisID: 'y',
          order: 2,
        },
        {
          label: 'Investimento (R$)',
          data: invest,
          borderColor: colors.purple,
          backgroundColor: 'transparent',
          borderWidth: 2,
          type: 'line',
          pointBackgroundColor: colors.purple,
          pointBorderColor: colors.white,
          pointBorderWidth: 2,
          pointRadius: 5,
          yAxisID: 'y1',
          tension: 0.3,
          order: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        y: {
          title: { display: true, text: 'Alcance (pessoas)' },
          position: 'left',
          ticks: { color: colors.teal },
          grid: { color: 'rgba(0,0,0,0.05)' },
        },
        y1: {
          title: { display: true, text: 'Investimento (R$)' },
          position: 'right',
          ticks: { color: colors.purple },
          grid: { drawOnChartArea: false },
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { usePointStyle: true, padding: 20 },
        },
      },
    },
  });
}

// 2. DEVICE CHART
const ctxDevice = document.getElementById('chartDevice');
if (ctxDevice) {
  new Chart(ctxDevice, {
    type: 'doughnut',
    data: {
      labels: ['Mobile App', 'Outros'],
      datasets: [
        {
          data: [97, 3],
          backgroundColor: [colors.teal, '#B4B2A9'],
          borderColor: colors.white,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 16 },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.label + ': ' + context.parsed + '%';
            },
          },
        },
      },
    },
  });
}

// 3. CONVERSAS CHART
const ctxConversas = document.getElementById('chartConversas');
if (ctxConversas) {
  new Chart(ctxConversas, {
    type: 'doughnut',
    data: {
      labels: ['Instagram', 'Facebook'],
      datasets: [
        {
          data: [82, 18],
          backgroundColor: [colors.purple, colors.purpleMid],
          borderColor: colors.white,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 16 },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.label + ': ' + context.parsed + '%';
            },
          },
        },
      },
    },
  });
}

// 4. CAMPANHAS CHART
const ctxCampanhas = document.getElementById('chartCampanhas');
if (ctxCampanhas) {
  const campanhas = [
    'Reconh.\\nAMR 10/06',
    'Reconh.\\nLimeira 04/06',
    'Impuls.\\nAMR',
    'Impuls.\\nOficial 08/06',
    'Impuls.\\nLimeira 04/06',
  ];
  const alcanceC = [4311, 4034, 1875, 2948, 3024];
  const investC = [20.61, 21.42, 17.95, 14.74, 59.07];

  new Chart(ctxCampanhas, {
    type: 'bar',
    data: {
      labels: campanhas,
      datasets: [
        {
          label: 'Alcance',
          data: alcanceC,
          backgroundColor: colors.purple,
          yAxisID: 'y',
          order: 2,
        },
        {
          label: 'Investimento (R$)',
          data: investC,
          backgroundColor: colors.amberLt,
          borderColor: colors.amber,
          borderWidth: 1,
          yAxisID: 'y1',
          order: 3,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        y: {
          title: { display: true, text: 'Alcance' },
          position: 'left',
          ticks: { color: colors.purple },
          grid: { color: 'rgba(0,0,0,0.05)' },
        },
        y1: {
          title: { display: true, text: 'Investimento (R$)' },
          position: 'right',
          ticks: { color: colors.amber },
          grid: { drawOnChartArea: false },
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { usePointStyle: true, padding: 20 },
        },
      },
    },
  });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}