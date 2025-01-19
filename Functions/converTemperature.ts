function convertTemperature(temperature: number, to: string): number {
  if (to === "C") {
    return (temperature - 32) * (5 / 9);
  } else if (to === "F") {
    return temperature * (9 / 5) + 32;
  } else {
    return temperature;
  }
}

console.log(convertTemperature(32, "C"));