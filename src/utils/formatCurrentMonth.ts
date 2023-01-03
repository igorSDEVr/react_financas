export const formatCurrentMonth = ( currentMonth: string ) =>{
  const [year, month] = currentMonth.split('-');
  let months = [
    'Janeiro',
    'Fevereiro',
    'março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
};