const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    // Show Betty's details when the button is clicked
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )

    // Show Nemo's details when the button is clicked
    document.querySelector("#button--nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nemo")
            theDialog.showModal()
        }
    )

    // Show Dory's details when the button is clicked
    document.querySelector("#button--dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dory")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--bobby").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bobby")
            theDialog.showModal()
        }
    )

    // Show Dapple's details when the button is clicked
    document.querySelector("#button--dapple").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dapple")
            theDialog.showModal()
        }
    )

    // Show Simba's details when the button is clicked
    document.querySelector("#button--simba").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--simba")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--lips").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--lips")
            theDialog.showModal()
        }
    )
}
            

export default initializeDetailButtonEvents