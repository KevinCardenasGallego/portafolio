// Inicio de la trayectoria profesional: Desarrollador Full Stack en Quind SAS (2022).
export const CAREER_START_DATE = new Date(2022, 0, 1); // 1 de enero de 2022

export function getYearsOfExperience(reference: Date = new Date()): number {
  const start = CAREER_START_DATE;
  let years = reference.getFullYear() - start.getFullYear();
  const monthDiff = reference.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && reference.getDate() < start.getDate())) {
    years -= 1;
  }
  return Math.max(0, years);
}
