
const formatTime = (isoString) => {
  if (!isoString) return ''; 

  const date = new Date(isoString);
  
 
  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export default formatTime