let timer, startTime = 0, timerStatus = 'resetted', cooldown = false

window.addEventListener('keydown', e => {
    if (cooldown) return

    cooldown = true
    document.getElementById('cooldown').innerText = '🔴'

    setTimeout(() => {
        cooldown = false
        document.getElementById('cooldown').innerText = '🟢'
    }, 1000)

    if (timerStatus === 'resetted') {
        timerStatus = 'on'
        startTime = Date.now()

        timer = setInterval(() => {
            const nowTime = new Date(Date.now() - startTime)

            document.getElementById('min').innerText = nowTime.getMinutes()
            document.getElementById('sec').innerText = nowTime.getSeconds().toString().padStart(2, '0')
            document.getElementById('ms').innerText = nowTime.getMilliseconds().toString().padStart(3, '0')
        }, 1)
    }
    else if (timerStatus === 'on') {
        clearInterval(timer)
        timerStatus = 'stopped'
    }
    else {
        timerStatus = 'resetted'
        document.getElementById('min').innerText = '0'
        document.getElementById('sec').innerText = '00'
        document.getElementById('ms').innerText = '000'
    }
})