const data = {
    1: {
        country: "co",
        name: "Player 1",
        time: "1:55.171",
        splits: ["39.593", "37.856", "37.722"]
    },

    2: {
        country: "us",
        name: "Isaac",
        time: "1:55.183",
        splits: ["39.540", "37.920", "37.723"]
    },

    3: {
        country: "jp",
        name: "Player 2",
        time: "1:55.402",
        splits: ["39.716", "37.914", "37.772"]
    },

    4: {
        country: "es",
        name: "Player 3",
        time: "1:42.158",
        splits: ["35.449", "33.412", "33.297"]
    },

    5: {
        country: "us",
        name: "Player 4",
        time: "1:42.391",
        splits: ["35.542", "33.428", "33.421"]
    },

    6: {
        country: "fr",
        name: "Player 5",
        time: "1:42.467",
        splits: ["35.487", "33.557", "33.423"]
    }
}

const elemID = (id) => document.getElementById(id)

const trElems = document.getElementsByTagName("tr")

for (const tr of trElems) {
    tr.addEventListener(
        "click",
        () => {
            const id = tr.getAttribute("mk-id")
            const playerData = data[id]

            if (!playerData) {
                return
            }

            updateDetails(playerData)
        }
    )
} 

function updateDetails(playerData) {
    console.log("To do: show details", playerData)
    const profileFlag = elemID("details-country")
    const profileName = elemID("details-player")
    const profileTime = elemID("details-time")
    const s1 = elemID("l1")
    const s2 = elemID("l2")
    const s3 = elemID("l3")
    profileFlag.src = `https://www.mkleaderboards.com/images/flags/${playerData.country}.png`
    profileName.textContent = `${playerData.name}`
    profileTime.textContent = `${playerData.time}`
    s1.textContent = `${playerData.splits[0]}`
    s2.textContent = `${playerData.splits[1]}`
    s3.textContent = `${playerData.splits[2]}`
}

function sayHello() {
    const nameInput = elemID("name")
    alert(`Hello, ${nameInput.value}`)
}

elemID("test-button").addEventListener(
    "click",
    sayHello
)