import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [area, setArea] = useState('');
  const [finishType, setFinishType] = useState('');
  const [services, setServices] = useState([]);
  const [result, setResult] = useState(null);

  const finishPrices = {
    standard: 2000,
    premium: 3500,
    luxury: 5000,
  };


  //
  const serviceList = [
    { name: 'Демонтаж', price: 3000 },
    { name: 'Укладка плитки', price: 8000 },
    { name: 'Установка сантехники', price: 6000 },
    { name: 'Отделочные работы', price: 3500 },
    { name: 'Гидроизоляция', price: 6000 },
    { name: 'Установка систем отопления', price: 5000 },
    { name: 'Установка мебели и аксессуаров', price: 0 },
    { name: 'Электромонтаж', price: 4000 },
    { name: 'Консультации и подбор материалов', price: 0 },
  ];

  const handleServiceChange = (name) => {
    if (services.includes(name)) {
      setServices(services.filter((s) => s !== name));
    } else {
      setServices([...services, name]);
    }
  };

  //расчет

  const calculate = () => {
    const areaNum = parseFloat(area);
    // Проверка на заполенение
    if (!areaNum || areaNum <= 0 || !finishType) {
      alert('Введите площадь и выберите тип отделки');
      return;
    }

    //расчет цены по типу услуги и m2
    const finishCost = finishPrices[finishType];
    const servicesCost = services.reduce((sum, s) => {
      const service = serviceList.find(item => item.name === s);
      return sum + (service ? service.price : 0);
    }, 0);

    //Финальная цена

    const total = areaNum * finishCost + servicesCost;

    setResult({
      total,
      finishLabel: {
        standard: 'Стандарт',
        premium: 'Премиум',
        luxury: 'Элитная',
      }[finishType],
      services,
    });
  };

  return (
    <div className='Calculator'>
      <h2>Калькулятор стоимости ремонта</h2>

      <div>
        <label>Площадь ванной (м²):</label><br />
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          min="1"
        />
      </div>

      <div>
        <label>Тип отделки:</label><br />
        <select
          value={finishType}
          onChange={(e) => setFinishType(e.target.value)}
        >
          <option value="">-- Выберите --</option>
          <option value="standard">Стандарт (2000 ₽/м²)</option>
          <option value="premium">Премиум (3500 ₽/м²)</option>
          <option value="luxury">Элитная (5000 ₽/м²)</option>
        </select>
      </div>

      <div>
        <label>Дополнительные услуги:</label>
        <div className='checkbox-container'>
          {serviceList.map((service) => (
            <label key={service.name} className="calculator-label">
              <input
                type="checkbox"
                checked={services.includes(service.name)}
                onChange={() => handleServiceChange(service.name)}
                style={{ marginRight: 6 }}
              />
              {service.name} ({service.price} ₽)
            </label>
          ))}
        </div>
      </div>

      <button onClick={calculate}>Рассчитать</button>

      {result && (
        <div>
          <h3>Итог:</h3>
          <p>Стоимость: <strong>{result.total} ₽</strong></p>
          <p>Тип отделки: {result.finishLabel}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
