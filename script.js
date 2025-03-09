// קובץ JavaScript בסיסי עם הערות בעברית

/**
 * פונקציה שמציגה הודעת ברכה בעברית
 * @param {string} name - השם שיוצג בהודעה
 * @returns {string} - הודעת הברכה המלאה
 */
function sayHello(name) {
  return `שלום ${name}, ברוך הבא לפרויקט!`;
}

/**
 * פונקציה חדשה להצגת התאריך והזמן הנוכחיים בעברית
 * @returns {string} - מחרוזת עם התאריך והזמן בפורמט עברי
 */
function getHebrewDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Jerusalem'
  };
  return now.toLocaleString('he-IL', options);
}

// דוגמה לשימוש בפונקציה
console.log(sayHello('עולם'));
console.log(`הזמן כרגע: ${getHebrewDateTime()}`);
