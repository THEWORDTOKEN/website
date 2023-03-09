export const accordion = (accordionTitle) =>{    
    const accordionTitleArray = document.querySelectorAll(accordionTitle)
    accordionTitleArray.forEach(title => {

        let accordionItems = title.nextElementSibling
        const pointerBox = title.children.item(0)
        let pointer = pointerBox.children.item(0)

        title.onclick = () => {
            if (!accordionItems.classList.contains("effect")) {
                pointer.textContent = "remove"
                pointer.classList.add("active")
                accordionItems.classList.add("effect")
                accordionItems.style.height = "auto"

                let accordionItemsHeight = accordionItems.clientHeight + 'px'
                accordionItems.style.height = '0px'
                setTimeout(() => {
                    accordionItems.style.height = accordionItemsHeight
                }, 0)


            } else {
                pointer.textContent = "add"
                pointer.classList.remove("active")
                accordionItems.style.height = '0px'
                accordionItems.addEventListener("transitionend", () => {
                    accordionItems.classList.remove("effect")
                }, { once: true })

            }
        }
    })
}

export const accordion_nav = (accordionTitle) =>{    
    const accordionTitleArray = document.querySelectorAll(accordionTitle)
    accordionTitleArray.forEach(title => {

        let accordionItems = title.nextElementSibling
        const pointerBox = title.children.item(0)
        let pointer = pointerBox.children.item(0)

        title.onclick = () => {
            if (!accordionItems.classList.contains("effect")) {
                pointer.classList.add("active")
                accordionItems.classList.add("effect")
                accordionItems.style.height = "auto"

                let accordionItemsHeight = accordionItems.clientHeight + 'px'
                accordionItems.style.height = '0px'
                setTimeout(() => {
                    accordionItems.style.height = accordionItemsHeight
                }, 0)


            } else {
                pointer.classList.remove("active")
                accordionItems.style.height = '0px'
                accordionItems.addEventListener("transitionend", () => {
                    accordionItems.classList.remove("effect")
                }, { once: true })

            }
        }
    })
}