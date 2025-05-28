function updateClock() {
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const dateString = `${month} ${date}, ${year}`;
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayString = days[now.getDay()];
    
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('day').textContent = dayString;
}

updateClock();
setInterval(updateClock, 1000);