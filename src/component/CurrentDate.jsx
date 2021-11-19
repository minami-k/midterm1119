import React from 'react'

function CurrentDate() {
let currentDate = new Date()
let date = currentDate.getDate();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September",
"October", "November", "December"]
let month = monthNames[currentDate.getMonth()];
let year = currentDate.getFullYear();

let time = currentDate.getHours() + ':' + currentDate.getMinutes()

    return (
        <div className="date">
            {date} {month} {year} {time}
        </div>
    )
}

export default CurrentDate
