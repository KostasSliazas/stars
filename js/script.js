(function(){

document.querySelectorAll('.stars').forEach(function (e) {
    // disable text selection
    e.style.userSelect = 'none'
    e.style.color = '#cc1'
    e.querySelectorAll('b').forEach(function(e){
        e.style.display = 'inline-block'
        e.style.height = e.style.width = e.style.lineHeight = e.style.fontSize = '24px'
    })
    e.onclick = function (e) {
        // return false if the element was clicked or not contans 'B' tag
        if (e.currentTarget.dataset.stars || e.target.tagName !== 'B') return
        // get all 'b' elements of the element
        const elements = e.currentTarget.querySelectorAll('b')
        // get index of target
        const currentIndex = [...elements].indexOf(e.target)
        // set dataset stars value of currentIndex (how many stars)
        e.currentTarget.dataset.stars = currentIndex + 1
        // set dataset stars total length
        e.currentTarget.dataset.maxStars = elements.length
        // set dataset stars value of name
        e.currentTarget.dataset.name = e.currentTarget.parentElement.innerText.substring(0, (e.currentTarget.parentElement.innerText.length - e.currentTarget.innerText.length)) 
    }
    e.onmouseover = function(e){
        // return false if the mouse is over the element, because the element is already selected and set default cursor
        if (e.currentTarget.dataset.stars) {
            e.currentTarget.style.cursor = 'auto'
            return
        }
        // set current cursor to pointer on the mouse over the element
        e.currentTarget.style.cursor = 'pointer'
                
        // get all 'b' elements of the element
        const elements = [...e.currentTarget.querySelectorAll('b')]
        
        // get index of target
        const currentIndex = elements.indexOf(e.target)
        
        // check for later changes
        let isChange = 0
        
        // check for changes
        if(isChange <= currentIndex) {
        
            // replace elements text content by index
        for (let i = elements.length - 1; i >= 0; i--) {
            // replace all elements text content as checked start
            if(currentIndex >= i) elements[i].textContent = "★"
            // replace all elements text content as unchecked (resetting)
            else elements[i].textContent = "☆"
        }
        
        // set value for current index for later checking
        isChange = currentIndex
        } 
        
        // reset value
        isChange = 0
    }
    e.onmouseleave = function (e) {
        // return false if the mouse is out the element, because the element is already selected
        if (e.currentTarget.dataset.stars) return
        
        // get all 'b' elements of the element
        const elements = e.currentTarget.querySelectorAll('b')
        
        // replace all elements text content as unchecked
        for (let i = 0; i < elements.length; i++) elements[i].textContent = "☆"
    }
})
})()