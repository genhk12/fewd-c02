const getSleepHours = day => {
    if (day === 'mon'){
       return 8;
    }
    else if(day === 'tue'){
       return 7;
    }else if(day === `wed`){
    return 6;
  } else if(day === `thur`){
    return 5;
  } else if(day === `fri`){
    return 4;
  } else if(day === `sat`){
    return 3;
  } else if(day === `sun`){
    return 2;
  } else {'error'}
};

const getActualSleepHours = () => 
getSleepHours('mon') + getSleepHours('tue') + getSleepHours('web') + getSleepHours('thu') + getSleepHours('fri') + getSleepHours('sat') + getSleepHours('sun');
console.log(getSleepHours('mon'));
console.log(getActualSleepHours());
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(); const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours  === idealSleepHours) {
  console.log('nice sleep');
  }
  else if (actualSleepHours > idealSleepHours) {
  console.log('you already slept' +(idealSleepHours - actualSleepHours) + 'hours this week');
  }
    else if (actualSleepHours < idealSleepHours){
  console.log('not enough sleep coz you slepy only' + (idealSleepHours - actualSleepHours) + 'hours this week');
  }

  else {
    console.log('error! please check your type, thx');
  }
};

calculateSleepDebt(2);

