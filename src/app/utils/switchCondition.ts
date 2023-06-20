export const switchCondition = (condition: any) => {
  switch(condition) {
    case 'Sunny':
      return 'Ensolarado'
    case 'Light rain shower':
      return 'Chuva Leve'
    case 'Patchy rain possible':
      return 'Chuva irregular'
    case 'Overcast':
      return 'Obscurecido'
    case 'Cloudy':
      return 'Nublado'
    case 'Partly cloudy': 
      return 'Parcialmente Nublado'
    case 'Clear':
      return 'Limpo'
    default:
      return condition
  }
}