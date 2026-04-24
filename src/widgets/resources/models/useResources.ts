import { useState, useEffect } from 'react';

/*interface Resource {
  value: number;
  change: number;
  trend: 'up' | 'down';
  unit: string;
}*/

export function useResources() {
  const [resources, setResources] = useState({
    gas: { value: 1245.6, change: 2.3, trend: 'up', unit: 'тыс. м³' },
    power: { value: 348.2, change: -0.7, trend: 'down', unit: 'МВт·ч' },
    heat: { value: 892.4, change: 1.1, trend: 'up', unit: 'Гкал' },
    water: { value: 2345.0, change: 5.2, trend: 'up', unit: 'м³' }
  });

  const randomize = () => {
    setResources(prev => {
      const newGas = { ...prev.gas };
      newGas.value += (Math.random() - 0.5) * 5;
      newGas.value = Math.max(800, newGas.value);
      newGas.change = parseFloat((Math.random() * 4 - 1).toFixed(1));
      newGas.trend = newGas.change >= 0 ? 'up' : 'down';

      const newPower = { ...prev.power };
      newPower.value += (Math.random() - 0.5) * 3;
      newPower.value = Math.max(200, newPower.value);
      newPower.change = parseFloat((Math.random() * 3 - 1.5).toFixed(1));
      newPower.trend = newPower.change >= 0 ? 'up' : 'down';

      const newHeat = { ...prev.heat };
      newHeat.value += (Math.random() - 0.5) * 4;
      newHeat.value = Math.max(600, newHeat.value);
      newHeat.change = parseFloat((Math.random() * 2.5 - 0.5).toFixed(1));
      newHeat.trend = newHeat.change >= 0 ? 'up' : 'down';

      const newWater = { ...prev.water };
      newWater.value += (Math.random() - 0.5) * 12;
      newWater.value = Math.max(1800, newWater.value);
      newWater.change = parseFloat((Math.random() * 6 - 2).toFixed(1));
      newWater.trend = newWater.change >= 0 ? 'up' : 'down';

      return {
        gas: newGas,
        power: newPower,
        heat: newHeat,
        water: newWater
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(randomize, 30000);
    return () => clearInterval(interval);
  }, []);

  return resources;
}